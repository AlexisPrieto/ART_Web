import React, {useState} from 'react';
import {InputLabel, Button, TextField, Select, FormControl, Radio} from '@material-ui/core';
import {createMuiTheme, makeStyles, withStyles,ThemeProvider} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import moment from "moment"
import Api from '../../Api/Api';
import {Link, browserHistory} from "react-router-dom";
//import {Snackbar} from '@material/react-snackbar';
import Snackbar from '@material-ui/core/Snackbar'
import '@material/react-snackbar/dist/snackbar.css';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ReCaptchaV2 from "react-google-recaptcha";

const theme = createMuiTheme({
    palette: {
      primary:{
        light: '#83BC00',
        main: '#83BC00',
        dark: 'green',
        contrastText: '#fff',
    },
      secondary: green,
    },
  });
    
const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(2),
      minWidth: 120,
    },
    button: {
        'font-weight': 'bold',
        margin: theme.spacing(1),
      },
  }));

  const GreenRadio = withStyles({
    root: {
      color: '#83BC00',
      '&$checked': {
        color: '#83BC00',
      },
    },
    checked: {},
  })(props => <Radio color="default" {...props} />);

const ReclamosForm = (props) => {
    const [sna, setSna] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
    
    const { vertical, horizontal, open } = sna;

    /*const handleClose = () => {
        setSna({ ...sna, open: false });
      };*/

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return; //window.location.reload();
        }

        if (sb.severitySnackbar === "success"){
            //window.location.reload();
            //browserHistory.push("/RECLAMOS");
            //window.location.href = "";
            return setSna({ ...sna, open: false });
        }
        setSna({ ...sna, open: false });//setSna(false);
      };  

    function Snackb (e){
        console.log('entro a la fnc'+e.value);
        console.log('msj'+e.mensaje);
        
        /*if(e.tipo === "success"){
            setTimeout(() => {
                window.location.reload();
            }, 7000);
        }*/

        return (
        (e.value === true) ?

            <Snackbar 
            className = "my-snakbar"
            anchorOrigin={{ vertical, horizontal }}
            key={`${vertical},${horizontal}`}
            open={e.value}
            onClose={handleClose}
            message={e.mensaje}
            action={
                sb.severitySnackbar == "success" ?
                (<React.Fragment>
                    <Link to="/INICIO">
                        <Button color="primary" size="small">
                            OK
                        </Button>
                    </Link>
                    <Link to="/INICIO">
                        <IconButton size="small" aria-label="close" color="inherit">
                        <CloseIcon fontSize="small" />
                        </IconButton>
                    </Link>
                </React.Fragment>):
                (<React.Fragment>
                    <Button color="primary" size="small" onClick={handleClose}>
                        OK
                    </Button>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>)
                }
            />
        : null)
       
     }

    const classes = useStyles();

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const [state, setState] = useState({
        errorMsj:'',
        categoria: [{
            cod:"",
            des:"",
        }],
        resultado: {
            tipodeTramite: 0,
            tipoPersona: 0,
            siniestro: 0,
            telParticular:"",
            telLaboral:"",
            telCelular:"",
            provincia: "",
            localidad: "",
            direccion:"",
            email:"",
            tema: 0,
            categoria: 0,
        },
        contacto: {
            interno: 0,
            docTipo: 0,
            cuitNro: 0,
            docNro: 0,
            trabajadorEmpleador: '',
            nombre: "",
        },
        detalles: {
            interno2: 0,
            reclamoConsulta: 0, // id de la cabecera
            ingreso: null, //today null
            medio: 0,
            asunto: "",
            cuerpo: "",
            movimiento: "E",
            operador: 0,
            revision: null //nullaa
        },
        }); 	
        
        const [sb, setsb] = useState({
            showSnackBar: false,
            mensajeSnackbar: '',
            severitySnackbar: "",
        });
          const valorCategoria = (v) => {
            console.log('v: '+v);
            switch (v) {
                case 1: return [{cod:0, desc:''},{cod: 1,desc:'Alcance de la Cobertura'},{cod:2,desc:'Presentacion de Documentos'},{cod:3,desc:'Tarifas'},{cod:4,desc:'Otros'}];
                case 2: return [{cod:0, desc:''},{cod: 5,desc:'Solicitud de Documentacion para Tramite'},{cod:6,desc:'Turnos'},{cod:7,desc:'Otros'}];
                case 3: return [{cod:0, desc:''},{cod: 8,desc:'Exámenes Periódicos'}];
                case 4: return [{cod:0, desc:''},{cod: 9,desc:'Pago de Incapacidades'},{cod:10,desc:'Pago Directo de ILT'},{cod:11,desc:'Reintegro de ILT'},{cod:12,desc:'Otros'}];
                case 5: return [{cod:0, desc:''},{cod: 13,desc:'Demora en Prestaciones'},{cod:14,desc:'Reintegro de Gastos'},{cod:15,desc:'Solicitud de Historia Clinica'},{cod:16,desc:'Traslado'},{cod:17,desc:'Turno'},{cod:18,desc:'Otros'}];
                case 6: return [{cod:0, desc:''},{cod: 19,desc:'Presentacion de Documentos'},{cod:20,desc:'Visitas a Establecimientos'},{cod:21,desc:'Otros'}];
                case 7: return [{cod:0, desc:''},{cod: 22,desc:'Otros'}];
                default: return [{}];
            }
        }; 

        //#region CREO LOS OBJETOS Y LES ASIGNO EL ESTADO ACTUAL
        let categoria = state.categoria;
        let resultado = {...state.resultado};
        let contacto = {...state.contacto};
        let detalles = {...state.detalles};
        let snack = {...sb};

        const valueToState = ({ name, value }) => {
            resultado[name] = value;

            if (name === "tema") {
                resultado.tema = JSON.parse(value)[0];
                detalles.asunto =  'Tema: '+JSON.parse(value)[1];
                categoria = valorCategoria((JSON.parse(value)[0]));
                resultado.categoria = 0;//categoria[0];
            }

            if (name === "categoria") {
                resultado.categoria = JSON.parse(value)[0];
        
                var asu = state.detalles.asunto;
                detalles.asunto = state.detalles.asunto+' - Categoria:'+JSON.parse(value)[1]; //<--grabo elcampo "asunto" en la tabla detalle
                //valueToStateDetalle(name=asun,value=detalles.asunto)
            }
            setState({
                categoria: categoria,
                resultado: resultado,
                contacto: contacto,
                detalles: detalles,
            });
        };

        const valueToStateContacto = ({ name, value, checked, type }) => {

            contacto[name] = type === "checkbox" ? checked : value;

            setState({
                categoria: categoria,
                resultado: resultado,
                contacto: contacto, 
                detalles: detalles,
            });
        };

            const valueToStateDetalle = ({ name, value}) => {
                detalles[name] = value;
                console.log([detalles]);
                setState({
                    categoria: categoria,
                    resultado: resultado,
                    contacto: contacto,
                    detalles: detalles,
                });
            };

            //#endregion

        //funciones para llenar el CUERPO del correo con datos
        const trabajadorEmpleadorSTR=(e)=>{
            switch(e) {
                case '1':
                 return 'Trabajador';
                case '2':
                 return 'Empleador';
                default:
                 return 'Otro';
                }
        }

        const tipoTramiteSTR=(e)=>{
            switch(e) {
                case '1':
                 return 'Consulta';
                case '2':
                 return 'Reclamo';
                default:
                 return 'Reclamo';
                }
        }

       const validate = () => {
            let nameError = "";
            
            console.log('trabajador/empl1: '+state.contacto.trabajadorEmpleador)

            if (state.contacto.trabajadorEmpleador == '') {
            
                nameError = "Debe seleccionar un Tipo de Usuario (Trabajador/Empleador/Otro)";
                
            }

            if (state.contacto.trabajadorEmpleador == '1') {
                console.log('docNro1: '+state.contacto.docNro)
                if(state.contacto.docNro == 0){
                    nameError = "Debe ingresar su Numero de DNI";
                }
            }

            console.log('trabajador/empl2: '+state.contacto.trabajadorEmpleador)
            if (state.contacto.trabajadorEmpleador == '2') {
                console.log('docNro2: '+state.contacto.docNro)
                if(state.contacto.cuitNro == 0){
                    nameError = "Debe ingresar su CUIT";
                }
            }

            if (!state.resultado.telParticular && !state.resultado.telLaboral && !state.resultado.telCelular) {
                nameError = "Debe ingresar al menos un teléfono de contacto.";
            }
        
            if ( nameError) {
                setsb({
                    showSnackBar: true,
                    severitySnackbar: "error",
                    mensajeSnackbar: nameError,
                });   
              return false;
            }
        
            return true;
          };  

        //RECAPTCHA  
        const handleToken = (token) => {
        setState((currentForm) => {
        return {...currentForm, token }
        })
        }
    
        const handleExpire = () => {
        setState((currentForm) => {
        return {...currentForm, token: null }
        })
        }
            
      const submitHandler = async e =>{
          e.preventDefault()

         //Validaciones de campos
         const isValid = await validate();
         if (!isValid) {
           console.log('error..'+sb.mensajeSnackbar);
           return <Snackb value={sb.showSnackBar} mensaje={sb.mensajeSnackbar} />
         }

         //Verifico MEDIOS del contacto
         let medios = [];

         medios.push(
            {Interno:0,
            Contacto: 0,
            Tipo: 'E',
            Direccion: state.resultado.email
            })
         
        if (state.resultado.telParticular !== ''){medios.push(
            {Interno:0,
            Contacto: 0,
            Tipo: 'T',
            Direccion: state.resultado.telParticular
            }) 
        }

        if (state.resultado.telLaboral !== '') {medios.push(
            {Interno:0,
            Contacto: 0,
            Tipo: 'T',
            Direccion: state.resultado.telLaboral
            })
        }
                
        if (state.resultado.telCelular !== '') {medios.push(
            {Interno:0,
            Contacto: 0,
            Tipo: 'T',
            Direccion: state.resultado.telCelular
            })
        }
 
          var date = new Date(); //Current Date
          var fecha = moment(date).format('YYYY-MM-DD HH:mm:ss')
          var fecha2 = moment(date).format('DD-MM-YYYY HH:mm:ss')

          console.log('trabEmpl: '+state.contacto.trabajadorEmpleador)
          const RefReclamoConsultaContacto = {
            interno: state.contacto.interno,
            docTipo:  state.contacto.trabajadorEmpleador === '2' ? '80' : '96',
            docNro: state.contacto.trabajadorEmpleador === '2' ? state.contacto.cuitNro : state.contacto.docNro,
            trabajadorEmpleador: state.contacto.trabajadorEmpleador,
            nombre: state.contacto.nombre,
            RefReclamoConsultaMedio: medios,
          };

          const RefReclamoConsultaDetalle = {
            Interno: 0,
            ReclamoConsulta: state.resultado.tipodeTramite,
            Ingreso: fecha,
            Medio: 0,
            Asunto:  state.detalles.asunto,
            Cuerpo: state.detalles.cuerpo,
            Movimiento: 'E',
            Operador: 0,
            Revision: null,
            CuerpoHtml:'<b> Tipo de Tramite: </b>'+ tipoTramiteSTR(state.resultado.tipodeTramite) + ' <p>'+
                '<b>Trabajador/Empleador: </b>'+trabajadorEmpleadorSTR(state.contacto.trabajadorEmpleador)+'<p>'+
                '<b>Siniestro: </b>'+state.resultado.siniestro+ '<p>'+
                '<b>Nombre-Apellido/Razón Social: </b>'+state.contacto.nombre+ '<p>'+
                '<b>DNI: </b>' +state.contacto.docNro+ '<p>'+
                '<b>CUIT: </b>' +state.contacto.cuitNro+ '<p>'+
                '<b>Celular: </b>'+state.resultado.telCelular+ '<p>' +
                '<b>Teléfono Particular: </b>'+state.resultado.telParticular+ '<p>'+
                '<b>Teléfono Laboral: </b>'+state.resultado.telLaboral+ '<p>'+
                '<b>Provincia: </b>'+state.resultado.provincia+ '<p>'+
                '<b>Localidad: </b>'+state.resultado.localidad+ '<p>'+
                '<b>Dirección: </b>'+state.resultado.direccion+ '<p>'+
                '<b>E-mail: </b>'+state.resultado.email+ '<br><br>'+
                '<u><b>Asunto: </b>'+state.detalles.asunto+ '</u><p> '+
                '<b>Mensaje: </b>'+state.detalles.cuerpo+'<br><br> '+
                '<b>Fecha/Hora: </b>'+fecha2+'<p> ',
                SectorInterno: 0,
                OperadorReasigna: 0,
                //'<b>Nro de Reclamo-Consulta:  </b>'+state ,
          };

          const refReclamoConsulta = {
            Interno: 0,
            Operador: 4,
            Origen: 4,//4 = WEB, el 20-08-31 rodri me dice que lo cambie a origen = 1
            Tramite: state.resultado.tipodeTramite,
            Tema: state.resultado.tema,
            Categoria: state.resultado.categoria,
            Contacto: 0, 
            Apertura: fecha,
            Cierre: null,
            Siniestro: state.resultado.siniestro,
            ContactoDomicilioInterno: 0,
            RefReclamoConsultaContacto: RefReclamoConsultaContacto,
            RefReclamoConsultaDetalle: RefReclamoConsultaDetalle
          };

         try{
            await Api.post(`RefReclamoConsulta/RefReclamoConsultaAgregar`, refReclamoConsulta, {
                headers: {
                    'Content-Type': 'application/json',
                }            
            }).then(res => { 
                console.log('interno2' +JSON.stringify(res.data.Interno)) 
                setsb({
                    showSnackBar: true,
                    severitySnackbar: "success",
                    mensajeSnackbar: 'Se registró con éxito su Consulta con el Nro de trámite '+JSON.stringify(res.data.Interno)+'! nos pondremos en contacto.',
                    });      
                return res;
            }).catch(err => {
                setsb({
                    showSnackBar: true,
                    severitySnackbar: "error",
                    mensajeSnackbar: 'Error al enviar la Consulta!',
                    }); 
                return err
            });
            }
            catch{
                snack.showSnackBar = true
                snack.severitySnackbar = "error"
                snack.mensajeSnackbar = 'Error al enviar la Consulta!'
                setsb({
                    showSnackBar: true,
                    severitySnackbar: "error",
                    mensajeSnackbar: 'Error al enviar la Consulta!',
                    }); 
            }
      };

    return (
        
        <ThemeProvider theme={theme}>
            <form onSubmit={submitHandler} width="66.6666666667%">
                {/*<p>{JSON.stringify(state, null, 2)}</p>*/}
                <div className="form-reclamos">
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel ref={inputLabel} htmlFor="tipodeTramite">
                            Tramite
                        </InputLabel>
                        <Select
                        native
                        labelWidth={labelWidth}
                        name="tipodeTramite"
                        onChange={event => valueToState(event.target)}
                        required 
                        >
                        <option value={null} />
                        <option value={1}>Consulta</option>
                        <option value={2}>Reclamo</option>
                        </Select>
                    </FormControl>
                    
                    <div className="form-reclamos" style={{'align-self': 'center', alignSelf: 'center'}}>
                        <label  style={{margin: '0% 5%'}}>
                            Trabajador
                            <GreenRadio
                            type="radio"
                            name="trabajadorEmpleador"
                            checked={state.contacto.trabajadorEmpleador === '1'}
                            onChange={event => valueToStateContacto(event.target)}
                            value={1}
                            />
                        </label>

                        <label  style={{margin: '0% 5%'}}>
                            Empleador
                            <GreenRadio
                            type="radio"
                            name="trabajadorEmpleador"
                            checked={state.contacto.trabajadorEmpleador === '2'}
                            onChange={event => valueToStateContacto(event.target)}
                            value={2}
                            />
                        </label>

                        <label  style={{margin: '0% 5%'}}>
                            Otro
                            <GreenRadio
                            type="radio"
                            name="trabajadorEmpleador"
                            checked={state.contacto.trabajadorEmpleador === '0'}
                            onChange={event => valueToStateContacto(event.target)}
                            value={0}
                            />
                        </label>
                    </div>       
                </div>

                <div className="form-reclamos">  
                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Nombre-Apellido / Razón Social"
                            variant="outlined"
                            name="nombre"
                            color="primary"
                            type="text"
                            onChange={event => valueToStateContacto(event.target)}
                            required
                        />
                    </FormControl> 

                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField         
                            label="DNI"
                            variant="outlined"
                            name="docNro"
                            type="number"
                            onChange={event => valueToStateContacto(event.target)}
                            required = {state.contacto.trabajadorEmpleador == '1' ? true : false}
                        />
                    </FormControl>


                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            holder = "123"
                            label="CUIT"
                            variant="outlined"
                            name="cuitNro"
                            type="number"
                            onChange={event => valueToStateContacto(event.target)}
                            required = {state.contacto.trabajadorEmpleador == '2' ? true : false}
                        />
                    </FormControl>
                </div>

                <div className="form-reclamos">

                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Teléfono Celular"
                            variant="outlined"
                            name="telCelular"
                            type="tel"
                            onChange={event => valueToState(event.target)}
                        />
                    </FormControl>

                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Teléfono Particular"
                            variant="outlined"
                            name="telParticular"
                            type="tel"
                            onChange={event => valueToState(event.target)}
                        />
                    </FormControl>

                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Teléfono Laboral"
                            variant="outlined"
                            name="telLaboral"
                            type="tel"
                            onChange={event => valueToState(event.target)}
                        />
                    </FormControl>
                </div>

                <div className="form-reclamos">
                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Provincia."
                            variant="outlined"
                            placeholder="Provincia."
                            name="provincia"
                            type="text"
                            onChange={event => valueToState(event.target)}
                            required
                        />
                    </FormControl>
                    
                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Localidad."
                            variant="outlined"
                            placeholder="Localidad."
                            name="localidad"
                            type="text"
                            onChange={event => valueToState(event.target)}
                            required
                        />
                    </FormControl>

                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Domicilio."/*"Provincia/calle/nro."*/
                            variant="outlined"
                            placeholder="Domicilio."
                            name="direccion"
                            type="text"
                            onChange={event => valueToState(event.target)}
                            required
                        />
                    </FormControl>
                    
                </div>
                <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Email"
                            variant="outlined"
                            name="email"
                            type="email"
                            onChange={event => valueToState(event.target)}
                            required
                        />
                    </FormControl>
                <div className="form-reclamos">
                    <FormControl variant="outlined" className={classes.formControl} >
                        <InputLabel ref={inputLabel} htmlFor="tema">
                            Tema
                        </InputLabel>
                        <Select
                        native
                        labelWidth={labelWidth}
                        name="tema"
                        onChange={event => valueToState(event.target)}
                        required
                        >
                            <option value={JSON.stringify([0,''])}></option>
                            <option value={JSON.stringify([1,'Afiliaciónes y Contratos'])}>Afiliaciónes y Contratos</option>
                            <option value={JSON.stringify([2,'Comisiones Médicas'])}>Comisiones Médicas</option>
                            <option value={JSON.stringify([3,'Exámenes Periódicos'])}>Exámenes Periódicos</option>
                            <option value={JSON.stringify([4,'Prestaciones Dinerarias'])}>Prestaciones Dinerarias</option>
                            <option value={JSON.stringify([5,'Prestaciones en Especie'])}>Prestaciones en Especie</option>
                            <option value={JSON.stringify([6,'Prevención'])}>Prevención</option>
                            <option value={JSON.stringify([7,'Otros'])}>Otros</option>
                        </Select>
                    </FormControl>
                    
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel ref={inputLabel} htmlFor="categoria">
                            Categoria
                        </InputLabel>
                        <Select
                            native
                            labelWidth={labelWidth}
                            name="categoria"
                            onChange={event =>valueToState(event.target)}
                            required
                        >
                            {state.categoria.map((cat) =>{
                                return (
                                    <option value={JSON.stringify([cat.cod,cat.desc])} key={cat.cod} >{ cat.desc }</option>
                                )    

                            })} 

                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Nro. de Siniestro (en caso de conocerlo)"
                            variant="outlined"
                            name="siniestro"
                            type="number"
                            maxlength="10"
                            onChange={event => valueToState(event.target)}
                        />
                    </FormControl>
                </div>   
                  
                <div className="contact-form"> 
                    <div className={classes.formControl} noValidate autoComplete="off">
                    <label>Mensaje:</label>
                    <textarea 
                        style={{'border-radius': '4px'}}
                        name="cuerpo"
                        placeholder="Escriba su consulta"
                        onChange={event => valueToStateDetalle(event.target)}
                        required
                    /> 
                    </div>      
                </div>

                <div>
					<ReCaptchaV2 
						sitekey="6Le2BN4aAAAAAAmszeHqg7NmclYXPoaqC0PXoypW"
						onChange={handleToken}
						onExpire={handleExpire}
					/>
				</div>

               <div style={{marginBottom:'15%'}} >                
                <ThemeProvider theme={theme}>
                  
                    <Link to="/INICIO">
                        <Button variant="contained" color="primary" className={classes.button}>
                            Cancelar
                        </Button>
                    </Link>
                    <Button type="submit" variant="contained" color="primary" disabled={sb.severitySnackbar === "success" ? true : false} className={classes.button}>
                        Enviar
                    </Button>
                </ThemeProvider>    
            </div>    
            </form>
            {sb.showSnackBar = true ?                   
            <Snackb value={sb.showSnackBar} mensaje={sb.mensajeSnackbar} tipo={sb.severitySnackbar}/>
            :
            null}
     </ThemeProvider>
    );
};
  
export default ReclamosForm;