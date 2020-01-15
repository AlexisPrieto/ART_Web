import React, {useState, Fragment } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

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

            // setState(() => ({
            //     categoria: categoria,
            //     resultado: resultado
            // }));
            // console.log('cat:' +state.categoria)
            // return;
        }

        setState({
            categoria: categoria,
            resultado: resultado});
        console.log('cat2:' +state.categoria)
      };
      
    return (
        <Fragment>

           

            <div width="66.6666666667%">

                <p>{JSON.stringify(state, null, 2)}</p>
                <form>
                <div style={{display: 'flex'}}>
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
                    
                    
                    <form className={classes.formControl} noValidate autoComplete="off">
                        <TextField
                            label="Siniestro"
                            variant="outlined"
                            color="green"
                            name="siniestro"
                            type="text"
                            onChange={event => valueToState(event.target)}
                        />
                    </form>
                </div>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            label="Nombre y Apellido / Razon Social"
                            variant="outlined"
                            color="green"
                            name="razonSocial"
                            type="text"
                            onChange={event => valueToState(event.target)}
                        />
                    </form>


                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            label="DNI"
                            variant="outlined"
                            color="green"
                            name="dni"
                            type="text"
                            onChange={event => valueToState(event.target)}
                        />
                    </form>

                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            label="CUIT"
                            variant="outlined"
                            color="green"
                            name="cuit"
                            type="text"
                            onChange={event => valueToState(event.target)}
                        />
                    </form>

                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            label="Teléfono Particular"
                            variant="outlined"
                            color="green"
                            name="telParticular"
                            type="tel"
                            onChange={event => valueToState(event.target)}
                        />
                    </form>

                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            label="Teléfono Laboral"
                            variant="outlined"
                            color="green"
                            name="telLaboral"
                            type="tel"
                            onChange={event => valueToState(event.target)}
                        />
                    </form>

                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            label="Teléfono Celular"
                            variant="outlined"
                            color="green"
                            name="telCelular"
                            type="tel"
                            onChange={event => valueToState(event.target)}
                        />
                    </form>

                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            label="Direccion"
                            variant="outlined"
                            color="green"
                            name="direccion"
                            type="text"
                            onChange={event => valueToState(event.target)}
                        />
                    </form>

                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            label="Email"
                            variant="outlined"
                            color="green"
                            name="email"
                            type="email"
                            onChange={event => valueToState(event.target)}
                        />
                    </form>



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
                   
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea
                        name="mensaje"
                        placeholder="Escribe tus sugerencias"
                        onChange={event => valueToState(event.target)}
                    />            
                </form>
            </div>
     </Fragment>
    );
};
  
export default ReclamosForm;