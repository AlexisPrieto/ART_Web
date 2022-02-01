/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from "react";
import "../../Assets/Css/Iconos.css";
import Icon0 from "../../Assets/Icons/ART_Icon_Download";
import Icon1 from "../../Assets/Icons/ART_Icon_Caution";
import Icon2 from "../../Assets/Icons/ART_Icon_Folder";
import Icon3 from "../../Assets/Icons/ART_Icon_Clipboard";
import {Link} from "react-router-dom";
import Slideshow from '../SlideShow';
import PopUp from '../PopUp';
import ReactGA from 'react-ga';


//ReactGA.initialize('267149066');
ReactGA.initialize('UA-210861270-1');
ReactGA.pageview(window.location.pathname + window.location.search);

export class Inicio extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentDidUpdate(){
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Fragment>
      {/*<PopUp/>*/}
      <Slideshow  className="container center"/>
      <div className="container">
      <div>
        <h5 style={{fontWeight: 700, margin: '5% -1%'}}>
        <p>
          Conocemos la vida cotidiana y el ambiente en el que se desarrolla la actividad del trabajador rural.
          
        </p>
        
        <p>
          Entendemos las condiciones de trabajo y las distintas modalidades de contratación de los trabajadores.
        </p>

        <p>
          Sabemos las grandes distancias a las que se encuentran de las rutas y de los centros de atención. 
        </p>

        <p>
          Tenemos amplios conocimientos de los factores de riesgo químicos y mecánicos a los que están expuestos.
        </p>

        <p>
          Entendemos el servicio que nuestros clientes necesitan porque contamos con la experiencia y el conocimiento del ámbito rural.
        </p>
        </h5>
      </div>
        {/*
        <h4>
          RURAL ART cuenta con un renovado departamento de Prevención de Riesgo
          que nuclea una red de prestadores con alcance nacional, el grupo
          brinda a sus asegurados un asesoramiento integral en materia de
          Higiene y Seguridad. Asimismo la aseguradora ofrece un destacado
          servicio de cobertura ante siniestros laborales.
        </h4>

        <br/>
        <br/>

        <h5 className="inicio-title">Administradora de Riesgos del Trabajo (ART): ¿Qué es?</h5>
        <p>
          Las Administradoras de Riesgos del Trabajo entraron en escena en 1995,
          con la sanción de la ley 24557.
        </p>
        <p>
          Son empresas privadas con fines de lucro contratadas por los
          empleadores para asesorarlos en las medidas de prevención de riesgos
          del trabajo y para reparar los daños en casos de accidentes de trabajo
          o enfermedades de origen laboral. Están controladas por la
          Superintendencia de Riesgos del Trabajo y por la Superintendencia de
          Seguros de la Nación.
        </p>
        <p>
          Actualmente está vigente el Seguro de Riesgos del Trabajo, sancionado
          mediante la ley 24557, que obliga a todo empleador a afiliarse a una
          ART o a garantizar la protección de sus trabajadores
        </p>

        <h5 className="inicio-title">¿Qué debe cubrir una ART?</h5>
        <p>
          La ART debe cubrir todas las enfermedades que liste la
          Superintendencia de Riesgos de Trabajo (VER LISTADO), aunque los
          jueces han extendido a otras dolencias si se puede probar que
          provienen del trabajo. También deben cubrir accidentes laborales o
          camino al trabajo o de regreso dl trabajo (accidentes in itinere). Y
          hechos de inseguridad, por ejemplo un robo, si generó daños.
        </p>
        <p>
          Si el trabajador está en negro, también debe ser cubierto, aunque se
          dirime en un procedimiento especial. Recientemente, se incorporaron
          las hernias (lumbalgias) que ahora serán cubiertas por la ART.
        </p>
        <p>
          Por ley, la empresa debe darle al trabajador afectado por un accidente
          o enfermedad profesional tareas acordes con su capacidad y salud.
          Finalmente y muy importante, la ART tiene que indemnizar al trabajador
          si como consecuencia del accidente o enfermedad profesional le queda
          algún tipo de daño o incapacidad, esto también se puede reclamar.
        </p>
        <p>
          Los accidentes in itinere, son los que ocurren camino al trabajo o de
          regreso al trabajo, deben ser reconocidos por la ART. Es importante
          que el trabajador/a notifique a la empresa cuando modifica el trayecto
          o hace algún recorrido nuevo en función de su trabajo. Y dejar
          constancia al menos en algún mail o prueba electrónica. Es que la ART
          debe cubrir cualquier contingencia yendo o volviendo del trabajo, lo
          que no ocurre cuando el trabajador se desvía. De ahí la importancia de
          la notificación.
        </p>

        <h5 className="inicio-title">¿Por qué es especial la ART Mutual Rural?</h5>
        <p>
          La ART Mutual Rural es especial por el simple hecho de que está
          concebida por y para el Personal Rural.
        </p>
        <p>
          Al estar dirigida con exclusividad a empresas relacionadas con la
          actividad rural y sus empleados, la totalidad de su desempeño está
          orientado a los temas referidos al campo, a su problemática y
          situación particular.
        </p>
        <p>
          Se especializa en los aspectos referidos al incremento de la seguridad
          laboral en este terreno e incrementa su experiencia y transmisión de
          conocimientos para que el trabajador rural vea mejorada su atención en
          el día a día.
        </p>
        */}
        <ul className="icon-list icon-flex">
          <div className="responsive gallery">
            <Link className="icono" to="/PRESTACIONES">
              <Icon3 fill="white" width={100} />
            </Link>
            <h1 className="desc">Prestaciones</h1>
          </div>

          <div className="responsive gallery">
            <Link className="icono" to="/DENUNCIAS">
              <Icon2 fill="white" width={100} />
            </Link>
            <h1 className="desc">Cobertura</h1>
          </div>

          <div className="responsive gallery">
            <Link className="icono" to="/Fraude">
              <Icon1 fill="white" width={100} />
            </Link>
            <h1 className="desc">Prevención de Fraude</h1>
          </div>

          <div className="responsive gallery">
            <Link className="icono" to="/DESCARGAS">
              <Icon0 fill="white" width={100} />
            </Link>
            <h1 className="desc">Descargas</h1>
          </div>
        </ul>
      </div>
      </Fragment>
    );
  }
}

export default Inicio;
