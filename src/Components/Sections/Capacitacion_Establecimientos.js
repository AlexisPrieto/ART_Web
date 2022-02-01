import React, { Component} from 'react';
import {Button, Select, FormControl    } from '@material-ui/core';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';



export class Capacitacion_Establecimientos extends Component {

    constructor(props) {
        super(props)
        this.state = {
           
            empresasEstablecimiento: [],
            establecimientos: {},
            establecimientoSeleccionado: {},
        }

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
    });

    componentDidMount(){

      console.log('*--props.empreEstab: ',this.props.empreEstab[0].RefEstablecimiento);

      this.setState({
        empresasEstablecimiento: this.props.empreEstab,
        establecimientos: this.props.empreEstab[0].RefEstablecimiento,
        establecimientoSeleccionado: null,
      });

    }  

    handleClick= e => {
      
      if (this.state.establecimientoSeleccionado == null){

        console.log('null---');
               
      }else{

        console.log('userEstab2:', this.state.establecimientoSeleccionado);
        this.props.userEstab(this.state.establecimientoSeleccionado);
        
      };
    }

    valueToState = (event) => {

      console.log(' event.target.value1: '+ event.target.value);
      
      if (event.target.name == "establec" ){

        var e = event.target.value === '' ? null : event.target.value;
        this.setState({
          establecimientoSeleccionado: e,
        });

      }
    };
    

 

    render() {
        return (
            <div className="container" style={{margin: '5%'}}>
               Establecimientos:
               <div style={{marginTop: '3%'}}>
                
               <form>
               <FormControl variant="outlined">
                <ThemeProvider theme={this.theme}>
                  <Select
                    native
                    //value={muiSelectValue}
                    //labelWidth={labelWidth}
                    name="establec"
                    onChange={this.valueToState}
                    required

                    >
                      <option value=''>-Seleccione un Establecimiento-</option>
                    {this.props.empreEstab[0].RefEstablecimiento.map((option) => (
                      <option value={option.Interno} key={option.id}>Suc: {option.NroSucursal} - {option.CodEstabEmpresa} - Dom: {option.DomicilioCalle} Nº{option.DomicilioNro} - {option.SRTLocalidad.NombreCompleto}</option>
                    ))} 
                    
                  </Select>
                  </ThemeProvider>
                </FormControl>
                {/*  
                <select value="Establecimiento">
                  {this.props.empreEstab[0].RefEstablecimiento.map((option) => (
                    <option value={option.Interno}>Nro Suc: {option.NroSucursal} - Localidad: {option.SRTLocalidad.Nombre}</option>
                  ))}
                </select>*/}

                <ThemeProvider theme={this.theme}>
                  <Button style={{margin: '0% 3%'}} type="submit" variant="contained" color="primary" onClick={this.handleClick} >Elegir</Button>
                </ThemeProvider>
                </form>
              </div>
            </div>
        )
      }
    }

export default Capacitacion_Establecimientos;
