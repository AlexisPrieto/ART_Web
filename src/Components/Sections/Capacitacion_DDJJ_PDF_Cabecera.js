import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import logo from '../../Assets/Img/Header.jpg';
import moment from "moment";

const styles = StyleSheet.create({ 
    cabecera: {
        //alignContent: 'left',
        //justifyContent: 'left',
        textAlign: 'right',
        flexDirection: 'row',
        //flexGrow: 1,
        marginBottom: 15,
    },   
    imagen: {
        
        height: 45,
        width: 130,
        alignItems: 'left',
        alignContent: 'left',
        justifyContent: 'left',
        left: 0,
    },
    cabeceraTitulo: {
        width: '73%',
        alignItems: 'right',
        alignContent: 'right',
        justifyContent: 'right',
        textAlign: 'right',
        borderWidth: 1,
    },
    cabeceraTexto: {
       
        height: '70%',
        fontSize: 12,
        fontWeight: 'bold',
        alignContent: 'right',
        justifyContent: 'right',
        textAlign: 'right',
    },

    cabeceraTexto2: {
        height: '70%',
        fontSize: 12,
        fontWeight: 'bold',
        alignContent: 'right',
        justifyContent: 'right',
        textAlign: 'right',
        borderBottomWidth: 1,
    },


    containerCabeceraForm: {
        backgroundColor: '#83BC00',
        marginBottom: 10,
    },

    textoCabeceraForm: {
        //height: '70%',
        margin: '1% 0%',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,        
    },    
   
    datosEmpLineas: {
        borderTopWidth: 1,
        flexDirection: 'row',
        padding: '0.5% 0%',
    },

    datosEmpLinea: {
        flexDirection: 'row',
        width: '83%',
        borderRightWidth: 1,
    },

    datosEmpLineaRight: {
        width: '15%',
        alignItems: 'right',
        alignContent: 'right',
        justifyContent: 'right',
        textAlign: 'right',
        flexDirection: 'row',
    },

    datosEmpLineasPrompt: {
        fontSize: 11,
        fontWeight: 'semibold',
    },

    datosEmpLineasTexto: {
        fontSize: 9,
        fontWeight: 'semibold',
    },

    datosEmpLineasTextoRight: {
        fontSize: 9,
        fontWeight: 'semibold',
        alignContent: 'right',
        justifyContent: 'right',
        textAlign: 'right'
    },

    datosCapaciacion: {
        marginTop: 15,
        borderWidth: 1,
        width:'98%',
    },

    datosCapaciacionLinea: {
        fontSize: 11,
        fontWeight: 'semibold',
        padding: '0.5% 0%',
    },
    
});

const Capacitacion_DDJJ_PDF_Cabecera = (props) => {
    console.log('[Capacitacion_DDJJ_PDF_Cabecera] props', props)  
    //const anexoI = 'El presente relevamiento deberá ser completado obligatoriamente en todos sus campos por el empleador oprofesional responsable, revistiendo los datos allí consignados carácter de declaración jurada. El relevamiento deberá ser realizado para cada uno de los establecimientos que disponga la empresa. Para los empleadores cuya actividad se desarrolle en embarcaciones, las mismas serán consideradas como establecimientos.'    
    //const ley19587 = '"… los términos "establecimiento", "explotación", "centro de trabajo" o "puesto de trabajo" designan todo lugar destinado a la realización o donde se realicen tareas de cualquier índole o naturaleza con la presencia permanente, circunstancial o transitoria o eventual de personas físicas, y a los depósitos y dependencias anexas de todo tipo en que las mismas deban permanecer o a los que asistan o concurran por el hecho o en ocasión del trabajo o con el consentimiento expreso o tácito del principal… Así mismo el espacio físico, geográﬁco o domicilio donde se realicen las tareas, deben estar bajo el control material o responsabilidad del empleador.'

    var date = new Date(); //Current Date
    var fecha = moment(date).format('YYYY-MM-DD');

    return (
        <>
            <View style={styles.cabecera}>
                <View style={{width: '25%', borderWidth: 1,}}>
                    <Image source={logo} style={styles.imagen} />
                </View>
                <View style={styles.cabeceraTitulo}>          
                    <Text style={styles.cabeceraTexto2}>DEPARTAMENTO DE PREVENCION</Text>
                    <Text style={styles.cabeceraTexto}>PLANILLA DE  CUMPLIMIENTO DE  CAPACITACION</Text>      
                </View>            
            </View>          

            {/* DATOS DE LA EMPRESA */}
            <View style={{width:'98%', borderWidth: 1,}}>
                <View style={styles.containerCabeceraForm}>
                    <Text style={styles.textoCabeceraForm}>Datos de la Empresa</Text>
                </View> 

                <View>

                    <View style={styles.datosEmpLineas}>

                        <View style={styles.datosEmpLinea}>
                            <Text style={styles.datosEmpLineasPrompt}>Razón Social: </Text>
                            <Text style={styles.datosEmpLineasTexto}>   {props.empresa[0].RazonSocial}</Text>
                        </View>

                         <View style={styles.datosEmpLineaRight}>
                            <Text style={styles.datosEmpLineasPrompt}>CUIT: </Text>
                            <Text style={styles.datosEmpLineasTextoRight}>   {props.empresa[0].CUIT}</Text>
                        </View>

                    </View>
                    
                    <View style={styles.datosEmpLineas}>

                        <View style={styles.datosEmpLinea}>
                            <Text style={styles.datosEmpLineasPrompt}>Dirección: </Text>
                            <Text style={styles.datosEmpLineasTexto}>   Calle:{props.empresa[0].DomicilioCalle} N°:{props.empresa[0].DomicilioNro}</Text>
                        </View>

                        <View style={styles.datosEmpLineaRight}>
                            <Text style={styles.datosEmpLineasPrompt}>Contrato: {/*props.referenteDatos[0].RefEmpleador.ContratoNro*/}</Text>
                            <Text style={styles.datosEmpLineasTextoRight}>   {props.empresa[0].RefEmpleador.ContratoNro}</Text>
                        </View>
                    </View>

                    <View style={styles.datosEmpLineas}>
                        <View style={styles.datosEmpLinea}>
                            <Text style={styles.datosEmpLineasPrompt}>Localidad: </Text>
                            <Text style={styles.datosEmpLineasTexto}>   {props.empresa[0].SRTLocalidad.NombreCompleto}</Text>
                        </View>

                        <View style={styles.datosEmpLineaRight}>
                            <Text style={styles.datosEmpLineasPrompt}>CPA: </Text>
                            <Text style={styles.datosEmpLineasTextoRight}>   {props.empresa[0].SRTLocalidad.CodPostal}</Text>
                        </View>
                    </View>

                    <View style={styles.datosEmpLineas}>
                        <View style={styles.datosEmpLinea}>
                            <Text style={styles.datosEmpLineasPrompt}>Provincia: </Text>
                            <Text style={styles.datosEmpLineasTexto}>   {props.empresa[0].SRTLocalidad.NombreProvincia}</Text>
                        </View>

                        <View style={styles.datosEmpLineaRight}>
                            <Text style={styles.datosEmpLineasPrompt}>CIIU: </Text>
                            <Text style={styles.datosEmpLineasTextoRight}>   {props.empresa[0].RefEmpleador.CIIU}</Text>
                        </View>
                    </View>
                
                </View>
            </View>

            <View style={styles.datosCapaciacion}>
                <View style={styles.datosCapaciacionLinea}>
                    <Text>Módulo: Normativa en H y Seguridad en el Trabajo{/*props.referenteDatos[0].RazonSocial*/}</Text>
                </View>
                <Text style={{borderTop: 1}}></Text>
                <View style={styles.datosCapaciacionLinea}>
                    <Text>Capacitación: Capacitación Covid-19{/*props.referenteDatos[0].CUIT*/}</Text>
                </View>
            </View>

            
            <View  style={{
                    fontSize: 11,
                    fontWeight: 'semibold',
                    borderWidth: 1,
                    marginTop: 15,
                    width: '17%',
                    }}>
                <Text> Fecha: {moment(fecha).format('DD-MM-YYYY')}{/*props.referenteDatos[0].RazonSocial*/}</Text>
            </View> 
        </>
    )
}

export default Capacitacion_DDJJ_PDF_Cabecera;