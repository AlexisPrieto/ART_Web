import React, {useState, Fragment } from "react";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ReclamosForm() {

    let [state, setState] = useState({
            categoria:[],
            
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

    const classes = useStyles();

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    /*
    const handleChange = name => event => {
        setState({
        ...state,
        [name]: event.target.value,
        });
    };*/

      let valueToState = ({ name, value, checked, type }) => {

            let resultado = {...state.resultado}
            resultado[name] = type === "checkbox" ? checked : value;
            console.log('name: '+name);

            
        if (name === "tema") {
            let categoria =  JSON.stringify(valorCategoria(value));
            resultado.categoria = categoria[0];

            setState(() => ({
                categoria: categoria,
                resultado: resultado
            }));
            console.log('cat:' +state.categoria)
            return;
        }

        setState(() => ({
            resultado: resultado})
        );
        console.log('cat2:' +state.categoria)
      };

      let valorCategoria = (v) => {
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

      /*let temaSetCategoria = (v) => {
        var Data = {
            1:['','Alcance de la Cobertura','Presentacion de Documentos','Tarifas','Otros'],
            2:['','Solicitud de Documentacion para Tramite','Turnos','Otros'],
            3:['','Exámenes Periódicos'],
            4:['','Pago de Incapacidades','Pago Directo de ILT','Reintegro de ILT','Otros'],
            5:['','Demora en Prestaciones','Reintegro de Gastos','Solicitud de Historia Clinica','Traslado','Turno','Otros'],
            6:['','Presentacion de Documentos','Visitas a Establecimientos','Otros']
            }
            setState(() => {
                return { 
                    categoria: Data[v]};
            });   
      };*/
      
    return (
        <Fragment>

           

            <div width="66.6666666667%">

                <p>{JSON.stringify(state, null, 2)}</p>
                <form>
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

                <legend>Persona</legend>
                    <label>
                        Ninguna
                        <input
                        type="radio"
                        name="tipoPersona"
                        value={"x"}
                        onChange={event => valueToState(event.target)}
                        />
                    </label>
                    <label>
                        Trabajador
                        <input
                        type="radio"
                        name="tipoPersona"
                        value={"t"}
                        onChange={event => valueToState(event.target)}
                        />
                    </label>
                    <label>
                        Empleador
                        <input
                        type="radio"
                        name="tipoPersona"
                        value={"e"}
                        onChange={event => valueToState(event.target)}
                        />
                    </label>

                    <label htmlFor="razonSocial">Nombre y Apellido / Razon Social:</label>
                    <input
                        name="razonSocial"
                        type="text"
                        placeholder=""
                        onChange={event => valueToState(event.target)}
                    />

                    <label htmlFor="dni">DNI:</label>
                    <input
                        name="dni"
                        type="text"
                        placeholder=""
                        onChange={event => valueToState(event.target)}
                    />

                    <label htmlFor="cuit">CUIT:</label>
                    <input
                        name="cuit"
                        type="text"
                        placeholder=""
                        onChange={event => valueToState(event.target)}
                    />

                    <label htmlFor="telParticular">Teléfono Particular:</label>
                    <input
                        name="telParticular"
                        type="tel"
                        placeholder=""
                        onChange={event => valueToState(event.target)}
                    />

                    <label htmlFor="telLaboral">Teléfono Laboral:</label>
                    <input
                        name="telLaboral"
                        type="tel"
                        placeholder=""
                        onChange={event => valueToState(event.target)}
                    />

                    <label htmlFor="telCelular">Teléfono Celular:</label>
                    <input
                        name="telCelular"
                        type="tel"
                        placeholder=""
                        onChange={event => valueToState(event.target)}
                    />

                    <label htmlFor="direccion">Dirección:</label>
                    <input
                        name="direccion"
                        type="text"
                        placeholder=""
                        onChange={event => valueToState(event.target)}
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        name="email"
                        type="email"
                        placeholder=""
                        onChange={event => valueToState(event.target)}
                    />


                    <FormControl variant="outlined" className={classes.formControl}>
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
                        {/*<option value="" />
                        <option value={"Consulta"}>Consulta</option>
                        <option value={"Reclamo"}>Reclamo</option>
                        <option value={"Queja"}>Queja</option>*/}

                            {state.categoria.map((item,index) =>{
                                return (
                                    <option value={"1"} key={index} >{ item }</option>
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
}
