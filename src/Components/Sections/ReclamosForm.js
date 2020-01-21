import React, {useState} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import {createMuiTheme, makeStyles, withStyles,ThemeProvider} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import moment from "moment"
import Api from '../../Api/Api';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {Link} from "react-router-dom";


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const theme = createMuiTheme({
    palette: {
      primary: green,
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
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })(props => <Radio color="default" {...props} />);

const ReclamosForm = (props) => {
            
    const classes = useStyles();

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);


    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
      };

    const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    setOpen(false);
    };


    const [state, setState] = useState({
            categoria: [{
                cod:"",
                des:""
            }],
            resultado: {
                tipodeTramite: 0,
                tipoPersona: 0,
                siniestro: 0,
                telParticular:"",
                telLaboral:"",
                telCelular:"",
                direccion:"",
                email:"",
                tema: 0,
                categoria: 0,
                mensaje: ""
            },
          contacto: {
                interno: 0,
                docTipo: 80,
                docNro: "",
                trabajadorEmpleador: 0,
                nombre: ""
              },
          detalles: {
                "Interno": 0,
                "ReclamoConsulta": 0,
                "Ingreso": null,
                "Medio": 0,
                "Asunto": "",
                "Cuerpo": "",
                "Movimiento": "E",
                "Operador": 0,
                "Revision": null,
              }   
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
                default: return [{}];
            }
        }; 

        //CREO LOS OBJETOS Y LES ASIGNO EL ESTADO ACTUAL
        let categoria = [...state.categoria];
        let resultado = {...state.resultado};
        let contacto = {...state.contacto};
        let detalle = {...state.detalles};

        const valueToState = ({ name, value }) => {
       
            resultado[name] = value;
            if (name === "tema") {
                resultado[name] = value[0];
                detalle.Asunto = JSON.parse(value)[1];
                //console.log('tema: '+JSON.parse(value)[0]);
                categoria = valorCategoria(JSON.parse(value)[0]);
                resultado.categoria = categoria[0];
            }

            if (name === "categoria") {
                console.log(state.detalle.Asunto);
                console.log('value: '+value);
                /* var String_1 = "Hello" ;
 
    var String_2 = "User" ;
 
    var String_3 = String_1.concat(" " , String_2);*/
                var asu1 = state.detalle.Asunto;
                var asu2 = [];
                console.log(valorCategoria(parseInt(value)));
                asu2 = valorCategoria(parseInt(value));
                console.log(asu2.desc);
                console.log('asunto0: '+detalle.Asunto);
                detalle.Asunto = asu1+asu2.desc;
                console.log('asunto1: '+detalle.Asunto);
               
            }
            setState({
                categoria: categoria,
                resultado: resultado,
                contacto: contacto,
                detalle: detalle,
            });
        };

      const valueToStateContacto = ({ name, value, checked, type }) => {

            contacto[name] = type === "checkbox" ? checked : value;

            setState({
                categoria: categoria,
                resultado: resultado,
                contacto: contacto,
                detalle: detalle,
            });
    };

        const valueToStateDetalle = ({ name, value}) => {

                detalle[name] = value;

                setState({
                    categoria: categoria,
                    resultado: resultado,
                    contacto: contacto,
                    detalle: detalle,
                });
            };

    


      const submitHandler = e =>{
          e.preventDefault()

          var date = new Date(); //Current Date
          var fecha = moment(date).format('YYYY-MM-DD HH:mm:ss')

          const refReclamoConsulta = {
            Interno: 0,
            Operador: 4,
            Origen: 4,//4 = WEB
            Tramite: state.resultado.tipodeTramite,
            Tema: state.resultado.tema,
            Categoria: state.resultado.categoria,
            Contacto: 0,
            Apertura: fecha,
            Cierre: null,
            Siniestro: state.resultado.siniestro,
          };

          
          const refReclamoConsultaDetalle = {
            Interno: 0,
            ReclamoConsulta: state.resultado.tipodeTramite,
            Ingreso: fecha,
            Medio: 0,
            Asunto: '',//tema y categoria
            Cuerpo:  state.resultado.mensaje,
            Movimiento: 'E',
            Operador: 0,
            Revision: null
          };

          console.log(refReclamoConsulta)
          Api.post(`RefReclamoConsulta/RefReclamoConsultaAgregar`, refReclamoConsulta, {
                headers: {
                    'Content-Type': 'application/json',
                }            
            })     
            .then(response => { //si se graba ok, entonces grabo los detalles
               console.log('respuesta'+response)
                
               Api.post(`RefReclamoConsultaDetalle/RefReclamoConsultaDetalleAgregar`, refReclamoConsultaDetalle, {
                    headers: {
                        'Content-Type': 'application/json',
                    }            
                })     
                .then(response => { //si ok, entonces emito el mensaje success
                    console.log('respuesta'+{response})
                })
                .catch(error =>{
                    console.log('error'+{error})
                    
                })
            })
            .catch(error =>{
                console.log('error'+{error});
                error = "" ?  'noerror' :
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                Error interno, el envio no se pudo realizar!
                </Alert>
            </Snackbar>;
            })
      } 
 
      /*function soloNumeros(e){
        var tecla = (document.all) ? e.keyCode : e.which;

        //Tecla de retroceso para borrar, siempre la permite
        if (tecla==8){
            return true;
        }
            
        // Patron de entrada, en este caso solo acepta numeros
        var patron =/[0-9]/;
        var tecla_final = String.fromCharCode(tecla);
        return patron.test(tecla_final);
    }*/

    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={submitHandler} width="66.6666666667%">
                <p>{JSON.stringify(state, null, 2)}</p>
                <div   style={{display: 'flex'}}>
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
                        <option value={3}>Queja</option>
                        </Select>
                    </FormControl>

                    <div  style={{display: 'flex','align-self': 'center'}}>
                        <label>
                            Ninguna
                            <GreenRadio
                            type="radio"
                            name="trabajadorEmpleador"
                            checked={state.contacto.trabajadorEmpleador === '0'}
                            onChange={event => valueToStateContacto(event.target)}
                            value={0}
                            />
                        </label>

                        <label>
                            Trabajador
                            <GreenRadio
                            type="radio"
                            name="trabajadorEmpleador"
                            checked={state.contacto.trabajadorEmpleador === '1'}
                            onChange={event => valueToStateContacto(event.target)}
                            value={1}
                            />
                        </label>

                        <label>
                            Empleador
                            <GreenRadio
                            type="radio"
                            name="trabajadorEmpleador"
                            checked={state.contacto.trabajadorEmpleador === '2'}
                            onChange={event => valueToStateContacto(event.target)}
                            value={2}
                            />
                        </label>
                    </div>       
                                        
                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Siniestro"
                            variant="outlined"
                            name="siniestro"
                            type="text"
                            maxlength="10"
                            onChange={event => valueToState(event.target)}
                            required
                        />
                    </FormControl>
                </div>

                <div style={{display: 'flex'}}>  
                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Nombre / Razon Social"
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
                            type="text"
                            onChange={event => valueToStateContacto(event.target)}
                            required
                        />
                    </FormControl>

                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="CUIT"
                            variant="outlined"
                            name="docNro"
                            type="text"
                            onChange={event => valueToStateContacto(event.target)}
                            required
                        />
                    </FormControl>
                </div>

                <div  style={{display: 'flex'}}>
                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Teléfono Particular"
                            variant="outlined"
                            name="telParticular"
                            type="tel"
                            onChange={event => valueToState(event.target)}
                            required
                        />
                    </FormControl>

                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Teléfono Laboral"
                            variant="outlined"
                            name="telLaboral"
                            type="tel"
                            onChange={event => valueToState(event.target)}
                            required
                        />
                    </FormControl>

                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Teléfono Celular"
                            variant="outlined"
                            name="telCelular"
                            type="tel"
                            onChange={event => valueToState(event.target)}
                            required
                        />
                    </FormControl>
                </div>

                <div  style={{display: 'flex'}}>
                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Direccion"
                            variant="outlined"
                            name="direccion"
                            type="text"
                            onChange={event => valueToState(event.target)}
                            required
                        />
                    </FormControl>

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
                </div>

                <div style={{display: 'flex'}}>
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
                            <option value={JSON.stringify([1,''])}></option>
                            <option value={JSON.stringify([1,'Afiliación y Contratos'])}>Afiliación y Contratos</option>
                            <option value={JSON.stringify([2,'Comisiones Médicas'])}>Comisiones Médicas</option>
                            <option value={JSON.stringify([3,'Exámenes Periódicos'])}>Exámenes Periódicos</option>
                            <option value={JSON.stringify([4,'Prestaciones Dinerarias'])}>Prestaciones Dinerarias</option>
                            <option value={JSON.stringify([5,'Prestaciones en Especie'])}>Prestaciones en Especie</option>
                            <option value={JSON.stringify([6,'Prevención'])}>Prevención</option>
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

                            {state.categoria.map((cat,index) =>{
                                return (
                                    <option value={cat.cod} key={index} >{ cat.desc }</option>
                                )    

                            })} 

                        </Select>
                    </FormControl>
                </div>   
                    {/*<label htmlFor="mensaje">Mensaje:</label>*/}
                <div className="contact-form"> 
                    <div className={classes.formControl} noValidate autoComplete="off">
                    <textarea 
                        name="mensaje"
                        placeholder="Escriba su sugerencia"
                        onChange={event => valueToState(event.target)}
                        required
                    /> 
                    </div>      
                </div>

                <ThemeProvider theme={theme}>
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                        Enviar
                    </Button>
                    <Link to="/INICIO">
                        <Button variant="contained" color="primary" className={classes.button}>
                            Cancelar
                        </Button>
                    </Link>
                </ThemeProvider>
                    
            </form>
     </ThemeProvider>
    );
};
  
export default ReclamosForm;