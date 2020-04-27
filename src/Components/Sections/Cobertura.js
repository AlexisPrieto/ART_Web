import React, { Component } from 'react'
import denunciaesquema from '../../Assets/Img/denunciaesquema.jpg';

export class Cobertura extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
    componentDidUpdate(){
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div className="">
                <h3 className="inicio-title">Ante una EMERGENCIA o ENFERMEDAD LABORAL</h3>

                <p>
                    En caso de enfermedad laboral o accidente, estos deben denunciarse lo antes posible,
                    dentro de las 48 horas, o puede perderse el derecho. La denuncia se puede hacer por
                    el teléfono de la ART, por nota en su sede o por telegrama (recomendable). 
                    Ante la duda, se recomienda denunciar.
                </p>

                <h3 className="inicio-title">Operatoria de la Denuncia</h3>

                <p>
                    La ART tiene 10 días para considerar la denuncia, y mientras tanto tiene que darle 
                    cobertura médica al trabajador. La cobertura no se considera aceptar la denuncia pero
                    sí el silencio, si pasado ese plazo la ART no contesta o no lo prorroga por 10 días 
                    más. Justamente hoy lo agilizaron, porque antes era de 20 días.
                </p>
                <p>
                    La ART puede rechazar la denuncia por ser enfermedad preexistente acreditada en examen
                    preocupacional, por dolo del trabajador (se auto-dañó), o por ser extraña al laburo. 
                    La Aseguradora no podrá rechazar la pretensión con fundamento en la inexistencia de la
                    relación laboral reconocida por el empleador.
                </p>
                <p>
                    En caso de que la ART rechace el accidente o enfermedad (es un seguro y como tal puede
                    decir que no está alcanzado por la póliza), entonces el trabajador debe recurrirlo, 
                    para lo cual desde ahora necesitará un abogado/a. Hay un procedimiento ante las 
                    comisiones médicas (administrativo) y también judicial. Siempre es importante consultar.
                    El organismo de control del sistema es la Superintendencia de Riesgos de Trabajo, con 
                    muy buena información en su página web.
                </p>
                <p>            
                    También debe denunciarse a la Superintendencia de Riesgos de Trabajo y la ART si la 
                    empresa incumpliera las normas sobre higiene y seguridad en el trabajo, por ejemplo 
                    si no proveyera cascos, se trabajare sin ventilación adecuada o luz deficiente, y demás.
                    Hay muchas normas técnicas sobre el tema (ruidos, partículas en suspensión, cargas
                    máximas que un trabajador puede levantar) que deben analizarse en cada caso. ¿Cómo 
                    proceder? ¿Qué debo hacer en caso de accidente o enfermedad profesional? Debe informar
                    el hecho ante su empleador, quien tiene la obligación de comunicar el accidente o 
                    enfermedad a la ART si la tuviera o brindarle en forma inmediata las prestaciones 
                    médicas y asistenciales si se trata de un Empleador Autoasegurado. ¿Qué debe hacer 
                    la ART* a partir de la recepción de la denuncia? La ART o el Empleador Autoasegurado
                    debe tomar los recaudos necesarios para otorgar en forma inmediata las prestaciones
                    médicas y asistenciales. Ver las respuestas a las preguntas más frecuentes en el 
                    portal de la Superintendencia de Riesgos de Trabajo.
                </p>

                <div className="container">
                <p className="container">
                    <img src={denunciaesquema}/>    
                    
                </p>
                <h6>
                    Gráfico provisto por la " 
                    <a href="https://www.argentina.gob.ar/srt" style={{color:'blue','text-decoration': 'underline' }} target="_blank">
                     Superintendencia de Seguros del Trabajo
                     </a><a>"</a>
                </h6>
                </div>
            </div>
        )
    }
}

export default Cobertura
