import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Icon from "../../Assets/Icons/ART_Icon_Download";
import { Link } from "react-router-dom";
import "../../Assets/Css/App.css";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
    
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));


const useStylesTab = makeStyles(theme => ({
  root: {
    'font-size': 'unset',
    'font-weight': 'bold',

    '@media (max-width: 768px)': {
    "& .MuiTabs-flexContainer ": {
      'flex-wrap': 'wrap',
      'flex-direction': 'column',
    },}
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const classesTab = useStylesTab();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
    
  };

  const state = {
    

    afiliaciones:[
      /*{
        Desc:"Formulario de Afiliación",
        File: "Form_Afil_200325.pdf"
      }*/
      {
        Desc:"Formulario Alta o Modificación CBU Empleador",
        File: "Formulario Alta y o Modificacion CBU Empleador.pdf"
      }
    ],

    general:[
      {
        Desc:"Afiche Res. 268",
        File: "AFICHE_Res-268.pdf"
      },
      {
        Desc:"Afiche COVID-19",
        File: "AFICHE_Covid-19.pdf"
      },
      {
        Desc:"Cuadernillo COVID-19",
        File: "Cuadernillo COVID-19.pdf"
      },
      {
        Desc:"Solicitud de Acreditación de Honorarios y Prestaciones en Cuenta Corriente",
        File: ""
      },{
        Desc:"Formulario UIF Res. 11/11 modificada por Res. 52/12- Persona Humana",
        File: ""
      },{
        Desc:"Formulario UIF Res. 11/11 modificada por Res. 52/12- Persona Jurídica",
        File: ""
      },{
        Desc:"Formulario UIF Res. 11/11 modificada por Res. 52/12- Declaración Jurada Sujeto Obligado.",
        File: ""
      },{
        Desc:"CUIT: Formulario para Datos Impositivos.",
        File: ""
      },
      {
        Desc:"Credencial ART",
        File: "Boletín_Credencial.pdf"
      },
         
    ],

    prevencion: [
      {
        Desc:"Aviso de Obra",
        File: "AvisoDeObra.pdf"
      },
      {
        Desc:"Declaración Jurada de Establecimientos",
        File: "Detalle de Establecimientos.pdf"
      },
      {
        Desc:"Relevamiento de Agentes de Riesgo (RAR)",
        File: "Formulario RAR.pdf"
      },
      {
        Desc:"Relevamiento de Agentes de Riesgos Laborales - RGRL Dec.351 - Comercio e Industria",
        File: "RGRL Dec351-COMERCIO E INDUSTRIA.pdf"
      },
      {
        Desc:"Relevamiento de Agentes de Riesgos Laborales - RGRL Dec.911 - Construcción",
        File: "RGRL Dec911-CONTRUCCION.pdf"
      },
      {
        Desc:"Relevamiento de Agentes de Riesgos Laborales - RGRL Dec.617 - Agro",
        File: "RGRL Dec617-AGRO.pdf"
      },
      /*{
        Desc:"Registro de Sustancias y Agentes Cancerígenos - Formulario e Instructivo SRT 415-02",
        File: ""
      }, 
      {
        Desc:"Anexo - Formulario de Inscripción",
        File: "Anexo - Formulario de Inscripcion.pdf"
      },se quita pedido por ayelen 1/9/20*/
      {
        Desc:"Res 81-19 Anexo II - Formulario de Inscripción Papel",
        File: "Res 81-19 Anexo II - Formulario de Inscripcion Papel.pdf"
      },
      {
        Desc:"Res 81-19 Anexo II - Formulario de Inscripción Digital",
        File: "Res 81-19 AnexoII- Formulario de Inscripcion Digital.pdf"
      },
      {
        Desc:"Listado Agentes de Riesgo-Codigos ESOP Res 81-19",
        File: "ListadoAgRiesgo-CodigosESOP_Res81-19.pdf"
      },
      {
        Desc:"Constancia de Entrega de EPP",
        File: "Constancia de Entrega de EPP.pdf"
      },
      {
        Desc:"Trabajadores Expuestos",
        File: "Trabajadores Expuestos.pdf"
      },
    ],

    prestaciones:[
      
      /*{
        Desc:"Denuncia de Siniestro",
        File: "Formulario Denuncia de Siniestro.pdf"
      },*/
      /*{
        Desc:"Formulario Denuncia y Códigos",
        File: "Formulario Denuncia y Códigos.pdf"
      },*/

      
      {
        Desc:"Denuncia de Accidente Laboral",
        File: "Formulario Denuncia de Accidente Laboral.pdf"
      },
      {
        Desc:"Denuncia de Enfermedad Profesional",
        File: "Formulario Denuncia de Enfermedad Profesional.pdf"
      },
      {
        Desc:"Formulario Solicitud de Reingreso GRAL ARTs",
        File: "Formulario solicitud de Reingreso GRAL ARTs.pdf"
      },
      {
        Desc:"Solicitud Reintegro de ILT",
        File: "Formulario Liquidacion ILT.pdf"
      },
      {
        Desc:"Instructivo Reintegro ILT Gral",
        File: "Instructivo Reintegro ILT Gral.pdf"
      },
      {
        Desc:"Tablas Códigos para denuncias de Siniestros ",
        File: "Tablas Codigos de Denuncia.pdf"
      },
      {
        Desc:"Formulario Solicitud de Reintegro de Gastos",
        File: "Formulario Solicitud de Reintegro de Gastos.pdf"
      },
      {
        Desc:"Formulario Solicitud Reintegro Gastos Médicos",
        File: "Formulario Solicitud Reintegro Gastos Medicos.pdf"
      },
      {
        Desc:"Alta o modificación de CBU del trabajador",
        File: "Formulario Alta y o Modificacion CBU Trabajador.pdf"
      }
    ],

  prestadoresmedicos:[

    {
      Desc:"Denuncia de Accidente Laboral",
      File: "Formulario Denuncia de Accidente Laboral.pdf"
    },
    {
      Desc:"Denuncia de Enfermedad Profesional",
      File: "Formulario Denuncia de Enfermedad Profesional.pdf"
    },    
    {
      Desc:"Formulario Parte Médico Ingreso (PMI)",
      File: "Formulario Parte Medico Ingreso GRAL ARTs.pdf"
    },
    {
      Desc:"Formulario Solicitud de Atención Médica",
      File: "Formulario Solicitud de Atencion Medica.pdf"
    },
    {
      Desc:"Formulario Constancia Atención Médica",
      File: "Formulario Parte Atencion Medica GRAL ARTs.pdf"
    },

    {
      Desc:"Formulario Ficha Rehabilitación",
      File: "Formulario Ficha Rehabilitacion.pdf"
    },
    {
      Desc:"Formulario Alta Médica o Fin Tratamiento",
      File: "Formulario Alta Medica o Fin Tratamiento GRAL ARTs.pdf"
    },
    {
      Desc:"Formulario Preocupacional",
      File: "Formulario Preocupacional.pdf"
    },
    {
      Desc:"Formulario Examen de Egreso",
      File: "Formulario Examen de Egreso.pdf"
    },
    {
      Desc:"Solicitud de Autorización Prestaciones Adicionales",
      File: "Solicitud de Autorizacion Prestaciones Adicionales.pdf"
    }
  ],

  prestadores:[
    {
    Desc:"Cartilla de Prestadores",
    File: "Cartilla de Prestadores.xlsx"
    }
  ],
  };

  

  return (
    <Fragment>
    <div className={classes.root} className="container">

      <AppBar  position="static" >
      
        <Tabs 
          className={classesTab.root}
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{style: {background:'#83BC00', height:'5px'}}}
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{backgroundColor: '#83BC00', 'display': 'flex', 'flex-flow': 'column'}}
          //    font-size: x-large;
        >
       (showBulkActions ? 'show' : 'hidden')
          <Tab className={classesTab.root} label="AFILIACIONES"      {...a11yProps(0)}/>
          <Tab className={classesTab.root} label="GENERAL" {...a11yProps(1)}/>
          <Tab className={classesTab.root} label="PREVENCION"   {...a11yProps(2)}/>
          <Tab className={classesTab.root} label="PRESTACIONES / SINIESTROS" {...a11yProps(3)}/>
          <Tab className={classesTab.root} label="PRESTADORES MEDICOS"  {...a11yProps(4)}/>
          <Tab className={classesTab.root} label="PRESTADORES"  {...a11yProps(5)}/>
        
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
      <TabPanel value={value} index={0} dir={theme.direction}>
              <ul className="list-group">
                {state.afiliaciones.map(obj => (
                    <li 
                    key={obj.Desc}
                    className="list-item-descargas"
                    >
                      {obj.Desc}
                      <a href="#">
                      <Link to={"Download/AFILIACIONES/"+obj.File} target="_blank" download>
                        <Icon style={{float: "right"}} fill="#F8A700" width={25} />
                      </Link>
                      </a>
                    </li>
                ))}
              </ul>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
              <ul className="list-group">
                {state.general.map(obj => (
                    <li 
                    key={obj.Desc}
                    className="list-item-descargas"
                    >
                      {obj.Desc}
                      <a href="#">
                      <Link to={"Download/GENERAL/"+obj.File} target="_blank" download>
                        <Icon style={{float: "right"}} fill="#F8A700" width={25} />
                      </Link>
                      </a>
                    </li>
                ))}
              </ul>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
                <ul className="list-group">
                {state.prevencion.map(obj => (
                    <li 
                    key={obj.Desc}
                    className="list-item-descargas"
                    >
                    {obj.Desc}
                      <a href="#">
                      <Link to={"Download/PREVENCION/"+obj.File} target="_blank" download>
                        <Icon style={{float: "right"}} fill="#F8A700" width={25} />
                      </Link>
                      </a>
                    </li>
                ))}
                </ul>
            
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
                <ul className="list-group"> 
                {state.prestaciones.map(obj => (
                    <li 
                    key={obj.Desc}
                    className="list-item-descargas"
                    >
                      {obj.Desc}
                      <a href="#">
                      <Link to={"Download/PRESTACIONES/"+obj.File} target="_blank" download>
                        <Icon style={{float: "right"}} fill="#F8A700" width={25} />
                      </Link>
                      </a>
                    </li>
                ))}
                </ul>
        </TabPanel>

        <TabPanel value={value} index={4} dir={theme.direction}>
                <ul className="list-group"> 
                {state.prestadoresmedicos.map(obj => (
                    <li 
                    key={obj.Desc}
                    className="list-item-descargas"
                    >
                      {obj.Desc}
                      <a href="#">
                      <Link to={"Download/PRESTADORES MEDICOS/"+obj.File} target="_blank" download>
                        <Icon style={{float: "right"}} fill="#F8A700" width={25} />
                      </Link>
                      </a>
                    </li>
                ))}
                </ul>
        </TabPanel>

        <TabPanel value={value} index={5} dir={theme.direction}>
                <ul className="list-group"> 
                {state.prestadores.map(obj => (
                    <li 
                    key={obj.Desc}
                    className="list-item-descargas"
                    >
                      {obj.Desc}
                      <a href="#">
                      <Link to={"Download/PRESTADORES/"+obj.File} target="_blank" download>
                        <Icon style={{float: "right"}} fill="#F8A700" width={25} />
                      </Link>
                      </a>
                    </li>
                ))}
                </ul>
        </TabPanel>            
      </SwipeableViews>
    </div>
    </Fragment>
  );
}