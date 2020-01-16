import React, {useState, Fragment } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import {createMuiTheme, makeStyles, withStyles,ThemeProvider} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
            categoria: "",
            mensaje: ""
          }});

          const valorCategoria = (v) => {
            console.log('v: '+v);
            switch (v) {
                case "1": return ['','Alcance de la Cobertura','Presentacion de Documentos','Tarifas','Otros'];
                case "2": return ['','Solicitud de Documentacion para Tramite','Turnos','Otros'];
                case "3": return ['','Exámenes Periódicos'];
                case "4": return ['','Pago de Incapacidades','Pago Directo de ILT','Reintegro de ILT','Otros'];
                case "5": return ['','Demora en Prestaciones','Reintegro de Gastos','Solicitud de Historia Clinica','Traslado','Turno','Otros'];
                case "6": return ['','Presentacion de Documentos','Visitas a Establecimientos','Otros'];
                default: return [];
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
      
    return (
        <ThemeProvider theme={theme}>
            <div  width="66.6666666667%">
                {/*<p>{JSON.stringify(state, null, 2)}</p>*/}
                <div  style={{display: 'flex'}}>
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
                        <option value={"Consulta"}>Consulta</option>
                        <option value={"Reclamo"}>Reclamo</option>
                        <option value={"Queja"}>Queja</option>
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
                                        
                    <form className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Siniestro"
                            variant="outlined"
                            name="siniestro"
                            type="text"
                            onChange={event => valueToState(event.target)}
                        />
                    </form>
                </div>

                <div style={{display: 'flex'}}>  
                    <form className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Nombre / Razon Social"
                            variant="outlined"
                            name="razonSocial"
                            color="primary"
                            type="text"
                            onChange={event => valueToState(event.target)}
                        />
                    </form> 


                    <form className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="DNI"
                            variant="outlined"
                            name="dni"
                            type="text"
                            onChange={event => valueToState(event.target)}
                        />
                    </form>

                    <form className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="CUIT"
                            variant="outlined"
                            name="cuit"
                            type="text"
                            onChange={event => valueToState(event.target)}
                        />
                    </form>
                </div>

                <div  style={{display: 'flex'}}>
                    <form className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Teléfono Particular"
                            variant="outlined"
                            name="telParticular"
                            type="tel"
                            onChange={event => valueToState(event.target)}
                        />
                    </form>

                    <form className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Teléfono Laboral"
                            variant="outlined"
                            name="telLaboral"
                            type="tel"
                            onChange={event => valueToState(event.target)}
                        />
                    </form>

                    <form className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Teléfono Celular"
                            variant="outlined"
                            name="telCelular"
                            type="tel"
                            onChange={event => valueToState(event.target)}
                        />
                    </form>
                </div>

                <div  style={{display: 'flex'}}>
                    <form className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Direccion"
                            variant="outlined"
                            name="direccion"
                            type="text"
                            onChange={event => valueToState(event.target)}
                        />
                    </form>

                    <form className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Email"
                            variant="outlined"
                            name="email"
                            type="email"
                            onChange={event => valueToState(event.target)}
                        />
                    </form>
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
                            {state.categoria.map((item,index) =>{
                                return (
                                    <option value={item} key={index} >{ item }</option>
                                )    

                            })} 

                        </Select>
                    </FormControl>
                </div>   
                    {/*<label htmlFor="mensaje">Mensaje:</label>*/}
                <div className="contact-form"> 
                    <form className={classes.formControl} noValidate autoComplete="off">
                    <textarea 
                        name="mensaje"
                        placeholder="Escriba su sugerencia"
                        onChange={event => valueToState(event.target)}
                    /> 
                    </form>      
                </div>

                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Enviar
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Cancelar
                    </Button>
                </ThemeProvider>
                    
            </div>
     </ThemeProvider>
    );
};
  
export default ReclamosForm;