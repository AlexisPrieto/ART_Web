/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {Link} from "react-router-dom";
import Logo from '../Assets/Img/logo1.png';
import PhoneIcon from '@material-ui/icons/Phone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Edifice from "../Assets/Icons/ART_Icon_Edifice";
import '../Assets/Css/App.css';
import { Button} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const greenTheme = createMuiTheme({ palette: 
  { 
    primary:{
      light: '#83BC00',
      main: '#83BC00',
      dark: 'green',
      contrastText: '#fff',
    }
  } 
})
export class Menu extends Component {

  render() {
    return (

      <div style={{display: 'grid'}}>
            <div>
              <Link to="/INICIO">
                <img className="center header"  src={Logo}/>
              </Link>
              <div style={{'display': 'inline-flex', 'margin': '0% 0% 0% 8%'}}>
              <MuiThemeProvider theme={greenTheme} >
                <a href="/POLIZA" target="_blank">
                  
                    <Button variant="contained" color="primary">
                        Solicitá cotización
                    </Button>                  
              </a>
              </MuiThemeProvider>
              </div>
              <div style={{float: 'right', display: 'flex', color: '#96989A', marginTop: '1%'}}>
                <PhoneIcon className="hide-celular" style={{'font-size': '4em'}} />
                <div className="hide-celular">
                  <a  style={{display: 'inline','font-weight': 'bold'}}>EMERGENCIAS
                  </a>
                  <br/>
                  <h2 style={{'font-weight': '900'}} >0800 333 6888</h2>
                </div>
                <a title="intraNet de Prueba" href="http://www.intersistemas.net:82/app/ARTRural" target="_blank">
                  <AccountCircleIcon style={{'font-size': '4.6em', color: '#F8A700'}} />
                </a>
                <a title="intraNet de Producción" href="http://www.artmutualrural.org.ar:81/app/ArtRural" target="_blank">
                  <AccountCircleIcon style={{'font-size': '4.6em', color: '#F8A700'}} />
                </a>

               <Link title="Capacitación" to="/CAPACITACION">
                  <Edifice width={65} fill='white' style={{margin: '4px',display: 'inline-block',padding: '2px','border-radius': '50%', backgroundColor:'#F8A700'}}/>
               </Link>
              </div>
            </div>
       
        <nav className="navbar navbar-expand-lg navbar-dark MyNavbar">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div style={{margin: '-0.4%'}} className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-color" to="/INICIO">
                    INICIO <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-color dropdown-toggle"
                  to="/NOSOTROS"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  NOSOTROS
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: '#83BC00'}}>
                  <Link className="dropdown-item" to="/AUTORIDADES">
                    AUTORIDADES
                  </Link>
                  <Link className="dropdown-item" to="/NOSOTROS_QUIENES">
                    QUIENES SOMOS
                  </Link>
                  <Link className="dropdown-item" to="/NOSOTROS_PORQUE">
                    POR QUE SOMOS UNA MUTUAL
                  </Link>
                  <Link className="dropdown-item" to="/NOSOTROS_MISION">
                    MISION, VISION, VALORES
                  </Link>
                  
                  </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-color dropdown-toggle"
                  to="/COBERTURA"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  COBERTURA
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: '#83BC00'}}>
                  <Link className="dropdown-item" to="/DENUNCIAS">
                    DENUNCIAS
                  </Link>
                  <Link className="dropdown-item" to="/PRESTACIONES">
                    PRESTACIONES
                  </Link>
                  <Link className="dropdown-item" to="/NORMATIVA">
                    NORMATIVA
                  </Link>
                  <Link className="dropdown-item" to="/PREGUNTASFRECUENTES">
                    PREGUNTAS FRECUENTES
                  </Link>
                </div>
              </li>
             
             
              <li className="nav-item dropdown">
                <Link
                  className="nav-color dropdown-toggle"
                  to="/PREVENCION"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  PREVENCIÓN
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: '#83BC00'}}>
                  <Link className="dropdown-item" to="/PREVENCION_INFO">
                  INFORMACIÓN
                  </Link>
                  <Link className="dropdown-item" to="/PREVENCION_DESC">
                    DESCARGAS
                  </Link>
                  <Link className="dropdown-item" to="/PREVENCION_MAT">
                    MATERIAL
                  </Link>
                  
                  </div>
              </li>


              <li className="nav-item">
                <Link
                  className="nav-color"
                  to="/DESCARGAS"
                  aria-disabled="true"
                >
                  DESCARGAS
                </Link>
              </li>
              
              <li className="nav-item">
                <Link
                  className="nav-color"
                  to="/NOVEDADES"
                  aria-disabled="true"
                >
                  NOVEDADES
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-color"
                  to="/RECLAMOS"
                  aria-disabled="true"
                >
                  CONSULTAS Y RECLAMOS
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-color dropdown-toggle"
                  to="/COVID"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{'outline-style':'ridge'/*'text-decoration': 'underline'*/}}
                  
                >
                  COVID
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: '#83BC00'}}>
                  <Link className="dropdown-item" to="/COVID_INFO">
                  INFORMACIÓN
                  </Link>
                  <Link className="dropdown-item" to="/COVID_DESC">
                    DESCARGAS
                  </Link>                  
                  </div>
              </li>

            </ul>
            {/*<form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type=""
                placeholder="Buscar"
                aria-label="Search"
              ></input>

            </form>*/}
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
