import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import info from "../../Assets/Img/PREVENCION_INFO.jpg";
import "../../Assets/Css/index.css";


export class Prevencion_Info extends Component {
    render() {
        return (
            <div className="prevencion-header"/*style={{display: 'inline-flex', padding: '3% 3%'}}*/>
                <div style={{padding: '0% 4% 0% 4%'}}> 
                    <h3 className="inicio-title">Prevención</h3>
                    <p>
                        La prevención resulta ser uno de los pilares fundamentales en la gestión de nuestra ART, entendiéndose a la misma en su más amplia concepción; incorporando las acciones destinadas a brindar las mejores condiciones que hacen a la vida socio-cultural en el trabajo del hombre del campo y que afectan a su salud.
                    </p>

                    <p>
                        Nuestros clientes tienen en nosotros un aliado confiable en los programas de capacitación y prevención, que conducirán a una producción más eficiente, redundando en un beneficio mayor para todos los involucrados en el proceso productivo.
                    </p>

                    <p>
                        Por ello nos proponemos las siguientes metas:<br/>

                        •   Reducir al mínimo la siniestralidad en nuestros clientes y del sector rural en general.<br/>
                        •   Promover el desarrollo de una cultura preventiva.<br/>
                        •   Lograr la sistematización de la Seguridad en las empresas clientes.<br/>
                        •   Incorporar la Prevención como parte de la cultura de la gestión empresarial.<br/>
                        •   Contribuir al crecimiento de las empresas aseguradas con nosotros, para el beneficio del empleador, de los trabajadores y de la comunidad de la que forman parte.<br/>
                        •   Diseñar y desarrollar cursos de la capacitación en materia de prevención, orientados a las actividades de nuestros clientes, siempre teniendo en cuenta el rubro en el que se desarrollan.<br/>
                        •   Promover de manera constrante la prevención de accidentes laborales en el ámbito de la empresa, y fuera de ella (Accidente in itinere), y capacitar para evitar las enfermedades profesionales.<br/>
                        •   Proporcionar al hombre de campo y su familia de condiciones de higuiene y seguridad sanitaria que maximice su actividad laboral y profesional.<br/>
                        •   Elaborar y Promover el dictado de Cursos destinado a los trabajadores como población expuesta a los riesgos laborales, tendientes a incorporar las acciones preventivas a la vida cotidiana del trabajo.<br/>
                    </p>

                </div>
                <div className="prevencion">
                    <p>
                        <img src={info}/>    
                        
                    </p>
                </div>
            </div>
        )
    }
}

export default Prevencion_Info
