import React, { Component } from "react";
import footer from "../Assets/Img/logo_naranja.jpg";
import srt from "../Assets/Img/SRT.png";
import ssn from "../Assets/Img/SSN.png";
import WhatsApp from "../Assets/Icons/WhatsApp.jpg";
import UATRE from "../Assets/Icons/UATRE.svg";
import OSPRERA from "../Assets/Icons/OSPRERA.svg";
import RENATRE from "../Assets/Icons/RENATRE.svg";
import ig from "../Assets/Icons/social_instagram_icon.png";
import fb from "../Assets/Icons/social_facebook_icon.png";
import { Link } from "react-router-dom";

import "../Assets/Css/App.css";
import "../Assets/Css/Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerBanners">

          <a href="https://www.uatre.org.ar/home.aspx" target="_blank">
            <img style={{zoom: 0.7}} src={UATRE}/>
          </a>
          <a href="https://www.osprera.org.ar/" target="_blank">
            <img src={OSPRERA}/>
          </a>
          <a href="https://www.renatre.org.ar/" target="_blank">
            <img style={{padding: '0% 3%'}} src={RENATRE}/>
          </a>
        </div>
        <div>
            <div className="foot-menu">
              <img style={{zoom: 0.6}} src={footer} />
              <div style={{ marginTop: '5%', marginLeft: '3%'}}>
                  ART Mutual Rural<br/>
                  San Martín 588 – 5to piso, (1004)<br/>
                  Ciudad Autónoma de Buenos Aires<br/> Argentina<p/>
              </div>
            </div>
        
            <div style={{display: 'flex'}} className="foot-menu-detalle">
          
            {/*<div>
            
              ART Mutual Rural<br/>
              San Martín 588 – 5to piso, (1004)<br/>
              Ciudad Autónoma de Buenos Aires,<br/>
              Argentina<p/>
            </div>*/}

            <div style={{/*marginLeft: '2%',*/ minWidth: 'max-content'/*, textAlign: "center"*/}}>
              <h5 style={{fontWeight: 800}}>
                Contacto
              </h5>
              Conmutador<br/>
              +54 011 3754-6700<br/>
              contacto@artmutualrural.org.ar<br/>
            </div>

            <div style={{/*marginLeft: '2%',*/ minWidth: 'max-content'/*, textAlign: "center"*/}}>
              <h5 style={{fontWeight: 800}}>
                Emergencias - CeCap
              </h5>
                 0800-333-6888 <br/>
                 {/*<div className="hide-celular" style={{marginLeft: '57%'}}>(MUTUAART)<br/></div>*/}
                 (24hs)<br/>
            </div>

            <div style={{marginLeft: '2%', minWidth: 'max-content'}}>
              <h5 style={{fontWeight: 800}}>
                Atención al Público
              </h5>
                0800-333-2786<br/>
                {/*<div className="hide-celular" style={{marginLeft: '50%'}}>(ARTMR) <br/></div>*/}
                <img style={{zoom: 0.1}}  src={WhatsApp} />
                +54 011 5346-3333 <br/>
                (9 a 16hs)<br/>
            </div>

            <div style={{marginLeft: '2%', minWidth: 'max-content'}}>
                <h5 style={{fontWeight: 800}}>
                  Gestión Nacional
                </h5>
                0810-666-2787<br/>
                {/*<div className="hide-celular" style={{marginLeft: '60%'}}>(ARTRURAL)<br/> </div>*/}
                (9 a 16hs)<br/>

            </div>
          </div>
          <Link to="/Politicas">
            <div style={{color: 'white'}}>
                Políticas de Privacidad
            </div> 
          </Link>

          <Link to="/Terminos">
            <div style={{color: 'white'}}>
                Términos y Condiciones
            </div>
          </Link>

          <div style={{float: 'right'}}>
            <a href="https://www.instagram.com/art.mutualrural/" target="_blank">
              <img className="center socialmedia" src={ig} />
            </a>

            <a href="https://www.facebook.com/art.mutualrural" target="_blank">
              <img className="center socialmedia" src={fb} />
            </a>
        </div> 

        
        </div>   
        <div className="foot-foot">

          <div style={{ margin: '1%'}}>
          <a>
            {/*LOS SEGUROS SON EMITIDOS POR ART MUTUAL RURAL 25 DE MAYO 489 - 1º
            PISO, C.A.B.A. CUIT 30-68715616-8, Nº DE INSCRIPCIÓN EN SSN: 616.
            SUPERINTENDENCIA DE SEGUROS DE LA NACIÓN 0-800-666-8400.
            WWW.SSN.GOB.AR / SUPERINTENDENCIA DE RUESGO DEL TRABAJO
            0800-666-6778, WWW.SRT.GOB.AR*/}
            LOS SEGUROS SON EMITIDOS POR ART MUTUAL RURAL DE SEGUROS DE RIESGOS DEL TRABAJO RECONQUISTA 630, C.A.B.A. 
            CUIT 30-71621143-2 / Nº DE INSCRIPCIÓN EN SSN: 0932 SUPERINTENDECIA DE SEGUROS DE LA NACIÓN 0-800-666-8400 
            WWW.SSN.GOB.AR / C.A.R.T. Nº 0523 SUPERINTENDENCIA DE RIESGOS DEL TRABAJO 0800-666-6778, WWW.SRT.GOB.AR
          </a>
          </div>

          <div>
            <a href="https://www.argentina.gob.ar/srt" target="_blank">
              <img className="center srt" src={srt} />
              <h5>0800-666-6778</h5>
            </a>
          </div>

          <div>
            <a href="https://www.argentina.gob.ar/superintendencia-de-seguros"  target="_blank">
              <img className="center ssn"  src={ssn} />
              <h5>0800-666-8400</h5>
            </a>
          </div>

        </div>

      </div>
      
    );
  }
}

export default Footer;
