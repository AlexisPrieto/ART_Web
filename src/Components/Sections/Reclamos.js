import React, { Component, Fragment } from "react";
import Img from '../../Assets/Img/ConsultasYReclamos.jpg'
import Phone24 from "../../Assets/Icons/ART_Icon_Phone24";
import Phone from "../../Assets/Icons/ART_Icon_Phone";
import ReclamosForm from "./ReclamosForm";
import Cecap from "../../Assets/Icons/CECAP.png";
import Atencion from "../../Assets/Icons/ATENCION AL PUBLICO.png";


export class Reclamos extends Component { 

  render() {

    return (

        <Fragment>
            {/*<div className="each-slide"> 
                <img width="100%"src={Img}></img>
            </div>*/}
            <div className="Reclamos">
                <ul className="Reclamos-List hide-celular">
                    <div>
                        <img src={Cecap} width={100} alt="Logo" />
                        {/*<Cecap width={100} />*/}
                        <h3 className="desc">CECAP Emergencias</h3>
                        <h5>0800-333-6888</h5>
                    </div>

                    <div>
                        <img src={Atencion} width={100} alt="Logo2" />
                        {/*<Phone width={100} />*/}
                        <h3 className="desc">Atención al cliente</h3>
                        <h5>0800-333-2786</h5>
                    </div>
                </ul>

                <ReclamosForm/>
            </div>
     </Fragment>

    );
  }
}

export default Reclamos;
