import React, {useState, useEffect, Fragment} from 'react';
import emailjs from 'emailjs-com';
import ReCaptchaV2 from "react-google-recaptcha";

const PolizaForm = () => {
   const frmContact = { nya:'', razonsocial:'', cuit:'', masasalarial: 0, cantempleados:0, tipotel:'Celular', codarea:'' ,tel:'', email:'', email2:''};
   const [contact,setContact] = useState(frmContact);
   const [showMessage, setShowMessage] = useState(false);
 

   const handleToken = (token) => {
	 setContact((currentForm) => {
	 return {...currentForm, token }
	})
  }

  const handleExpire = () => {
	setContact((currentForm) => {
	 return {...currentForm, token: null }
	})
  }

   const handleChange = e => { 
		const {name,value} = e.target;
		setContact({...contact,[name]:value}); 
   };

   useEffect(() => {
	window.scrollTo(0, 0)
   }, [])

   const handleSubmit = e =>{
	    e.preventDefault();

		emailjs.send('default_service','template_q7oumdn', contact, 'user_gjB2OcgTfvhXOG5nEPbcj')
		.then((response) => {
				   console.log('SUCCESS!', response.status, response.text);
				   setContact(frmContact);
				   setShowMessage(true);
				   window.scrollTo(0, 0);
		}, (err) => {
				   console.log('FAILED...', err);
		});
   }

  return (
    <div className="container pt-2 text-center">
		<div className="alert alert-light" role="alert">
		      
		</div>
		
		{ showMessage ? <div className="alert alert-success col-md-7 mx-auto" role="alert">Solicitud Enviada!!</div> : ``}
	
		<form onSubmit={handleSubmit} style={{color: 'rgb(150, 152, 154)'}}>
			  <div className="pt-3"><h3 className="font-weight-bold"> Solicitud de Cotización </h3></div>
			  
			  <div className="pt-3 row col-md-7 mx-auto">
			 		<div className="text-left mx-auto"> <b>Nombre y Apellido del Solicitante <b style={{color: 'red'}}> * </b></b> <br/>
						<input value={contact.nya} required type="text" name="nya" onChange={handleChange}  className="input-group form-control" placeholder="Nombre y Apellido" />
					</div>
			  </div>

			  <div className="pt-3 row col-md-7 mx-auto">
			 		<div className="text-left mx-auto"> <b>Razón Social de la Empresa</b> <br/>
						<input value={contact.razonsocial} type="text" name="razonsocial" onChange={handleChange}  className="input-group form-control" placeholder="Razón Social" />
					</div>
					<div className="text-left mx-auto"> <b>CUIT <b style={{color: 'red'}}> * </b></b> <br/>
						<input required type="text" value={contact.cuit} name="cuit" onChange={handleChange} className="input-group form-control" placeholder="CUIT" />
					</div>
			  </div>
			  
			  <div className="pt-3 row col-md-7 mx-auto">
					<div className="form-group text-left pt-3 mx-auto"> <b>Masa Salarial Total</b> <br/>
						<input  type="number" value={contact.masasalarial} name="masasalarial" onChange={handleChange} className="input-group form-control" placeholder="Masa Salarial" />
					</div>
				
					<div className="text-left pt-3 mx-auto"> <b>Cantidad de Empleados</b> <br/>
						<input  type="number" value={contact.cantempleados} name="cantempleados" onChange={handleChange} className="input-group form-control" placeholder="Cantidad de Empleados" />
					</div>
			  </div>	

			  <div className="pt-3 row col-md-7 mx-auto">
					<div className="mx-auto" onChange={handleChange}> <b>Tipo de Teléfono</b> <br/>
						<div className="row"> 
							<div  style={{padding: '0% 5%'}}>
								<input style={{color: 'green'}} type="radio" value="Celular" name="tipotel"/> Celular
							</div>
							<div style={{padding: '0% 5%'}}>
								<input type="radio" value="Fijo" name="tipotel"/> Fijo
							</div>
						</div>	
					</div>
					
					{/*Cristian solicita que se agregue el codigo de are 02/12/2021*/}
					<div className="text-left" style={{width: 'min-content'}}> <b>Cod.Área<b style={{color: 'red'}}>*</b></b> <br/>
						<input value={contact.codarea} required type="text" name="codarea" onChange={handleChange}  className="input-group form-control" placeholder="Cod.Área" />
					</div>

					<div className="text-left mx-auto"> <b>Teléfono <b style={{color: 'red'}}> * </b></b> <br/>
						<input value={contact.tel} required type="text" name="tel" onChange={handleChange}  className="input-group form-control" placeholder="Telefono" />
					</div>
			  </div>

			  <div className="pt-3 col-md-7 mx-auto"> <b>Correo Electrónico <b style={{color: 'red'}}> * </b></b> <br/>
					<input value={contact.email} required type="email" name="email" onChange={handleChange}  className="input-group form-control" placeholder="Email" />
			  </div>

			  <div className="pt-3 col-md-7 mx-auto">
					<b>Confirmá el Correo Electrónico<b style={{color: 'red'}}> * </b></b> <br/>
					<input value={contact.email2} required type="email" name="email2" onChange={handleChange}  className="input-group form-control" placeholder="Email" />
			  </div>

				<div style={{display: 'inline-block'}}>
					<ReCaptchaV2 
						sitekey="6Le2BN4aAAAAAAmszeHqg7NmclYXPoaqC0PXoypW"
						onChange={handleToken}
						onExpire={handleExpire}
					/>
				</div>	
			  <div className="pt-3 mx-auto text-center">
					<button className="btn btn-primary btn-enviar">Enviar</button>
			  </div>
		</form>	
	</div>
  );
}
export default PolizaForm;
