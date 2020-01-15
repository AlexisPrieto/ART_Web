/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './Components/Menu';
import Slideshow from './Components/SlideShow';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './Components/Sections/Inicio';
import Descargas from './Components/Sections/Descargas';
import Novedades from './Components/Sections/Novedades';
import Contacto from './Components/Sections/Contacto';
import Footer from './Components/Footer';
import Cobertura from './Components/Sections/Cobertura';
import Prestaciones from './Components/Sections/Prestaciones';
import Normativas from './Components/Sections/Normativas';
import PreguntasFrecuentes from './Components/Sections/PreguntasFrecuentes';
import Delegaciones from './Components/Sections/Delegaciones';
import Reclamos from './Components/Sections/Reclamos';

export class App extends Component {
    render() {
              return (
            <Router>
                <Menu/>
                
                <Route path="/INICIO" exact component={Inicio}/>
                <Route path="/" exact component={Inicio}/>
                <Route path="/DESCARGAS" component={Descargas}/>
                <Route path="/NOVEDADES" component={Novedades}/>
                <Route path="/CONTACTO" component={Contacto}/>

                <Route path="/PRESTACIONES" component={Prestaciones}/>
                <Route path="/COBERTURA" component={Cobertura}/>
                <Route path="/NORMATIVA" component={Normativas}/>
                <Route path="/PREGUNTASFRECUENTES" component={PreguntasFrecuentes}/>
                <Route path="/DELEGACIONES" component={Delegaciones}/>
                <Route path="/RECLAMOS" component={Reclamos}/>
                <Footer></Footer>
            </Router>
        );
    }
}

export default App
