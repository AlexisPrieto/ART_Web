import React, { Component } from 'react'
import '../../Assets/Css/estilos.css';

export class Delegaciones extends Component {
   
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    componentDidUpdate(){
        window.scrollTo(0, 0)
    }
    
    constructor(props) {
        super(props)
        
        // Create the ref
        this.title = React.createRef();
        this.state = {
          list: [
            {loc: '',
            dir: '',
            hora: '',}],
        }
      }

      funcion2(l,d,h){
        this.setState({loc: l, dir: d, horario: h})
      }

    render() {

        return (
            <div>
                <div id="Delegaciones" className="seccion">
                    <h4>Delegaciones</h4>
                    <div id="Provincias">                                    
                        <div id="Jujuy" className="ar-pcia ar-jujuy" title="Jujuy" onClick={() => this.funcion2("SAN SALVADOR DE JUJUY, JUJUY.","Domicilio: INDEPENDENCIA 572.","Horario: 7,30 A 18,30 / Teléfono:0388-4224724")}><span></span></div>
                        <div id="Salta" className="ar-pcia ar-salta" title="Salta" onClick={() => this.funcion2("SALTA - CAPITAL, SALTA. ","Domicilio: 25 DE MAYO 555. ","Horario: 08:00 A 15:00 HS / Teléfono:0387-4314373 (FAX)")}><span></span> </div>
                        <div id="Formosa" className="ar-pcia ar-formosa" title="Formosa" onClick={() => this.funcion2("FORMOSA, FORMOSA.","Domicilio: EVA PERON 944.","Horario: LUNES A VIERNES DE 06,00 Y 07,00 A 12,00,Y 13,00 / Teléfono:03717-430743 - FAX")}><span></span></div>
                        <div id="Catamarca" className="ar-pcia ar-catamarca" title="Catamarca" onClick={() => this.funcion2("SAN FERNANDO DEL VALLE DE CATAMARCA, CATAMARCA.", "Domicilio: REPUBLICA 919.", "Horario: DE 7,30 A 20,30 HS. / Teléfono:03833-430097-453050")}><span></span></div>
                        <div id="Tucuman" className="ar-pcia ar-tucuman" title="Tucumán" onClick={() => this.funcion2("SAN MIGUEL DE TUCUMÁN, TUCUMAN. ",["Domicilio: 9 DE JULIO 125. ", "Horario: 7,00 HS. A 20,00 HS. / Teléfono:0381-4306944"],["Domicilio: CRISOSTOMO ALVAREZ 583. ","Horario: 8,00 HS A 20,00 HS / Teléfono:0381-4308557"])}><span></span></div>
                        <div id="Stgo" className="ar-pcia ar-santiago-del-estero" title="Stgo. Estero" onClick={() => this.funcion2("SANTIAGO DEL ESTERO, SANTIAGO DEL ESTERO. ","Domicilio: MORENO 306. ","Horario: 7:00 A 20:00 / Teléfono:0385-4218653")}><span></span></div>
                        <div id="Chaco" className="ar-pcia ar-chaco" title="Chaco" onClick={() => this.funcion2("RESISTENCIA, CHACO.", "Domicilio: AVDA. RODRIGUEZ PEÑA 739.","Horario: 7.00 A 13.00HS.-16.00 A 20.00HS.- / Teléfono:(03722)420018/451449")}><span></span></div>
                        <div id="Corrientes" className="ar-pcia ar-corrientes" title="Corrientes" onClick={() => this.funcion2("CORRIENTES CAPITAL - SECC.1, CORRIENTES.","Domicilio: CORDOBA 1041.","Horario: 7.00 A 19.00 HS. / Teléfono:03783-422486/423358")}><span></span></div>
                        <div id="Misiones" className="ar-pcia ar-misiones" title="Misiones" onClick={() => this.funcion2("POSADAS, MISIONES. ","Domicilio: FELIX DE AZARA 1441. ","Horario: 7:00 A 18:00 HS. / Teléfono:03752-430242/436027")}><span></span></div>
                        <div id="LaRioja" className="ar-pcia ar-la-rioja" title="La Rioja" onClick={() => this.funcion2("LA RIOJA, LA RIOJA.","Domicilio: 25 DE MAYO Y 8 DE CIEMBRE 398.","Horario: DE 07:00 A 21:00 / Teléfono:03822-437828-424618")}><span></span></div>
                        <div id="Cordoba" className="ar-pcia ar-cordoba" title="Córdoba" onClick={() => this.funcion2("CÓRDOBA, CORDOBA.","Domicilio: 24 DE SEPTIEMBRE 1536.","Horario: LUNES A VIERNES 07/19 A PARTIR 01/11/2018 / Teléfono:BUN/FAX 0351-4526298")}><span></span></div>
                        <div id="StaFe" className="ar-pcia ar-santa-fe" title="Sta. Fe" onClick={() => this.funcion2("SANTA FÉ, SANTA FE. ","Domicilio: SAN MARTIN 2926. ","Horario: 8 A 18 HS / Teléfono:0342/4551458/1524")}><span></span></div>
                        <div id="EntreRios" className="ar-pcia ar-entre-rios" title="Entre Ríos" onClick={() => this.funcion2("PARANA, ENTRE RIOS.","Domicilio: MONTE CASEROS 437.","Horario: 7 A 14 / Teléfono:0343/4230335TELFAX")}><span></span></div>
                        <div id="SanJuan" className="ar-pcia ar-san-juan" title="San Juan" onClick={() => this.funcion2("SAN JUAN (CIUDAD CAPITAL), SAN JUAN. ","Domicilio: AV. RAWSON SUR 387. ","Horario: 07:00 A 14:00HS / Teléfono:0264-4214781/4220872")}><span></span></div>
                        <div id="SanLuis" className="ar-pcia ar-san-luis" title="San Luis" onClick={() => this.funcion2("SAN LUIS, SAN LUIS. ","Domicilio: PEDERNERA 463. ","Horario: 08:00-15:00 HS / Teléfono:02652-426981-442206")}><span></span></div>
                        <div id="LaPampa" className="ar-pcia ar-la-pampa" title="La Pampa" onClick={() => this.funcion2("SANTA ROSA, LA PAMPA.",["Domicilio: RIVADAVIA 793. ",  "Horario: LUNES A VIERNES DE 07.00 A 14.00 / Teléfono:02954-432497 FAX"], ["Domicilio: ROQUE S PEÑA 712. ", "Horario: 7 A 14 HS. / Teléfono:02954-425024 FAX"])}><span></span></div>
                        <div id="BsAs" className="ar-pcia ar-buenos-aires" title="Bs. As." onClick={() => this.funcion2("LA PLATA, BUENOS AIRES.", "Domicilio: CALLE 58 1111.", "Horario: 08 A 19 HS / Teléfono:0221-412-2500 INT163")}><span></span></div>
                        <div id="CABA" className="ar-pcia ar-caba" title="C.A.B.A." onClick={() => this.funcion2("CIUDAD AUTÓNOMA DE BUENOS AIRES CAPITAL FEDERAL.", "Domicilio: RECONQUISTA 630.", "Horario: 8.00 A 18.00 / Teléfono:43122112-43122500")}><span></span></div>
                        <div id="Mendoza" className="ar-pcia ar-mendoza" title="Mendoza" onClick={() => this.funcion2("MAIPÚ, MENDOZA.","Domicilio: CONSTANCIO C. VIGIL 284. ","Horario: 08 A 13-16 A 19 HS / Teléfono:0261-4814138")}><span></span></div>
                        <div id="Neuquen" className="ar-pcia ar-neuquen" title="Neuquén" onClick={() => this.funcion2("NEUQUÉN, NEUQUEN. ","Domicilio: SARGENTO CABRAL 635. ","Horario: 7 A 14 / Teléfono:0299-4431936/4430990")}><span></span></div>
                        <div id="RioNegro" className="ar-pcia ar-rio-negro" title="Río Negro" onClick={() => this.funcion2("VIEDMA, RIO NEGRO. ","Domicilio: 25 DE MAYO 230. ","Horario: 07-14 / Teléfono:02920-425410(C/ FAX)")}><span></span></div>
                        <div id="Chubut" className="ar-pcia ar-chubut" title="Chubut" onClick={() => this.funcion2("TRELEW, CHUBUT.","Domicilio: AMEGHINO 146.","Horario: 08.30 A 14.00 / Teléfono:02965-435193/436013")}><span></span></div>
                        <div id="StaCruz" className="ar-pcia ar-santa-cruz" title="Sta. Cruz" onClick={() => this.funcion2("RÍO GALLEGOS, SANTA CRUZ. ","Domicilio: AMEGHINO 41. ","Horario: 08.30 A 14.00 / Teléfono:02966-420883/420809")}><span></span></div>
                        <div id="Tierra" className="ar-pcia ar-tierra-del-fuego" title="Tierra Del Fuego" onClick={() => this.funcion2("USHUAIA, TIERRA DEL FUEGO. ","Domicilio: KAYEN 244. ","Horario: 08:30 A 14 HS. / Teléfono:02901-435194/435194")}><span></span></div>
                        <div id="Malvinas" className="ar-pcia ar-malvinas" title="Malvinas" onClick={() => this.funcion2("USHUAIA, TIERRA DEL FUEGO.","Domicilio: KAYEN 244. ","Horario: 08:30 A 14 HS. / Teléfono:02901-435194/435194")}><span></span></div>
                    </div>
                    <div id="Descripcion">Haga click en cualquier provincia</div>

                    <h5> {this.state.loc}</h5>
                    <div> {this.state.dir}</div>
                    <div> {this.state.horario}</div>

                </div>
            </div>
        )
    }
}

export default Delegaciones