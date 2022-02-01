import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import info from "../../Assets/Img/COVID_INFO.jpg";
import "../../Assets/Css/index.css";
import { Link } from "react-router-dom";


var FileSaver = require('file-saver');
export class Covid_Info extends Component {
   
    onClick2 = () => {
        FileSaver.saveAs("Download_COVID/Prevención en el Lugar de Trabajo.pdf","Prevención en el Lugar de Trabajo.pdf");
        FileSaver.saveAs("Download_COVID/Comedores y Sala de Reuniones.pdf","Comedores y Sala de Reuniones.pdf");
        FileSaver.saveAs("Download_COVID/Condiciones Ingreso y Permanencia.pdf","Condiciones Ingreso y Permanencia.pdf");
        FileSaver.saveAs("Download_COVID/Uso de Vehículos.pdf", "Uso de Vehículos.pdf");
        FileSaver.saveAs("Download_COVID/Áreas de Servicio.pdf", "Áreas de Servicio.pdf");
        FileSaver.saveAs("Download_COVID/Síntomas.pdf", "Síntomas.pdf");
        FileSaver.saveAs("Download_COVID/Tratamiento de Residuos.pdf", "Tratamiento de Residuos.pdf");
        FileSaver.saveAs("Download_COVID/Área de Aislamiento Preventivo.pdf", "Área de Aislamiento Preventivo.pdf");
        FileSaver.saveAs("Download_COVID/Ascensor.pdf", "Ascensor.pdf");
        FileSaver.saveAs("Download_COVID/Traslados.pdf", "Traslados.pdf");
    }  

    render() {

        return (
           
            <div className="container center covid-info">
                    <div                    
                    style={{
                        height: '193em',
                        display: 'flex',
                        'align-items': 'flex-end',

                        /* justify-content: center; */
                        'background-size': 'cover',
                        'background-position': 'bottom',
                        'backgroundImage': 'url('+info+')'
                        }}>
                       
                        <Link 
                           onClick={this.onClick2}                                
                            style={{
                            'margin-left': 'auto',
                            width: '30%',
                            height: '6%',
                            textAlign: 'right'}}>


                        </Link>
                    </div>   
            </div>
        )
    }
}

export default Covid_Info
