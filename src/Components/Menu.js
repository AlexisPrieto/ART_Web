/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {Link} from "react-router-dom";
import Logo from '../Assets/Img/logo.svg';
import PhoneIcon from '@material-ui/icons/Phone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Edifice from "../Assets/Icons/ART_Icon_Edifice";
import '../Assets/Css/App.css';

export class Menu extends Component {
  render() {
    return (

      <div>
            <div>
              <Link to="/INICIO">
                <img className="center header"  src={Logo}/>
              </Link>

              <div style={{float: 'right', display: 'flex', color: 'gray', marginTop: '1%'}}>
                <PhoneIcon style={{'font-size': '4em'}} />
                <div>
                  <a  style={{display: 'inline','font-weight': 'bold'}}>EMERGENCIAS
                  </a>
                  <br/>
                  <h2 style={{'font-weight': '900'}} >0800 333 6888</h2>
                </div>
                <a title="Trabaje con Nosotros" href="http://artmutualrural.com:8080/exec/art/arti.wap.0" target="_blank">
                  <AccountCircleIcon style={{'font-size': '4.6em', color: 'orange'}} />
                </a>
                <Edifice width={65} fill='white' style={{margin: '4px',display: 'inline-block',padding: '2px','border-radius': '50%', backgroundColor:'orange'}}/>
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: 'yellowgreen'}}>
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
                <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: 'yellowgreen'}}>
                  <Link className="dropdown-item" to="/COBERTURA">
                    COBERTURA
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
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type=""
                placeholder="Buscar"
                aria-label="Search"
              ></input>

            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
