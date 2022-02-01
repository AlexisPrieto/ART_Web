import React, {useState, useEffect} from 'react';
import CapacitacionLogin from '../../Api/ApiLogin.js';

function Capacitacion_Login (props) {
   const frmUsuario = {user:'', cuit: '', psw:'', nombre: ''};
   const [usuario, setUsuario] = useState(frmUsuario);
   const [showMessage, setShowMessage] = useState(false);
   const [showMessage2, setShowMessage2] = useState(false);
   
 

   const handleChange = e => { 
		const {name,value} = e.target;
		setUsuario({...usuario,[name]:value}); 
   };

   useEffect(() => {
	window.scrollTo(0, 0)
   }, [])

   const handleLogin = e =>{
	    e.preventDefault();

		CapacitacionLogin(usuario.psw,usuario.cuit, usuario.psw)
        .then((response) => {
            if (response.data){
				
				const user = response.data;
				
				const userCUIT = (response.data.Tipo === "T" ? response.data.UsuarioWebEmpresas[0].CUIT : usuario.cuit);				

				frmUsuario.usuario = JSON.stringify(user.Nombre);
				frmUsuario.psw = '';

				setUsuario(frmUsuario);
				setShowMessage(true);
				setShowMessage2(false);
 
				props.usuarioLogueado(response.data, userCUIT)
				console.log('Login:', response.status, response.data);

			}else{
				console.log('ERROR!', response.status, response.data);
				frmUsuario.usuario = 'vacio';
				setUsuario(frmUsuario);
				setShowMessage(false);
				setShowMessage2(true);
			}	
        },
        (error) => {
           console.log('error: '+error);
        })
   }

  return (
		<>
		<div className="container pt-2 text-center">
			<div className="alert alert-light" role="alert">
				
			</div>
			{/* showMessage ? <div className="alert alert-success col-md-7 mx-auto" role="alert">Bienvenido  {usuario.usuario}!</div> : ``*/}
			{ showMessage2 ? <div className="alert alert-success col-md-7 mx-auto" role="alert">Error al ingresar los datos! Verifique CUIT/CUIL y Contraseña </div> : ``}

			<form onSubmit={handleLogin} style={{color: 'rgb(150, 152, 154)'}}>
				
				<div className="pt-3 row col-md-7 mx-auto">
						<div className="text-left mx-auto"> <b>CUIT/CUIL:</b> <br/>
							<input value={usuario.cuit} required type="text" name="cuit" onChange={handleChange}  className="input-group form-control" placeholder="CUIT/CUIL" />
						</div>
				</div>

				<div className="pt-3 row col-md-7 mx-auto">
						<div className="text-left mx-auto"> <b>Contraseña:</b> <br/>
							<input value={usuario.contraseña} required type="password" name="psw" onChange={handleChange}  className="input-group form-control" placeholder="Contraseña" />
						</div>
				</div>

				<div className="pt-3 mx-auto text-center">
						<button className="btn btn-primary btn-enviar">Ingresar</button>
				</div>
			</form>	
		</div>
	</>
  );
}
export default Capacitacion_Login;
