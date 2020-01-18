import React, {useState, Fragment } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import {createMuiTheme, makeStyles, withStyles,ThemeProvider} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

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

    const [state, setState] = useState({
            categoria: [],
            resultado: {
            tipodeTramite: "",
            tipoPersona: "",
            siniestro:"",
            razonSocial: "",
            dni:"",
            cuit:"",
            telParticular:"",
            telLaboral:"",
            telCelular:"",
            direccion:"",
            email:"",
            tema: "",
            categoria:"",
            mensaje: ""
          }});

          const valorCategoria = (v) => {
            console.log('v: '+v);
            switch (v) {
                case "1": return [[100,''],[101,'Alcance de la Cobertura'],[102,'Presentacion de Documentos'],[103,'Tarifas'],[104,'Otros']];
                case "2": return [[200,''],[201,'Solicitud de Documentacion para Tramite'],[202,'Turnos'],[203,'Otros']];
                case "3": return [[300,''],[301,'Exámenes Periódicos']];
                case "4": return [[400,''],[401,'Pago de Incapacidades'],[402,'Pago Directo de ILT'],[403,'Reintegro de ILT'],[404,'Otros']];
                case "5": return [[500,''],[501,'Demora en Prestaciones'],[502,'Reintegro de Gastos'],[503,'Solicitud de Historia Clinica'],[504,'Traslado'],[505,'Turno'],[506,'Otros']];
                case "6": return [[600,''],[601,'Presentacion de Documentos'],[602,'Visitas a Establecimientos'],[603,'Otros']];
                default: return [[]];
            }
        }; 
        
        const classes = useStyles();

        const inputLabel = React.useRef(null);
        const [labelWidth, setLabelWidth] = React.useState(0);
        React.useEffect(() => {
            setLabelWidth(inputLabel.current.offsetWidth);
        }, []);
           
      const valueToState = ({ name, value, checked, type }) => {

            let resultado = {...state.resultado};
            let categoria = [...state.categoria];
            resultado[name] = type === "checkbox" ? checked : value;
            console.log('name: '+name);   
            console.log('value: '+value)         
        if (name === "tema") {
            categoria = valorCategoria(value);
            resultado.categoria = categoria[0];
        }

        setState({
            categoria: categoria,
            resultado: resultado});
        console.log('cat2:' +state.categoria)
      };
      
      const submitHandler = e =>{
          e.preventDefault()

         const refReclamoConsulta = {
            Operador: null,//En este punto no tengo operador
            Origen: '4',//4 = WEB
            Tramite: [state.resultado.tipodeTramite],
            Tema: [state.resultado.tema],
            Categoria: null,
            Contacto: null,
            Apertura: null,
            Cierre: null
          };

          console.log([state.resultado])
      } 

    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={submitHandler} width="66.6666666667%">
                {/*<p>{JSON.stringify(state, null, 2)}</p>*/}
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
                        >
                        <option value="" />
                        <option value={"1"}>Consulta</option>
                        <option value={"2"}>Reclamo</option>
                        <option value={"3"}>Queja</option>
                        </Select>
                    </FormControl>

                    {/*<FormControlLabel
                        control={
                        <GreenCheckbox
                            type="radio"
                            name="tipoPersona"
                            checked={state.checkedG}
                            onChange={event => valueToState(event.target)}
                            value={"x"}
                        />
                        }
                        label="Ninguna"
                    />*/}

                    <div  style={{display: 'flex','align-self': 'center'}}>
                        <label>
                            Ninguna
                            <GreenRadio
                            checked={state.resultado.tipoPersona === 'x'}
                            onChange={event => valueToState(event.target)}
                            value={"x"}
                            type="radio"
                            name="tipoPersona"
                            />
                        </label>

                        <label>
                            Trabajador
                            <GreenRadio
                            type="radio"
                            name="tipoPersona"
                            checked={state.resultado.tipoPersona === 't'}
                            onChange={event => valueToState(event.target)}
                            value="t"
                            />
                        </label>

                        <label>
                            Empleador
                            <GreenRadio
                            type="radio"
                            name="tipoPersona"
                            checked={state.resultado.tipoPersona === 'e'}
                            onChange={event => valueToState(event.target)}
                            value="e"
                            />
                        </label>
                    </div>       
                                        
                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Siniestro"
                            variant="outlined"
                            name="siniestro"
                            type="text"
                            onChange={event => valueToState(event.target)}
                        />
                    </FormControl>
                </div>

                <div style={{display: 'flex'}}>  
                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Nombre / Razon Social"
                            variant="outlined"
                            name="razonSocial"
                            color="primary"
                            type="text"
                            onChange={event => valueToState(event.target)}
                        />
                    </FormControl> 


                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="DNI"
                            variant="outlined"
                            name="dni"
                            type="text"
                            onChange={event => valueToState(event.target)}
                        />
                    </FormControl>

                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="CUIT"
                            variant="outlined"
                            name="cuit"
                            type="text"
                            onChange={event => valueToState(event.target)}
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

                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Teléfono Celular"
                            variant="outlined"
                            name="telCelular"
                            type="tel"
                            onChange={event => valueToState(event.target)}
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
                        />
                    </FormControl>

                    <FormControl className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Email"
                            variant="outlined"
                            name="email"
                            type="email"
                            onChange={event => valueToState(event.target)}
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
                        >
                            <option value={""}></option>
                            <option value={"1"}>Afiliación y Contratos</option>
                            <option value={"2"}>Comisiones Médicas</option>
                            <option value={"3"}>Exámenes Periódicos</option>
                            <option value={"4"}>Prestaciones Dinerarias</option>
                            <option value={"5"}>Prestaciones en Especie</option>
                            <option value={"6"}>Prevención</option>
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
                        >
                            {state.categoria.map((desc,index) =>{
                                return (
                                    <option value={desc} key={index} >{ desc }</option>
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
                    /> 
                    </div>      
                </div>

                <ThemeProvider theme={theme}>
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                        Enviar
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Cancelar
                    </Button>
                </ThemeProvider>
                    
            </form>
     </ThemeProvider>
    );
};
  
export default ReclamosForm;