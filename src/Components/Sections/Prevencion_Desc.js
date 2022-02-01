import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Icon from "../../Assets/Icons/ART_Icon_Download";

export class Prevencion_Desc extends Component {

    constructor(props) {
        super(props)
    
        this.title = React.createRef();
        this.state = {
        
            Items:[


              {
                Desc:"Flyer Uso de Motosierra SRT",
                File: "Flyer Uso de Motosierra SRT.pdf"
              },

              {
                Desc:"Constancia de Entrega de EPP",
                File: "Constancia de Entrega de EPP.pdf"
              },
              {
                Desc:"RGRL Dec617-AGRO",
                File: "RGRL Dec617-AGRO.pdf"
              },
              {
                Desc:"Res 81-19 AnexoII- Formulario de Inscripcion Digital",
                File: "Res 81-19 AnexoII- Formulario de Inscripcion Digital.pdf"
              },
              {
                Desc:"Res 81-19 Anexo II - Formulario de Inscripcion Papel",
                File: "Res 81-19 Anexo II - Formulario de Inscripcion Papel.pdf"
              },
              {
                Desc:"Trabajadores Expuestos",
                File: "Trabajadores Expuestos.pdf"
              },
              {
                Desc:"Listado Ag. Riesgo - CodigosESOP_Res81-19",
                File: "ListadoAgRiesgo-CodigosESOP_Res81-19.pdf"
              },
              {
                Desc:"RGRL Dec911-CONSTRUCCIÓN",
                File: "RGRL Dec911-CONSTRUCCION.pdf"
              },
              {
                Desc:"RGRL Dec351-COMERCIO E INDUSTRIA",
                File: "RGRL Dec351-COMERCIO E INDUSTRIA.pdf"
              },
              {
                Desc:"Formulario RAR",
                File:"Formulario RAR.pdf"
              },
              {
                Desc:"Detalle de Establecimientos",
                File:"Detalle de Establecimientos.pdf"
              },
              {
                Desc:"Aviso De Obra",
                File:"AvisoDeObra.pdf"
              },
            ],
        }
      }


    render() {
        return (
            <div className="container">

                {/*<ul className="list-group" style={{'margin-bottom': '10%'}}>
                <li  className="list-item-descargas">
                <a>Flyer Uso de Motosierra SRT</a>
                <Link to={"Download_PREVENCION/Flyer Uso de Motosierra SRT.pdf"} target="_blank" download>
                    <Icon style={{float: "right"}} fill="#F8A700" width={25} />
                </Link>
                </li>
                </ul>*/}

                <ul className="list-group">
                    {this.state.Items.map(obj => (
                        <li 
                        key={obj.Desc}
                        className="list-item-descargas"
                        >
                        {obj.Desc}
                        <a href="#">
                        <Link to={"Download_PREVENCION/"+obj.File} target="_blank" download>
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

export default Prevencion_Desc
