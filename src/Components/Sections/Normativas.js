import React,{ useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

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
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  },

  desc: {
    //'font-size': 'x-large',
    'font-weight': 'bold'
  },
}));

export default function FullWidthTabs() {

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const tab1 = {
    listitems1: [
      {
        a: 'Ley 24.557/1995 - Ley de Riesgos del Trabajo',
        ahref: 'http://servicios.infoleg.gob.ar/infolegInternet/anexos/25000-29999/27971/norma.htm',
        desc: 'Objetivos y ámbito de aplicación. Prevención de Riesgos del Trabajo. Contingencia y situaciones cubiertas. Prestaciones dinerarias y en especie.',
      },
      {
        a:'Resolución N° 46/2018',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/310000-314999/311020/norma.htm',
        desc:'Póliza A Digital',
      },
      {
        a:'Ley N° 26.773/2012',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/200000-204999/203798/norma.htm',
        desc:'Régimen de Ordenamiento de la reparación de los daños derivados de los accidentes de Trabajo y Enfermedades Profesionales, modificatoria de la Ley N° 24.557.',
      },
      {
        a:'Ley N° 27.348/2017',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/270000-274999/272119/norma.htm',
        desc:'Complementaria de la Ley sobre Riesgos del Trabajo.',
      },
      {
        a:'Resolución SRT N° 298/2017',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/270000-274999/272121/norma.htm',
        desc:'Reglamentación Ley N° 27.348.',
      },
      {
        a:'Decreto 49/2014',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/225000-229999/225309/norma.htm',
        desc:'Listado de enfermedades profesionales. Decretos 658/96; 659/96; 590/97. Modificaciones.',
      },
      {
        a:'Resolución SRT 741/2010',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/165000-169999/167725/norma.htm',
        desc:'Información que deben remitir las ART a la Superintendencia de Riesgos del Trabajo. Procedimiento.',
      },
      {
        a:'Decreto 1694/2009',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/155000-159999/159765/norma.htm',
        desc:'Incremento de los montos de prestaciones dinerarias. Creación del Registro de Prestadores Médicos Asistenciales.',
      },
      {
        a:'Resolución  SRT 529/2009',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=153837',
        desc:'Modifica la Resolución SRT N° 463/2009 relacionada a la creación del Registro de Cumplimiento de Normas de Salud, Higiene y Seguridad en el Trabajo.',
      },
      {
        a:'Resolución SRT 463/2009',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/150000-154999/153431/texact.htm',
        desc:'Solicitud de Afiliación y Contrato de Afiliación. Creación del Registro de Cumplimiento de Normas de Salud, Higiene y Seguridad en el Trabajo.',
      },
    ]
  };

  const tab0 = {
    listitems0: [
      {
        a:'Resolución General AFIP 3487/2013',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=248471',
        desc:'Reimputación Pagos Contribuyente.',
      },
      {
        a:'Resolución General AFIP 2812/2010',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/120000-124999/124126/texact.htm',
        desc:'Sistema Único de la Seguridad Social.',
      },
      {
        a:'Resolución UIF 52/2012',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=195785',
        desc:'Personas Expuestas Políticamente. Modifícase la Resolución Nº 11/11.',
      },
      {
        a:'Resolución SSN 38.477/2014',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=232554',
        desc:'Normas sobre políticas, procedimientos y controles internos para combatir el fraude.',
      },
      {
        a:'Resolución Nº 38.052/2013',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/220000-224999/224369/norma.htm',
        desc:'Creación del Registro de Agentes Institorios.',
      },
      {
        a:'Resolución SSN E 76/2018',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do;jsessionid=89F29B63DAE7A74BE3C540ADB2C4EB25?id=306321',
        desc:'Empadronamiento de Productores Asesores de Seguros.',
      },
      {
        a:'Ley 27.401/2018',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=296846',
        desc:'Responsabilidad Penal Personas Jurídicas.',
      },
    ]
  };

  const tab2 = {
    listitems2: [
         {
            a:'Ley 19.587: en general y especialmente los Art. 8 y 9',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/15000-19999/17612/norma.htm',
            desc:'Ley de Higiene y Seguridad en el Trabajo.',
          },
          {
            a:'Decreto 170/96, Art. 28',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/30000-34999/33757/texact.htm',
            desc:'Obligaciones del Empleador, en acuerdo con su ART.',
          },
          {
            a:'Decreto 911/96',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/35000-39999/38568/texact.htm',
            desc:'Reglamento para la Industria de la Construcción.',
          },
          {
            a:'Resolución SRT N° 51/97, Art. 1 y 2',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/40000-44999/44588/norma.htm',
            desc:'Obligaciones para Empleadores que desarrollen actividades relacionadas al sector de la construcción.',
          },
          {
            a:'Resolución SRT N° 35/98, Art. 1 a 4',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/50000-54999/50188/norma.htm',
            desc:'Obligaciones para Empleadores que desarrollen actividades relacionadas al sector de la construcción.',
          },
          {
            a:'Resolución SRT N° 319/99, Art. 1 a 4',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/55000-59999/59941/norma.htm',
            desc:'Obligaciones para Empleadores que desarrollen actividades relacionadas al sector de la construcción.',
          },
          {
            a:'Resolución SRT N° 415/02, Art. 4 al 7 y su modificatoria por Resolución 844/17',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/275000-279999/278079/norma.htm',
            desc:'Declaración anual de sustancias cancerígenas hasta antes del 15 de abril.',
          },
          {
            a:'Resolución SRT N° 743/03, Art. 4 al 7',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/90000-94999/90519/norma.htm',
            desc:'Declaración anual de Accidentes mayores hasta antes del 15 de abril.',
          },
          {
            a:'Resolución SRT N° 497/03, Art. 4 al 7',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/85000-89999/89125/texact.htm',
            desc:'Declaración anual del Registro de Difenilos Policlorados hasta antes del 15 de abril.',
          },
          {
            a:'Resolución SRT N° 20/2018',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/305000-309999/307746/norma.htm',
            desc:'Programa de prevención específico para Pequeñas y Medianas Empresas (PyMES), el que se denominará "Programa de Prevención para Empleadores de PyMES con Siniestralidad Elevada (P.E.S.E - PyMES).',
          },
    ]
  };

  /*const tab3 = {
    listitems3: [ {
        a:'¿Qué hacer ante un accidente de trabajo?',
        ahref:'http://www.derechoenzapatillas.org/2015/accidente-de-trabajo/',
        desc:'',
      },
      {
        a:'Las ART y los caranchos',
        ahref:'http://www.derechoenzapatillas.org/2015/art-accidente-laboral-riesgos-del-trabajo/',
        desc:'',
      },
      {
        a:'¿Qué hago si sufro un accidente de trabajo?',
        ahref:'http://www.elsalario.com.ar/main/salud/bfque-hago-si-sufro-un-accidente-de-trabajo-1',
        desc:'',
      },
      {
        a:'Página oficial de la Superintendencia de Riesgos del Trabajo',
        ahref:'http://www.srt.gob.ar/',
        desc:'',
      },
    ]
  };*/

  return (
    <div className={classes.root} className="container">
      {/*<div>
        Aquí podrá acceder a informacion oficial de la SSN: Leyes, Resoluciones, Decretos y más.
      </div>*/}

      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { background: "green", height: "5px" } }}
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{ backgroundColor: "yellowgreen" }}
        >
         <Tab className={classes.desc}
            label="Normativa General" 
            {...a11yProps(0)} />

          <Tab className={classes.desc}
            label="Ley de Riesgos del Trabajo y Normativa Complementaria"
            {...a11yProps(1)}
          />
          <Tab className={classes.desc}
            label="Ley de Higiene y Seguridad y Normativa Complementaria"
            {...a11yProps(2)}
          />
          {/*<Tab className={classes.desc}
            label="Comentarios Anexos Relacionados" 
            {...a11yProps(3)} />*/}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ul className="list-group">
            {tab0.listitems0.map(listitem => (
                <li
                style={{
                  "text-align": "justify",
                  "padding-bottom": "inherit",
                  "border-bottom-color": "orange"
                }}
                key={listitem.a}
                className="list-group-item">
                <a style={{color: 'orange','font-weight': 'bolder'}} href={listitem.ahref} target="_blank">
                    <DoubleArrowIcon style={{color: 'orange'}}/>
                    {listitem.a}
                </a>
                <a style={{'font-size': 'small'}}>  {listitem.desc}</a>
              </li>
            ))}
          </ul>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <ul className="list-group">
            {tab1.listitems1.map(listitem => (
                <li
                style={{
                  "text-align": "justify",
                  "padding-bottom": "inherit",
                  "border-bottom-color": "orange"
                }}
                key={listitem.a}
                className="list-group-item">
                <a style={{color: 'orange','font-weight': 'bolder'}} href={listitem.ahref} target="_blank">
                    <DoubleArrowIcon style={{color: 'orange'}}/>
                    {listitem.a}
                </a>
                <a style={{'font-size': 'small'}}>  {listitem.desc}</a>
              </li>
            ))}
          </ul>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <ul className="list-group">
            {tab2.listitems2.map(listitem => (
                <li
                style={{
                  "text-align": "justify",
                  "padding-bottom": "inherit",
                  "border-bottom-color": "orange"
                }}
                key={listitem.a}
                className="list-group-item">
                <a style={{color: 'orange','font-weight': 'bolder'}} href={listitem.ahref} target="_blank">
                    <DoubleArrowIcon style={{color: 'orange'}}/>
                    {listitem.a}
                </a>
                <a style={{'font-size': 'small'}}>  {listitem.desc}</a>
              </li>
            ))}
          </ul>
        </TabPanel>

        {/*<TabPanel value={value} index={3} dir={theme.direction}>
          <ul className="list-group">
            {tab3.listitems3.map(listitem => (
              <li
                style={{
                  "text-align": "justify",
                  "padding-bottom": "inherit",
                  "border-bottom-color": "orange"
                }}
                key={listitem.a}
                className="list-group-item">
                <a style={{color: 'orange','font-weight': 'bolder'}} href={listitem.ahref} target="_blank">
                    <DoubleArrowIcon style={{color: 'orange'}}/>
                    {listitem.a}
                </a>
                <a style={{'font-size': 'small'}}>  {listitem.desc}</a>
              </li>
            ))}
          </ul>
        </TabPanel>*/}
      </SwipeableViews>
    </div>
  );
}
