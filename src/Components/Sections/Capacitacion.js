import React, { Component, Fragment } from "react";
import Capacitacion_Login from "./Capacitacion_Login";
import Capacitacion_Usuario from "./Capacitacion_Usuario";
import Capacitacion_Establecimientos from "./Capacitacion_Establecimientos";

export class Capacitacion extends Component { 

  constructor() {
    super();
    this.state = {
      isLoginOpen: true,
      isCapacitacionesOpen: false,
      isEstablecimientosOpen: false,
      user:{},
      userCUIT:'',
      empresas:[],
      userEstablecimiento:{
          interno: 0,
          nroSucursal: 0,
          codEstabEmpresa: 0,
          domicilio: '',
      }
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleEstablecimiento = this.handleEstablecimiento.bind(this);
    //this.loggedIn = this.loggedIn.bind(this); 
  };

  handleLogin(data, cuit){
    
    console.log('id capa: '+data.Id);
    console.log('cuit: '+cuit);
    console.log('data.UsuarioWebEmpresas', data.UsuarioWebEmpresas);
    var verEstablecimientos = ((data.UsuarioWebEmpresas.length) > 0) ? (data.UsuarioWebEmpresas[0].RefEstablecimiento.length) > 0 ? true : false : false;
    console.log('verEstablecimientos: '+verEstablecimientos);

    this.setState({
      isLoginOpen: false,
      isCapacitacionesOpen: true,
      isEstablecimientosOpen: verEstablecimientos,
      user: data,
      userCUIT: cuit,
      empresas: data.UsuarioWebEmpresas,
    });
    console.log('usuario: ',this.state.user);
  }


  handleEstablecimiento(internoEstab){

    console.log('establ_main: '+internoEstab);

    const respuestas = this.state.empresas[0].RefEstablecimiento.map((resp) => {
      if (resp.Interno == internoEstab){

        let estab = {...this.state.userEstablecimiento};
        console.log('establ_main22---: '+estab);

        estab.interno = resp.Interno
        estab.nroSucursal = resp.NroSucursal
        estab.codEstabEmpresa = resp.CodEstabEmpresa
        estab.domicilio = resp.DomicilioCalle+' Nº:'+resp.DomicilioNro +' - ('+resp.SRTLocalidad.NombreCompleto+')'

        this.setState({
          userEstablecimiento: estab,
          isEstablecimientosOpen: false,
        });        
        
      }/*else{
        console.log('establ_main33---: '+internoEstab);
      };*/

    });
  }


  handleLogout(){
    this.setState({
      isLoginOpen: true,
      isCapacitacionesOpen: false,
      user: {},
      userCUIT: 0,
    });
  }

  isLoggedin(){
    const token = localStorage.getItem("authToken");
    if(this.state.loggedIn === "no-logueado" && token){
      this.setState({
        loggedIn: "Logueado",
        user: token
      });
    }
  }

  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showCapacitacionesBox() {
    this.setState({isLoginOpen: false, isCapacitacionesOpen: true});
  }

  render() {

    return (

        <Fragment>
          <div style={{padding: '3% 6%', 'border': 'solid #f8a700 2px'}} >
            <div style={{color: 'rgb(150, 152, 154)'}}>
                  <h2 /*className="inicio-title"*/
                  style={{'font-weight': 'bold'}}
                  >Capacitaciones</h2>
            </div>
            
            <div >
              
              { this.state.isCapacitacionesOpen ? <div style={{'place-content': 'center', maxWidth: 'max-content'}} className="alert alert-success col-md-7 mx-auto" role="alert">Bienvenido <br/><br/>  {this.state.user.Nombre}!
              {this.state.user.Tipo === "T" ? <div style={{'color': '#f8a700'}}> Trabajador <br/> 
              
              {this.state.userEstablecimiento.interno >  0 ? <div style={{'color': '#f8a700'}}>  <br/>
            Establecimiento: Nro: {this.state.userEstablecimiento.nroSucursal} - Cod: {this.state.userEstablecimiento.codEstabEmpresa} - Dom: {this.state.userEstablecimiento.domicilio} </div> : ``}
             
              </div> : <div style={{'color': '#f8a700'}}> Empleador </div>}
              </div> : ``}
            </div>


            

          

          </div>

          {this.state.isLoginOpen && <Capacitacion_Login  usuarioLogueado={this.handleLogin}/>}

          {this.state.isEstablecimientosOpen && <Capacitacion_Establecimientos empreEstab = {this.state.empresas} userEstab ={this.handleEstablecimiento}/>}

          {this.state.isCapacitacionesOpen && (!this.state.isEstablecimientosOpen) &&<Capacitacion_Usuario userCUIT2={this.state.userCUIT} userId={this.state.user.Id} userTipo={this.state.user.Tipo} estabId={this.state.userEstablecimiento.interno}/>}
          
     </Fragment>
    );
  }
}

export default Capacitacion;
