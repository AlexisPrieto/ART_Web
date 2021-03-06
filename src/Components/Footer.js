import React, { Component } from "react";
import footer from "../Assets/Img/footer.png";
import srt from "../Assets/Img/SRT.png";
import ssn from "../Assets/Img/SSN.png";
import { Link } from "react-router-dom";

import "../Assets/Css/App.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
          <div style={{display: 'flex'}}>
            <div style={{ float: "left", marginTop: '3%', marginLeft: '3%'}}>
              <img style={{zoom: 1.3}} src={footer} />

              <h5 style={{marginTop: '10%',display: 'flex'}}>
                Contacto: contacto@mutualrural.org.ar
              </h5>
            </div>
            <div style={{ float: "right"}}>
              <ul className="footer-ul">
                <ul className="footer-li">
                  MENU
                  <li className="footerli">
                    <Link className="footerli" to="/INICIO">
                      INICIO
                    </Link>
                  </li>
                  <li className="footerli">
                    <Link className="footerli" to="/COBERTURA">
                    COBERTURA
                    </Link>
                    
                  </li>
                  <li className="footerli">
                    <Link className="footerli" to="/PRESTACIONES">
                    PRESTACIONES
                    </Link>
                    
                  </li>
                  <li className="footerli">
                    <Link className="footerli" to="/NORMATIVA">
                      NORMATIVA
                    </Link>
                  </li>
                  <li className="footerli">
                    <Link className="footerli" to="/PREGUNTASFRECUENTES">
                      PREGUNTAS FRECUENTES
                    </Link>
                  </li>
                  <li className="footerli">
                    <Link className="footerli" to="/DELEGACIONES">
                      DELEGACIONES
                    </Link>
                  </li>
                </ul>
                <ul className="footer-li">
                  DESCARGAS
                  <li className="footerli">
                    <Link className="footerli" to="/CONTRATO">
                      CONTRATOS
                    </Link>
                  </li>
                  <li className="footerli">
                    <Link className="footerli" to="/PREVENCIÓN">
                      PREVENCIÓN
                    </Link>
                  </li>
                  <li className="footerli">
                    <Link className="footerli" to="/SINIESTROS">
                      SINIESTROS
                    </Link>
                  </li>
                  <li className="footerli">
                    <Link className="footerli" to="/NORMATIVA">
                      NORMATIVA
                    </Link>
                  </li>
                  <li className="footerli">
                    <Link className="footerli" to="/LISTADOPRESTADORES">
                      LISTADO PRESTADORES
                    </Link>
                  </li>
                </ul>
                <ul className="footer-li">
                  INTRANET
                  <li className="footerli">
                    <Link className="footerli" to="/AFILIADOS">
                      AFILIADOS
                    </Link>
                  </li>
                  <li className="footerli">
                    <Link className="footerli" to="/EMPLEADORES">
                      EMPLEADORES
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>    
        <div className="foot-foot">
          <a style={{ margin: "20px" }}>
            LOS SEGUROS SON EMITIDOS POR ART MUTUAL RURAL 25 DE MAYO 489 - 1º
            PISO, C.A.B.A. CUIT 30-68715616-8, Nº DE INSCRIPCIÓN EN SSN: 616.
            SUPERINTENDENCIA DE SEGUROS DE LA NACIÓN 0-800-666-8400.
            WWW.SSN.GOB.AR / SUPERINTENDENCIA DE RUESGO DEL TRABAJO
            0800-666-6778, WWW.SRT.GOB.AR
          </a>
          <a href="https://www.argentina.gob.ar/srt" target="_blank">
            <img className="center srt" src={srt} />
            <h5>0800-666-6778</h5>
          </a>

          <a href="https://www.argentina.gob.ar/superintendencia-de-seguros"  target="_blank">
            <img className="center ssn"  src={ssn} />
            <h5>0800-666-8400</h5>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
