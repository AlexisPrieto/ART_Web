/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component }  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Slideshow from './Components/SlideShow';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './Components/Sections/Inicio';
import Descargas from './Components/Sections/Descargas';

import Prevencion_Info from './Components/Sections/Prevencion_Info';
import Prevencion_Desc from './Components/Sections/Prevencion_Desc';
import Prevencion_Mat from './Components/Sections/Prevencion_Mat';

import Covid_Info from './Components/Sections/Covid_Info';
import Covid_Desc from './Components/Sections/Covid_Desc';

import Novedades from './Components/Sections/Novedades';
import Nosotros from './Components/Sections/Nosotros';
import Autoridades from './Components/Sections/Autoridades';
import Footer from './Components/Footer';
import Denuncias from './Components/Sections/Denuncias';
import Prestaciones from './Components/Sections/Prestaciones';
import Normativas from './Components/Sections/Normativas';
import PreguntasFrecuentes from './Components/Sections/PreguntasFrecuentes';
import Sucursales from './Components/Sections/Sucursales';
import Reclamos from './Components/Sections/Reclamos';
import Poliza from './Components/Sections/Poliza';
import ScrollToTop from './Components/Sections/ScrollToTop';
import Nosotros_Quienes from './Components/Sections/Nosotros_Quienes';
import Nosotros_Porque from './Components/Sections/Nosotros_Porque';
import Nosotros_Mision from './Components/Sections/Nosotros_Mision';
import Fraude from './Components/Sections/Fraude';

import Politicas from './Components/Sections/Politicas';
import Terminos from './Components/Sections/Terminos';
import Capacitacion from './Components/Sections/Capacitacion.js';

export class App extends Component {
    render() {
              return (
            <Router>
                <Menu/>
                <ScrollToTop/>
                <Route path="/INICIO" exact component={Inicio}/>
                <Route path="/" exact component={Inicio}/>
                <Route path="/DESCARGAS" component={Descargas}/>
                <Route path="/NOSOTROS" component={Nosotros}/>
                <Route path="/AUTORIDADES" component={Autoridades}/>
                <Route path="/NOVEDADES" component={Novedades}/>
                <Route path="/PRESTACIONES" component={Prestaciones}/>
                <Route path="/DENUNCIAS" component={Denuncias}/>
                <Route path="/NORMATIVA" component={Normativas}/>
                <Route path="/PREGUNTASFRECUENTES" component={PreguntasFrecuentes}/>
                <Route path="/SUCURSALES" component={Sucursales}/>
                <Route path="/RECLAMOS" component={Reclamos}/>
                <Route path="/POLIZA" component={Poliza}/>

                <Route path="/NOSOTROS_QUIENES" component={Nosotros_Quienes}/>
                <Route path="/NOSOTROS_PORQUE" component={Nosotros_Porque}/>
                <Route path="/NOSOTROS_MISION" component={Nosotros_Mision}/>

                <Route path="/PREVENCION_INFO" component={Prevencion_Info}/>
                <Route path="/PREVENCION_DESC" component={Prevencion_Desc}/>
                <Route path="/PREVENCION_MAT" component={Prevencion_Mat}/>

                <Route path="/COVID_INFO" component={Covid_Info}/>
                <Route path="/COVID_DESC" component={Covid_Desc}/>
               
                <Route path="/Politicas" component={Politicas}/>
                <Route path="/Terminos" component={Terminos}/>
                <Route path="/Fraude" component={Fraude}/>
                <Route path="/CAPACITACION" component={Capacitacion}/>

                <Footer></Footer>
            </Router>
        );
    }
}

export default App
