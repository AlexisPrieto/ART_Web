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
          
            <Link to="/INICIO">
              <img className="center header" src={Logo}/>
            </Link>

            <div style={{float: 'right', display: 'flex', color: 'gray'}}>
              <PhoneIcon style={{'font-size': '4em'}} />
              <div>
                <a  style={{display: 'inline','font-weight': 'bold'}}>Centro de Atención al Cliente
                </a>
                <br/>
                <h2 style={{'font-weight': '900'}} >0800 111 222</h2>
              </div>
              <a href="http://artmutualrural.com:8080/exec/art/arti.wap.0" target="_blank">
                <AccountCircleIcon style={{'font-size': '4.6em', color: 'orange'}} />
              </a>
              <Edifice width={65} fill='white' style={{margin: '4px',display: 'inline-block',padding: '2px','border-radius': '50%', backgroundColor:'orange'}}/>
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

          <div className="collapse navbar-collapse container" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-color" to="/INICIO">
                  INICIO <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-color dropdown-toggle"
                  to="/ART"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ART
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
                  to="/CONTACTO"
                  aria-disabled="true"
                >
                  CONTACTO
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
