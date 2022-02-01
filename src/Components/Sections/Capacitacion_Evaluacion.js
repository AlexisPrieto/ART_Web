import React, { Component, Fragment} from 'react';
import {Button, TextField, Select, FormControl, Radio} from '@material-ui/core'; 
import {createMuiTheme, makeStyles, withStyles,ThemeProvider} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import ApiEvaluacion from '../../Api/ApiEvaluacion.js';
import ApiRegistrarCalificacion from '../../Api/ApiRegistrarCalificacion.js';
import moment from "moment";
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';

export class Capacitacion_Evaluacion extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Items: [],
            EvaluacionCompleta: false,
            open: false,
            calificacion: 0,
        }

        this.calificar = this.calificar.bind(this);
    }

    handleOpen = () => this.setState({ open: true });

    handleClose = () => this.setState({ open: false });

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
    });
    
    componentDidMount(){

      console.log('props.CUIT'+this.props.CUITEmpre2);
      console.log('props.Id'+this.props.Id);
      console.log('props.EstablecimientoId'+this.props.EstablecimientoId);

      ApiEvaluacion(this.props.IdEval)
        .then((response) => {
            if (response.data){
				console.log('La data: ', response.status, response.data);
        let preguntas = [];
        response.data.map(pregunta => {            
          preguntas.push({Nro: pregunta.Item, Pregunta: pregunta.Preguntas.Descripcion, Respuesta: pregunta.Preguntas.Respuesta, RespuestaUser: '', CapaId: pregunta.CapacitacionesId, Identity: this.props.Id, CUITEmpre2: this.props.CUITEmpre, EstablId: this.props.EstablecimientoId})
        })

        
        this.setState({
          Items: preguntas,
        });

			}else{
				console.log('ERROR!', response.status, response.data);
			}	
        },
        (error) => {
           console.log('error: '+error);
        })
    }  

    handleChange = e => {
      const { name, value } = e.target;
      const respuestas = this.state.Items.map((resp) => {
        if (resp.Nro == value){

          return {
            ...resp,
            RespuestaUser: name,
          }
        }

        return resp
      });

      this.setState({
        Items: respuestas,
      });

      this.validar(respuestas);

    };

    validar(e) {
      var flag = true;
      //VERIFICO si el formulario fue respondido en su totalidad, si así fué, hbilito el boton de ENVIAR
      e.map((resp3) => {
        if (resp3.RespuestaUser == ''){
            flag = false;
        }
        })
 
        this.setState({
          EvaluacionCompleta: flag,
        });
    };


    calificar (){ //Calculo la calificacion del Empleado
        
        var cantPreg = this.state.Items.length

        var cantRespCorrectas = 0;
        this.state.Items.map((resp) => {
          if (resp.Respuesta == resp.RespuestaUser){
            cantRespCorrectas++;
          }
      })
      console.log('cantPreg: '+cantRespCorrectas);

      var calificacionUser = ((cantRespCorrectas*10)/cantPreg) //DANDO LA NOTA!

      console.log('calificacion: '+calificacionUser);

      this.setState({
        calificacion: calificacionUser,
      });

      if (calificacionUser > 6){
        var date = new Date(); //Current Date
        var fecha = moment(date).format('YYYY-MM-DD');

        const CalificacionRegistro = {
          CUIT: this.state.Items[0].CUITEmpre2,
          CapacitacionesId: this.state.Items[0].CapaId,
          UsuariosWebId: this.state.Items[0].Identity,
          FechaEvaluacion: fecha,
          Calificacion: calificacionUser,
          InternoEstablecimiento: this.state.Items[0].EstablId,
        }

        ApiRegistrarCalificacion(CalificacionRegistro)
        .then((response) => {
            if (response.data){
             
            }else{
              
            }	
            },
            (error) => {
                console.log('error: '+error);
            })

      }else{
          console.log('this.state.Calificacion: '+this.state.calificacion);
          console.log('mala nota');
      };
      
      this.setState({
        open: true, 
     });

     setTimeout(() => {
          this.setState({
              open: false, 
          });
      }, 5000);

    
    };

    handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      this.setState({
        open: false, 
     });

    };

    render() {
        const { open } = this.state;
        return (
            <div className="container" style={{marginTop: '10%', maxWidth: 'fit-content'}}>
               {this.props.IdEval == 1 ? <a style={{borderBottom: '5px solid #F8A700'}}>CUESTIONARIO DE CAPACITACION COVID-19 PARTE UNO: </a>:<a style={{borderBottom: '5px solid #F8A700'}}>CUESTIONARIO DE CAPACITACION BOTIQUIN: </a>}
                <ul className="list-group">          
                    {this.state.Items.map(obj => (         
                        <li 
                          className="list-item-descargas"
                          key={obj.Nro}
                          > 
                          <label htmlFor={obj.Nro}>{obj.Nro} - {obj.Pregunta}</label>
                          <div className="mx-auto"  >
                            <div className="row"> 
                              <div  style={{padding: '0% 5%'}}>
                              
                              <tr> 
                                <td >SI
                                  <Radio style={{color: 'rgb(131, 188, 0)'}} type="radio" name='Si' 
                                   value={obj.Nro}  
                                   checked={obj.RespuestaUser === 'Si'} 
                                   onChange={this.handleChange}
                                   
                                   />
                                </td>

                                <td style={{alignItems: 'center', display: 'flex', padding: '0% 0% 0% 32%'}}>NO
                                  <Radio style={{color: 'rgb(131, 188, 0)'}} type="radio" name='No' 
                                   value={obj.Nro} 
                                   checked={obj.RespuestaUser === 'No'}
                                   onChange={this.handleChange}
                                   
                                    />
                                </td>
                              </tr> 
                                
                              </div>
                            </div>	
                          </div>
                        
                        </li>
                    ))}
                </ul>

                <div style={{margin:'12%'}} >                
                    <ThemeProvider theme={this.theme} >
                        
                        <Button type="submit" variant="contained" color="primary" disabled={(this.state.EvaluacionCompleta === false) ? true : false} onClick={this.calificar} >
                            Enviar Evaluación
                        </Button>

                        <div style={{marginTop: '5%'}}>

                          <Collapse in={open}>
                            {(this.state.calificacion >= 6) ?
                            <Alert severity="success" variant="filled" >
                                Aprobó la evaluación con: {this.state.calificacion} Felicidades!
                            </Alert>
                              :
                            <Alert variant="filled" severity="error">
                                Verifique sus respuestas y vuelva a Enviar la Evaluación
                            </Alert>
                          }
                          </Collapse>
                        </div>
                        
                    </ThemeProvider>   
                </div>
            </div>
        )
      }
    }

export default Capacitacion_Evaluacion;
