import React, { Component, Fragment } from "react";
import Img from '../../Assets/Img/ConsultasYreclamos.png'
import Phone24 from "../../Assets/Icons/ART_Icon_Phone24";
import Phone from "../../Assets/Icons/ART_Icon_Phone";
import ReclamosForm from "./ReclamosForm";


export class Reclamos extends Component { 
   
    state = {
        categoria:[],
        
        resultado: {
        tipodeTramite: "",
        tipoPersona: "",
        siniestro:"",
        razonSocial: "",
        dni:"",
        cuit:"",
        telParticular:"",
        telLaboral:"",
        telCelular:"",
        direccion:"",
        email:"",
        
        tema: "",
        categoria: "",
        mensaje: ""
      }};


      valueToState = ({ name, value, checked, type }) => {

            const resultado = {...this.state.resultado}
            resultado[name] = type === "checkbox" ? checked : value;
            console.log(name);

        if (name === "tema") {
            const categoria = this.valorCategoria(value);
            resultado.categoria = categoria[0];

            this.setState(() => ({
                categoria: categoria,
                resultado: resultado
            }));
            return;
        }

        this.setState(() => ({
            resultado: resultado})
        );
      };

      valorCategoria = (v) => {
          console.log('v: '+v);
          switch (v) {
              case "1": return ['Alcance de la Cobertura','Presentacion de Documentos','Tarifas','Otros'];
              case "2": return ['Solicitud de Documentacion para Tramite','Turnos','Otros'];
              case "3": return ['Exámenes Periódicos'];
              case "4": return ['Pago de Incapacidades','Pago Directo de ILT','Reintegro de ILT','Otros'];
              case "5": return ['Demora en Prestaciones','Reintegro de Gastos','Solicitud de Historia Clinica','Traslado','Turno','Otros'];
              case "6": return ['Presentacion de Documentos','Visitas a Establecimientos','Otros'];
              default: return [];
          }
      }

      temaSetCategoria = (v) => {
        var Data = {
            1:['Alcance de la Cobertura','Presentacion de Documentos','Tarifas','Otros'],
            2:['Solicitud de Documentacion para Tramite','Turnos','Otros'],
            3:['Exámenes Periódicos'],
            4:['Pago de Incapacidades','Pago Directo de ILT','Reintegro de ILT','Otros'],
            5:['Demora en Prestaciones','Reintegro de Gastos','Solicitud de Historia Clinica','Traslado','Turno','Otros'],
            6:['Presentacion de Documentos','Visitas a Establecimientos','Otros']
            }
            this.setState(() => {
                return { 
                    categoria: Data[v]};
            });   
      };


  render() {

    return (

        <Fragment>
            <a>Inicio -> Consultas y Reclamos</a>
            <img width="100%"src={Img}></img>
            
            <div className="Reclamos">
                <ul className="Reclamos-List">
                    <div>
                        <Phone24 width={100} />
                        <h3 className="desc">CECAP Emergencias</h3>
                        <h5>0800-111-11111</h5>
                    </div>

                    <div>
                        <Phone width={100} />
                        <h3 className="desc">Atención a Clientes</h3>
                        <h5>0800-222-22222</h5>
                    </div>
                </ul>

                <ReclamosForm/>
            </div>
     </Fragment>

    );
  }
}

export default Reclamos;
