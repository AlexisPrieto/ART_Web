import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Icon from "../../Assets/Icons/ART_Icon_Download";

export class Covid_Desc extends Component {

    constructor(props) {
        super(props)
    
        this.title = React.createRef();
        this.state = {
        
            Items:[
              
              {
                Desc:"AFICHE COVID - 19 Recomendaciones y medidas de prevención en ámbitos laborales",
                File: "AFICHE COVID_0800 ok.pdf"
              },

              {
                Desc:"AFICHE COVID-19",
                File: "AFICHE_Covid-19.pdf"
              },
              {
                Desc:"Cuadernillo COVID-19",
                File: "Cuadernillo COVID-19.pdf"
              },

              {
                Desc:"Correcta Colocación y Retiro del Protector Respiratorio",
                File: "Correcta Colocacion y Retiro de Protector Respiratorio.pdf"
              },

              {
                Desc:"Elementos de Protección Personal",
                File: "Elementos de Proteccion Personal.pdf"
              },

              {
                Desc:"Recomendaciones Especiales",
                File: "Recomendaciones Especiales.pdf"
              },

              {
                Desc:"Recomendaciones para el Desplazamiento hacia tu Trabajo",
                File: "Recomendaciones para el Desplazamiento hacia tu Trabajo.pdf"
              },

              {
                Desc:"Teletrabajo",
                File: "Teletrabajo.pdf"
              },

            ],
        }
      }


    render() {
        return (
            <div className="container">

                <ul className="list-group">
                    {this.state.Items.map(obj => (
                        <li 
                        key={obj.Desc}
                        className="list-item-descargas"
                        >
                        {obj.Desc}
                        <a href="#">
                        <Link to={"Download_COVID/"+obj.File} target="_blank" download>
                            <Icon style={{float: "right"}} fill="#F8A700" width={25} />
                        </Link>
                        </a>
                        </li>
                    ))}
                </ul>
                
            </div>
        )
    }
}

export default Covid_Desc

