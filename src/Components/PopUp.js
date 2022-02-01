
import React from 'react'
import { Button,Modal } from 'react-bootstrap'
import PopUpImg from '../Assets/Img/PopUpImg.jpg';
import "../Assets/Css/PopUp.css";

class PopUp extends React.Component{

    constructor(){
        super();
        this.state = {
            showHide : true
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    render(){
        return(
            <div >
                <Modal 
                dialogClassName="modal-70w"
                show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Anuncio</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>La ART Mutual Rural lamenta comunicar el fallecimiento del Compañero Ramón Ayala, Secretario General de la Unión Argentina de Trabajadores Rurales y Estibadores -UATRE- y Vocal 1° de nuestra ART, víctima de COVID-19. 
Toda las instituciones de nuestra gran familia rural adhieren a la jornada de duelo durante las próximas 24 horas en memoria de su gran compromiso con los trabajadores rurales y su incansable labor en favor de sus derechos.  
Saludando a la familia, elevamos una oración por su descanso eterno.</Modal.Body>
                    

                    <p style={{'align-self': 'center', zoom: '70%'}}>
                        <img src={PopUpImg}/>    
                    </p>

                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        Cerrar
                    </Button>
                    {/*<Button variant="primary" onClick={() => this.handleModalShowHide()}>
                        Save Changes
                    </Button>*/}
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal> 

            </div>
        )
    }
    
}

/*import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

const PopUp = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };

    
    return (
        <>
          <button onClick={showModal}>Display Modal</button>
          <Modal show={isOpen} onHide={hideModal}>
            <Modal.Header>
              <Modal.Title>Titulo</Modal.Title>
            </Modal.Header>
            <Modal.Body>The body</Modal.Body>
            <Modal.Footer>
              <button onClick={hideModal}>Cancel</button>
              <button>Save</button>
            </Modal.Footer>
          </Modal>
        </>
      );
};*/

export default PopUp;