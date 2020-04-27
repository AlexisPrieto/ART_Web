/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component }  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Slideshow from './Components/SlideShow';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './Components/Sections/Inicio';
import Descargas from './Components/Sections/Descargas';
import Novedades from './Components/Sections/Novedades';
import Nosotros from './Components/Sections/Nosotros';
import Footer from './Components/Footer';
import Cobertura from './Components/Sections/Cobertura';
import Prestaciones from './Components/Sections/Prestaciones';
import Normativas from './Components/Sections/Normativas';
import PreguntasFrecuentes from './Components/Sections/PreguntasFrecuentes';
import Delegaciones from './Components/Sections/Delegaciones';
import Reclamos from './Components/Sections/Reclamos';
import ScrollToTop from './Components/Sections/ScrollToTop';
import Nosotros_Quienes from './Components/Sections/Nosotros_Quienes';
import Nosotros_Porque from './Components/Sections/Nosotros_Porque';
import Nosotros_Mision from './Components/Sections/Nosotros_Mision';

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
                <Route path="/NOVEDADES" component={Novedades}/>
                <Route path="/PRESTACIONES" component={Prestaciones}/>
                <Route path="/COBERTURA" component={Cobertura}/>
                <Route path="/NORMATIVA" component={Normativas}/>
                <Route path="/PREGUNTASFRECUENTES" component={PreguntasFrecuentes}/>
                <Route path="/DELEGACIONES" component={Delegaciones}/>
                <Route path="/RECLAMOS" component={Reclamos}/>

                <Route path="/NOSOTROS_QUIENES" component={Nosotros_Quienes}/>
                <Route path="/NOSOTROS_PORQUE" component={Nosotros_Porque}/>
                <Route path="/NOSOTROS_MISION" component={Nosotros_Mision}/>

                <Footer></Footer>
            </Router>
        );
    }
}

export default App
