import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Capacitacion_DDJJ_PDF_Cabecera from './Capacitacion_DDJJ_PDF_Cabecera';
//import moment from 'moment';


//#region Estilos
const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    margin: 5,
  },  
  containerCabeceraForm: {
        margin: '0% 0% 1% 0%',
        flexDirection: 'row',
        margin: '0.7% 0%'
  },

  containerColor: {
    margin: '0% 0% 1% 0%',
    backgroundColor: '#83BC00',
    borderWidth: 1
  },
 
 
});
//#endregion

const Capacitacion_DDJJ_PDF = (props) => {   
    console.log('[Capacitacion_DDJJ_PDF] props', props)  
    
    
    function renderizarSecciones() 
    {                                
        let respuestas =
        <> 
          <View style={{borderWidth: 1, marginTop: 10, width: '98%',}}>
            
            <View style={styles.containerColor}>
              <View style={styles.containerCabeceraForm}>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 12,
                    alignContent: 'left',
                    justifyContent: 'left',
                    textAlign: 'left',
                    marginRight: '7%'}}>Nombre y Apellido</Text>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 12,
                    alignContent: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    marginRight: '5%'}}>CUIL</Text>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 12,
                    alignContent: 'right',
                    justifyContent: 'right',
                    textAlign: 'right',
                    }}>Establecimiento </Text>
              </View>
            </View>


            {props.capacitacionesUser.map(capa => {
              return (
                <View style={{flexDirection: 'row', borderTopWidth: 1}} key={capa.Id}>
                  <Text style={{
                    width: '22%',
                    fontSize: 8,
                    alignContent: 'left',
                    justifyContent: 'left',
                    textAlign: 'left',
                    }}>{capa.NYA}</Text>  
                  <Text style={{
                    width: '12%',
                    fontSize: 8,
                    alignContent: 'left',
                    justifyContent: 'left',
                    textAlign: 'left',
                   }}>{capa.CUIL}</Text>
                    <Text style={{
                    fontSize: 8,
                    alignContent: 'left',
                    justifyContent: 'left',
                    textAlign: 'left',
                   }}>{capa.Establecimiento}</Text>     
                </View>
              )
            })} 
          </View>
        </>
        return respuestas
    };
    
    function pieDePag() 
    {                                
        let pie =
        <> 
          <View style={{marginTop: 10, width: '98%',}}>
              <Text style={{
                  fontSize: 8,
                  alignContent: 'left',
                  justifyContent: 'left',
                  textAlign: 'left',
                  }}>La presente constancia de capacitación cumple con  lo solicitado en el Art. 3 de la Disposición 2/2021SRT, conforme las obligaciones emanadas del Art. 18 del Decreto 170/96 de la  Ley 24557.</Text>
          
            <View style={{marginTop: 25, width: '80%',}}>

              <Text style={{
                  fontSize: 8,
                  alignContent: 'right',
                  justifyContent: 'right',
                  textAlign: 'right',
              }}>---------------------------------------</Text>

              <Text style={{
              marginTop: 5,
              fontSize: 8,
              alignContent: 'right',
              justifyContent: 'right',
              textAlign: 'right',
              }}>Firma,  aclaración  y cargo</Text>
          
                
            </View>
          </View>
        </>
        return pie
    }

    return (              
      <Document>
        <Page style={styles.page} wrap>
            <Capacitacion_DDJJ_PDF_Cabecera
              empresa = {props.empleadorDatos}
            />
            {/* RENDERIZO EL FORMULARIO */}
            {renderizarSecciones()}
            {pieDePag()}
        </Page>
      </Document>
    )
}

export default Capacitacion_DDJJ_PDF;