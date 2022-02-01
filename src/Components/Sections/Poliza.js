import React, { Component, Fragment } from "react";
import Img from '../../Assets/Img/ConsultasYReclamos.jpg'
import Phone24 from "../../Assets/Icons/ART_Icon_Phone24";
import Phone from "../../Assets/Icons/ART_Icon_Phone";
import PolizaForm from "./PolizaForm";
import Cecap from "../../Assets/Icons/CECAP.png";
import Atencion from "../../Assets/Icons/ATENCION AL PUBLICO.png";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-210861270-1');
ReactGA.pageview(window.location.pathname + window.location.search, 'POLIZA','POLIZA');
export class Poliza extends Component { 

  render() {
    ReactGA.initialize('UA-210861270-1');
    ReactGA.pageview(window.location.pathname + window.location.search, 'POLIZA','POLIZA');
    return (

        <Fragment>

          <div style={{padding: '3% 6%'/*, display: 'flex'*/, 'border': 'solid #f8a700 2px'}} >
            <div style={{color: 'rgb(150, 152, 154)'}}>
                  <h2 /*className="inicio-title"*/
                  style={{'font-weight': 'bold'}}
                  >Tutoriales sobre Póliza Digital de la SRT</h2>
            </div>

            <div style={{'margin-left': '5%'}}> 

              <a style={{display: 'list-item', color: '#f8a700'}} 
                href="https://www.youtube.com/watch?v=wx_7oJamzgk" target="_blank">
                <h5>Adhesión a e-Servicios SRT </h5>
              </a>
            
              <a style={{display: 'list-item', color: '#f8a700'}} 
              href="https://www.youtube.com/watch?v=0F1xPD7zUZs" target="_blank">
                <h5>Certificado de No Objeción </h5>
              </a>

              <a style={{display: 'list-item', color: '#f8a700'}} 
              href="https://www.youtube.com/watch?v=D4VLMmDgcx4" target="_blank">
                <h5>Servicio de Póliza Digital de Riesgos del Trabajo </h5>
              </a>
            </div>
          </div>
          <PolizaForm/>

     </Fragment>

    );
  }
}

export default Poliza;
