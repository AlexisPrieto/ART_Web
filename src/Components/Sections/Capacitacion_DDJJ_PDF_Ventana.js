import React, { useState } from 'react';
import Modal from 'react-modal';
import { PDFViewer } from '@react-pdf/renderer';
import Capacitacion_DDJJ_PDF from './Capacitacion_DDJJ_PDF';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const styles = {
    modal: {
        top: '35%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: '60%',
        transform: 'translate(-40%, -10%)'      
    },
    pdf: {
        height: '95%',
        width: '100%'
    }
} 

    const Capacitacion_DDJJ_PDF_Ventana = (props) => {
        const [modalPDFIsOpen, setModalPDFIsOpen] = useState( props.modalPDFIsOpen);   
        

        const handleModalPDF = () => {
            setModalPDFIsOpen( props.modalPDFIsOpen )
    
            //vuelve el valor en false a ListaFormularios
            props.handleCerrarVentanaImpresion(modalPDFIsOpen);
        };
    
        return (
            <Modal
                isOpen={modalPDFIsOpen}
                //onAfterOpen={afterOpenModal}
                onRequestClose={handleModalPDF}
                style={styles.modal}
                contentLabel="Impresion DDJJ"
            >     
                {console.log('props.capas: '+props.capacitaciones)} 
                {console.log('props.empleadorDatos: ', props.empleadorDatos)}
                    
                <PDFViewer style={styles.pdf}>
                    <Capacitacion_DDJJ_PDF 
                        //{...props}
                        capacitacionesUser={props.capacitaciones}
                        empleadorDatos={props.empleadorDatos}
                        //establecimiento={establecimiento}
                    />
                </PDFViewer>
                <button
                    onClick={handleModalPDF}
                    style={{float: 'right'}}
                >
                    Cerrar
                </button>
            </Modal>
        )
        
    }
    
    export default Capacitacion_DDJJ_PDF_Ventana;