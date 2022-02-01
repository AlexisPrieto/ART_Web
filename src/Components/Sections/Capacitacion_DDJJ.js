import React, { Component} from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import {Button} from '@material-ui/core';
import ApiCapaUsuariosCUIT from '../../Api/ApiCapaUsuariosCUIT.js';
import ApiCapaEmpleadoresCUIT from '../../Api/ApiCapaEmpleadoresCUIT.js';
import ApiEmpleador_X_CUIT from '../../Api/ApiEmpleador_X_CUIT.js';
import ApiRegistrarAcredito from '../../Api/ApiRegistrarAcredito.js';
import BootstrapTable from 'react-bootstrap-table-next';
import Capacitacion_DDJJ_PDF_Ventana from './Capacitacion_DDJJ_PDF_Ventana.js';
import moment from "moment";
import Modal from 'react-bootstrap/Modal'


export class Capacitacion_DDJJ extends Component {

    constructor(props) {
        super(props)

        this.CerrarVentanaImprimirDDJJ = this.CerrarVentanaImprimirDDJJ.bind(this);

        this.state = {
          modulos: [],
          capas: [],
          capacitaciones: [
            {
                dataField: 'IdCapa',
                text: '#',
                hidden: true,
            },  
            {
                dataField: 'Descripcion',
                text: 'Capacitación',
                editable: false, 
            }, 
            {
                dataField: 'Acredito',
                text: 'Acredito',
                formatter: this.Acreditar,
                
            }, 
            {
                dataField: 'Fecha',
                text: 'Fecha',
                editable: false, 
            }, 
          ],
          capaUsuarios: [],
          capaAcredita: [],
          modalPDFIsOpen: false,
          empleadorDatos: {},
          acreditaNroCapa: 0,
          modal: false,
          capaSeleccion: 0,
        }

        this.onFollowChanged.bind(this);
    }


    handleOpen = () => this.setState({ modal: true,});

    handleClose = () => {
      console.log('handleClose');
      this.setState({ modal: false, acreditaNroCapa: 0,});
    }

    theme = createMuiTheme({
      palette: {
        primary:{
          light: '#83BC00',
          main: '#83BC00',
          dark: 'green',
          contrastText: '#fff',
      },
        secondary: green,
      },
    })
    
    componentDidMount(){ 

      //CONSULTO LOS DATOS DEL EMPLEADOR:
      ApiEmpleador_X_CUIT(this.props.CUIT)
      .then((response) => {
          if (response.data){
            console.log('ApiEmpleador_X_CUIT: ', response.status, response.data);

            this.setState({
              empleadorDatos: response.data,
            });

          }else{
            console.log('ERROR ApiEmpleador_X_CUIT!', response.status, response.data);
          }	
      },
      (error) => {
         console.log('error ApiEmpleador_X_CUIT: '+error);
      })


      let Modulos = [
          {Nro: 1,
          Descripcion: 'Riesgos  en los Establecimientos',
          },
          {Nro: 2,
            Descripcion: 'Normativa en H y Seguridad en el Trabajo',
          },
          {Nro: 3,
            Descripcion: 'Elementos de Protección Personal',
          },
          {Nro: 4,
            Descripcion: 'Productos Químicos y Biológicos',
          },
      ];
      this.setState({
        modulos: Modulos,
      });

      
     this.traerAcreditaciones();

    }  


    traerAcreditaciones = async() =>{

      let a = this.state.capas;
        a.push({IdCapa: 1, Descripcion: 'Modulo 2) Capacitación COVID-19', Acredito: false, Fecha: ''})
        a.push({IdCapa: 2, Descripcion: 'Modulo 2) Botiquin', Acredito: false, Fecha: ''})

       //traigo las capacitacionesempleador para ver cuáles acreditó.
      await ApiCapaEmpleadoresCUIT(this.props.CUIT)
      .then((response) => {
        
        if (response.data){
          
          const autorizaciones = response.data.map(autoriz => {  
 
            if (autoriz.CapacitacionesId == 1){
                a[0] = {...a[0],Acredito:true, Fecha: autoriz.FechaAcredito}
                console.log('entro perreke');
 
            };

            if (autoriz.CapacitacionesId == 2){
              a[1] = {...a[1],Acredito:true, Fecha: autoriz.FechaAcredito}
            };

          })

          console.log('a**-',a)

         this.setState({
            capas: a,
          });
      }
      },
      (error) => {
         console.log('error: '+error);
      })

    }

    traerEvaluaciones = async (e, row, rowIndex) => {   

      await ApiCapaUsuariosCUIT(this.props.CUIT)
      .then((response) => {
          if (response.data){
        console.log('CapaUsuariosCUIT: ', response.status, response.data);
        console.log('row.IdCapa: '+row.IdCapa)
        let c = [];
        response.data.map(capa => {  
          if (capa.CapacitacionesId == row.IdCapa){
            c.push({Id: capa.CapacitacionesUsuariosId, CapaId: capa.CapacitacionesId, Fecha: (moment(capa.FechaEvaluacion).format('DD-MM-YYYY')), CUIL: capa.UsuariosWeb.CUIT, NYA: capa.UsuariosWeb.Nombre, Calificacion: capa.Calificacion, Establecimiento: capa.RefEstablecimiento.NroSucursal+' - '+capa.RefEstablecimiento.CodEstabEmpresa+' - '+capa.RefEstablecimiento.DomicilioCalle +' '+capa.RefEstablecimiento.DomicilioNro+' - '+capa.RefEstablecimiento.SRTLocalidad.NombreCompleto})
          };
        })

        this.setState({
          capaUsuarios: c,
        });

       

        console.log('capas: ',c);

      }else{
        console.log('ERROR!', response.status, response.data);
      }	
      },
      (error) => {
         console.log('error: '+error);
      })
      
      this.setState({
        capaSeleccion: row.IdCapa,
      })
    }

    AbrirVentanaImprimirDDJJ () {

      this.setState({ modalPDFIsOpen: true });
   
    }

    onFollowChanged(row) {
      
      console.log('onFollowChanged_IdCapa: '+row.IdCapa);
      this.setState({
        modal: true,
        acreditaNroCapa: row.IdCapa
      });
      
      //console.log(this.state.acredita);
    }

  
    Acreditar = (cell, row, rowIndex, formatExtraData) => {
      return (
        <ThemeProvider theme={this.theme}>
          <Button
            type="submit" 
            variant="contained" 
            color="primary" 
            disabled={row.Acredito ? true:false}
            onClick={() => {
              this.onFollowChanged(row);
            }}
          >
            Acreditar
          </Button>
        </ThemeProvider>
      );
    };

    async handleAcreditar(){
      var date = new Date();

      console.log('handleAcreditar');
      const CapacitacionesEmpleador = {
        CUITEmpleador: this.props.CUIT,
        CapacitacionesId: this.state.acreditaNroCapa,
        Acredito: true,
        FechaAcredito: moment(date).format('YYYY-MM-DD'),
      }
      
     await ApiRegistrarAcredito(CapacitacionesEmpleador)
        .then((response) => {
            if (response.data){
                console.log('ApiRegistrarAcredito: ',response.data)
                
            }else{
              
            }	
            },
            (error) => {
                console.log('error: '+error);
            });
       
      this.handleClose();

      this.traerAcreditaciones();

    }

    CerrarVentanaImprimirDDJJ () {
      this.setState({ modalPDFIsOpen: false });
    };    
    
    render() {
      const CapacitacionesUsuarios = [
        {
          dataField: 'Id',
          text: '#',
          hidden: true,
        },             
        {
          dataField: 'CapaId',
          text: 'CapaId',   
          editable: false, 
          hidden: true,      
        }, 
        {
          dataField: 'Fecha',
          text: 'Fecha',   
          editable: false,
          headerStyle: { 'font-weight': 'normal'},          
        }, 
        {
          dataField: 'CUIL',
          text: 'CUIL',   
          editable: false,       
          headerStyle: { 'font-weight': 'normal'},   
        }, 
        {
          dataField: 'NYA',
          text: 'Nombre y Apellido',   
          editable: false,     
          headerStyle: { 'font-weight': 'normal'},     
        },
        {
          dataField: 'Calificacion',
          text: 'Calificación',   
          editable: false,     
          headerStyle: { 'font-weight': 'normal'},     
        },
        {
          dataField: 'Establecimiento',
          text: 'Establecimiento',   
          editable: false,     
          headerStyle: { 'font-weight': 'normal'},     
        },
      ];

      const rowEvents = {
         
          onClick: (e, row, rowIndex, ) => {
              console.log('rowEvents');
              this.traerEvaluaciones(e, row, rowIndex)
          },            
      };
      
      const rowStyle = (row, rowIndex) => {
        const style = {};
        style.fontSize = 12;
        return style;
      };


      const expandRow = {
        
        onlyOneExpanding: true,
        renderer: row => {
            console.log('tipo mov:'+row.IdCapa)
            if (row.IdCapa == 1){
              return (
                <div style={{border: 'solid 1px black'}}>
                    <div>
                        <h4 style={{fontSize: 'larger'}}>Evaluaciones de Empleados:</h4>
                        <BootstrapTable
                            keyField='Id' 
                            data={ this.state.capaUsuarios }
                            columns={ CapacitacionesUsuarios }  
                            rowStyle={rowStyle}   
                            noDataIndication="No hay datos para mostrar"
                            striped 
                        />
                    </div>
                </div>
              )
            };
            if (row.IdCapa == 2){
              return (
                <div style={{border: 'solid 1px black'}}>
                    <div>
                        <h4 style={{fontSize: 'larger'}}>Evaluaciones de Empleados:</h4>
                        <BootstrapTable
                            keyField='Id' 
                            data={ this.state.capaUsuarios }
                            columns={ CapacitacionesUsuarios }  
                            rowStyle={rowStyle}   
                            noDataIndication="No hay datos para mostrar"
                            striped 
                        />
                    </div>
                </div>
              )
            };
        }
      };

      return (
          <>
            
            {
              <Modal show={this.state.modal} onHide={this.handleClose}>
              
                  <Modal.Header closeButton>
                    <Modal.Title>Acreditar</Modal.Title>
                  </Modal.Header>
                  {console.log('this.state.capaSeleccion: '+this.state.capaSeleccion)}
                  {this.state.capaSeleccion == 1 ? 
                  <Modal.Body>Va a acreditar la capacitación: Modulo 2 - Capacitación COVID-19 </Modal.Body>
                  :
                  <Modal.Body>Va a acreditar la capacitación: Modulo 2 - Botiquin </Modal.Body>
                  }
                  <Modal.Footer>
                    <Button color="secondary"  type="submit" variant="contained"  onClick={this.handleClose}>
                        Cerrar
                    </Button>
                    <Button  type="submit" variant="contained" onClick={() => this.handleAcreditar()}>
                        Acreditar
                    </Button>
                  </Modal.Footer>
              </Modal>
            }

            <div className="container" style={{marginTop: '10%'}}>
               <a style={{borderBottom: '5px solid #F8A700'}}>CAPACITACIONES </a>
                
               <BootstrapTable 
                    keyField="IdCapa"
                    data={ this.state.capas } 
                    columns={ this.state.capacitaciones } 
                    noDataIndication="No hay datos para mostrar" 
                    //selectRow={selectRow}
                    rowEvents={rowEvents}
                    expandRow={expandRow}
                    striped
                    hover
               />

            <ThemeProvider theme={this.theme}>
              <Button type="submit" variant="contained" color="primary" disabled={this.state.capaUsuarios.length > 0 ? false:true} onClick={() => this.AbrirVentanaImprimirDDJJ()}>
                  Imprimir DDJJ
              </Button>
            </ThemeProvider>


            </div>

            <div>
             {this.state.modalPDFIsOpen ?
                    <Capacitacion_DDJJ_PDF_Ventana  
                       modalPDFIsOpen={this.state.modalPDFIsOpen}
                       capacitaciones={this.state.capaUsuarios}
                       empleadorDatos={this.state.empleadorDatos}
                       handleCerrarVentanaImpresion={this.CerrarVentanaImprimirDDJJ}
                    />
                :
                    null
                }
            </div>
            </>
        )
      }
    }

export default Capacitacion_DDJJ;
