import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import info from "../../Assets/Img/PREVENCION_MATERIAL.png";
import enf_endemicas from "../../Assets/Img/PREVENCION_MATERIAL2.png";
import "../../Assets/Css/index.css";
import { Link } from "react-router-dom";
import Icon from "../../Assets/Icons/ART_Icon_Download";
import { IconButton } from '@material-ui/core';

export class Prevencion_Mat extends Component {
    render() {
        return (
            <div className="container center">

                    <div                    
                    style={{
                        'flex-flow': 'column',
                        height: '103em',
                        display: 'flex',
                        'align-items': 'flex-end',

                        /* justify-content: center; */
                        'background-size': 'cover',
                        'background-position': 'bottom',
                        'backgroundImage': 'url('+enf_endemicas+')',
                        'margin-bottom': '15%'
                        }}>

                        <div style={{'margin': '16% 0%'}}>
                        </div>
                        <Link  to={"Download_PREVENCION/Enf_Endemicas/ENFERMEDADES ENDÉMICAS - Dengue, Zika y Chikungunya.pdf"}
                        download
                        target="_blank" 
                            style={{
                            'margin-left': 'auto',
                            width: '9%',
                            height: '4%',
                            textAlign: 'right'}}>
                        </Link>

                        <div style={{'margin': '8% 0%'}}>
                        </div>
                        <Link  to={"Download_PREVENCION/Enf_Endemicas/ENFERMEDADES ENDÉMICAS - Fiebre Amarilla.pdf"}
                        download
                        target="_blank" 
                            style={{
                            'margin-left': 'auto',
                            width: '9%',
                            height: '4%',
                            textAlign: 'right'}}>
                        </Link>

                        <div style={{'margin': '8% 0%'}}>
                        </div>
                        <Link  to={"Download_PREVENCION/Enf_Endemicas/ENFERMEDADES ENDÉMICAS - Fiebre Hemorrágica.pdf"}
                        download
                        target="_blank" 
                            style={{
                            'margin-left': 'auto',
                            width: '9%',
                            height: '4%',
                            textAlign: 'right'}}>
                        </Link>

                        <div style={{'margin': '8% 0%'}}>
                        </div>
                        <Link  to={"Download_PREVENCION/Enf_Endemicas/ENFERMEDADES ENDÉMICAS - Hantavirus.pdf"}
                        download
                        target="_blank" 
                            style={{
                            'margin-left': 'auto',
                            width: '9%',
                            height: '4%',
                            textAlign: 'right'}}>
                        </Link>

                        <div style={{'margin': '8% 0%'}}>
                        </div>
                        <Link  to={"Download_PREVENCION/Enf_Endemicas/ENFERMEDADES ENDÉMICAS - Leptospirosis.pdf"}
                        download
                        target="_blank" 
                            style={{
                            'margin-left': 'auto',
                            width: '9%',
                            height: '4%',
                            textAlign: 'right'}}>
                        </Link>

                        <div style={{'margin': '8% 0%'}}>
                        </div>
                        <Link  to={"Download_PREVENCION/Enf_Endemicas/ENFERMEDADES ENDÉMICAS - Paludismo (Malaria).pdf"}
                        download
                        target="_blank" 
                            style={{
                            'margin-left': 'auto',
                            width: '9%',
                            height: '4%',
                            textAlign: 'right'}}>
                        </Link>
                    </div>



                    {/*ACA EMPIEZA BANNER PREVENCION*/}
                    <div 
                    style={{
                        'flex-flow': 'column',
                        height: '135em',
                        display: 'flex',
                        'align-items': 'flex-end',

                        /* justify-content: center; */
                        'background-size': 'cover',
                        'background-position': 'bottom',
                        'backgroundImage': 'url('+info+')'
                        }}>
                            <div style={{height: '13%'}}>

                            </div>
                            <Link  to={"Download_PREVENCION/Mats/Via Publica.pdf"}
                            download
                            target="_blank" 
                                    
                                style={{
                                'margin-left': 'auto',
                                width: '7%',
                                height: '3%',
                                textAlign: 'right'}}>


                            </Link>

                            <Link  to={"Download_PREVENCION/Mats/Accidentes In Itinere.pdf"}
                            download
                            target="_blank" 
                                    
                                style={{
                                'margin-top': '17%',
                                'margin-left': 'auto',
                                width: '7%',
                                height: '3%',
                                textAlign: 'right'}}>


                            </Link>

                            <Link  to={"Download_PREVENCION/Mats/Levantamiento Manual de Cargas.pdf"}
                            download
                            target="_blank" 
                                    
                                style={{
                                'margin-top': '17%',
                                'margin-left': 'auto',
                                width: '7%',
                                height: '3%',
                                textAlign: 'right'}}>


                            </Link>
                            
                            <Link  to={"Download_PREVENCION/Mats/Primeros Auxilios.pdf"}
                            download
                            target="_blank" 
                                    
                                style={{
                                'margin-top': '17%',
                                'margin-left': 'auto',
                                width: '7%',
                                height: '3%',
                                textAlign: 'right'}}>


                            </Link>
                            
                            <Link  to={"Download_PREVENCION/Mats/Seguridad en Edificios.pdf"}
                            download
                            target="_blank" 
                                    
                                style={{
                                'margin-top': '17%',
                                'margin-left': 'auto',
                                width: '7%',
                                height: '3%',
                                textAlign: 'right'}}>


                            </Link>
                            <Link  to={"Download_PREVENCION/Mats/Trabajo Seguro con Escaleras Manuales.pdf"}
                            download
                            target="_blank" 
                                    
                                style={{
                                'margin-top': '17%',
                                'margin-left': 'auto',
                                width: '7%',
                                height: '3%',
                                textAlign: 'right'}}>


                            </Link>
                            <Link  to={"Download_PREVENCION/Mats/Uso del Extintor.pdf"}
                            download
                            target="_blank" 
                                    
                                style={{
                                marginTop: '17%',
                                marginLeft: 'auto',
                                width: '7%',
                                height: '4%',
                                textAlign: 'right'}}>
                            </Link>
                            <div  style={{marginTop: '17%'}}>
                            </div> 
                                <Link  to={"Download_PREVENCION/Mats/Trabajo en cocina.pdf"}
                                download
                                target="_blank"
                                style={{
                                    padding: '1.1%',
                                    margin: '25px',
                                    zoom: '67%',
                                    'background-color': 'rgb(0 0 0 / 50%)',
                                    display: 'inline-block',
                                    'border-radius': '50%'}}>
                                    <Icon fill="#F8A700" width={50} />
                                </Link> 
                                  
                            {/*<Link  to={"Download_PREVENCION/Mats/Uso del Extintor.pdf"}
                            download
                            target="_blank" 
                                    
                                style={{
                                'margin-top': '19%',
                                'margin-left': 'auto',
                                width: '8%',
                                height: '2%',}}>
                                <Icon style={{}} fill="#F8A700" width={35} />
                            </Link>  */}          
                    </div>
                   
            </div>
        )
    }
}

export default Prevencion_Mat
