import React,{ useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Normativa from '../../Assets/Img/Normativa.jpg';
 
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

  const tab0 = {
    listitems0: [
      
      /*{
        a:'Resolución General AFIP 2812/2010',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/120000-124999/124126/texact.htm',
        desc:'Sistema Único de la Seguridad Social',
      },
      {
        a:'Resolución Nº 38.052/2013',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/220000-224999/224369/norma.htm',
        desc:'Creación del Registro de Agentes Institorios',
      },*/
      //----------
      {
        a:'Ley 27.401/2018',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=296846',
        desc:'Responsabilidad Penal Personas Jurídicas',
      },
      {
        a:'Resolución SSN E 76/2018',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do;jsessionid=89F29B63DAE7A74BE3C540ADB2C4EB25?id=306321',
        desc:'Empadronamiento de Productores Asesores de Seguros',
      },
      {
        a:'Resolución General AFIP 3960/2016',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=269399',
        desc:'Declaración Jurada - Procedimiento para la Confección Vía Internet',
      },
      {
        a:'Resolución SSN 38.477/2014',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=232554',
        desc:'Normas sobre políticas, procedimientos y controles internos para combatir el fraude',
      },
      {
        a:'Resolución General AFIP 3487/2013',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=248471',
        desc:'Reimputación Pagos Contribuyente',
      },
      {
        a:'Resolución UIF 52/2012',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=195785',
        desc:'Personas Expuestas Políticamente. Modifícase la Resolución Nº 11/11',
      },
    ]
  };

  const tab1 = {
    listitems1: [
         {
          a:'Decreto Nº 376/2020: Covid-19',
          ahref:'https://www.boletinoficial.gob.ar/detalleAviso/primera/227750/20200414',
          desc:'Enfermedad de carácter profesional no listada',
        },
        {
          a:'Resolución SRT Nº 38/2020',
          ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/335000-339999/336925/norma.htm',
          desc:'Denuncia de contingencia – Requisitos. Reglamentación de DNU N°367/2020',
        },
        {
          a:'Resolución SRT Nº 40/2020',
          ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=336925',
          desc:'Presentaciones de trámites ante Comisiones Medicas',
        },
        {
          a:'Resolución SRT Nº 44/2020',
          ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/335000-339999/339269/norma.htm',
          desc:'Mesa de entradas virtual – Implementación',
        },
        {
          a:'Resolución SRT Nº 46/2020',
          ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/335000-339999/339269/norma.htm',
          desc:'Protocolo SRT para la Prevención del COVID-19. Recomendaciones y sugerencias',
        },
        {
          a:'Disposición SRT Nº 5/2020  GERENCIA GENERAL- SRT',
          ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/335000-339999/336035/norma.htm',
          desc: '• Recomendaciones especiales para trabajos exceptuados del cumplimiento de la cuarentena',
          desc1:'• Recomendaciones para desplazamientos hacia y desde tu trabajo',
          desc2:'• Elementos de protección personal',
          desc3:'• Correctacolocación y retiro de protector respiratorio',
        },
       ]
    };

    const tab2 = {
      listitems2: [
           {
            a:'Ley Nº 24.557/1995 - Ley de Riesgos del Trabajo',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/25000-29999/27971/norma.htm',
            desc:'Objetivos y ámbito de aplicación. Prevención de Riesgos del Trabajo. Contingencia y situaciones cubiertas. Prestaciones dinerarias y en especie.Determinación y revisión de las incapacidades. Régimen financiero. Gestión de las prestaciones. Derechos, deberes y prohibiciones. Fondos de garantía y reserva. Entes de regulación y supervisión. Responsabilidad civil del empleador. Órgano tripartito de participación',
           },
           {
            a:'Decreto Nº 1694/2009',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/155000-159999/159765/norma.htm',
            desc:'Incremento de los montos de prestaciones dinerarias. Creación del Registro de Prestadores Médicos Asistenciales',
           },
           {
            a:'Resolución SRT Nº 365/2009',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/150000-154999/152416/norma.htm',
            desc:'Establécese que los empleadores quedan incluidos en el Sistema de Ventanilla Electrónica implementado por la Resolución Nº 635/08. Procedimiento',
           },
           {
            a:'Ley N° 26.773/2012',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/200000-204999/203798/norma.htm',
            desc:'Régimen de Ordenamiento de la reparación de los daños derivados de los accidentes de Trabajo y Enfermedades Profesionales',
           },
           {
            a:'Decreto 49/2014',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/225000-229999/225309/norma.htm',
            desc:'Listado de Enfermedades Profesionales. Decretos 658/96, 659/96 y 590/97. Modificaciones',
           },
           {
            a:'Resolución  SRT Nº 268/2016',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/260000-264999/262231/norma.htm',
            desc:'Texto prototipo de afiche informativo – Aprobación',
           },
           {
            a:'LEY N° 27.348/2017',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/270000-274999/272119/norma.htm',
            desc:'Complementaria de la Ley sobre Riesgos del Trabajo',
           },
           {
            a:'Resolución SRT N° 298/2017',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/270000-274999/272121/norma.htm',
            desc:'Procedimiento ante las comisiones medicas regulado en el artículo 1° de la Ley Complementaria de la Ley sobre Riesgos del Trabajo',
           },
           {
            a:'Resolución SRT N° 46/2018',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/310000-314999/311020/norma.htm',
            desc:'Póliza Digital',
           },
          ]
        }

  const tab3 = {
    listitems3: [
         {
            a:'Ley  Nº 19.587/1972',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/15000-19999/17612/norma.htm',
            desc:'Higiene y Seguridad en el Trabajo',
          },
          {
            a:'Decreto 170/96',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/30000-34999/33757/texact.htm',
            desc:'Reglamentación de la Ley Nº 24.557. Especialmente Art. 28. Obligaciones del Empleador',
          },
          {
            a:'Resolución  SRT Nº 81/2019',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=329835',
            desc:'Sistema De Vigilancia y Control de Sustancias y Agentes Cancerígenos - Creación – Modificaciones',
          },
          {
            a:'Resolución SRT N° 20/2018',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/305000-309999/307746/norma.htm',
            desc:'Nuevo Programa De Prevención Especifico para Pequeñas y Medianas Empresas',
          },
          {
            a:'Resolución SRT Nº 363/2016',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=265441',
            desc:'Programa para el Tratamiento de los Empleadores con altos niveles de Siniestralidad',
          },
          {
            a:'Resolución SRT Nº 801/2015',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=245850',
            desc:'Sistema Globalmente Armonizado de Clasificación y Etiquetado de Productos Químicos – Implementación',
          },
          {
            a:'Resolución SRT Nº 861/2015',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=246217',
            desc:'Protocolo para la medición de contaminantes químicos en el ambiente laboral',
          },
          {
            a:'Resolución SRT Nº 85/2012',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/190000-194999/193617/norma.htm',
            desc:'Protocolo para la Medición del Ruido en el Ambiente Laboral',
          },
          {
            a:'Resolución SRT Nº 84/2012',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/190000-194999/193616/norma.htm',
            desc:'Protocolo para la Medición de la Iluminación en el Ambiente Laboral',
          },
          {
            a:'Resolución SRT Nº 299/2011',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/180000-184999/180669/norma.htm',
            desc:'Se establece la obligatoriedad del Empleador de registrar la entrega de elementos de protección personal a los trabajadores',
          },
          {
            a:'Resolución SRT Nº 37/2010',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/160000-164999/163171/norma.htm',
            desc:'Exámenes médicos en salud que quedarán incluidos en el Sistema de Riesgos del Trabajo',
          },
          {
            a:'Resolución SRT Nº 771/2009',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/155000-159999/156101/norma.htm',
            desc:'Prorrogase lo establecido en la Resolución SRT 463/2009 relacionada a la creación del Registro de cumplimiento de normas de Salud, Higiene y Seguridad en el Trabajo',
          },
          {
            a:'Resolución SRT Nº 1721/2004',
            ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/100000-104999/102201/norma.htm',
            desc:'Programa para Reducción de Accidentes Mortales',
          },
    ]
  };

  const tab4 = {
    listitems4: [
         {
          a:'Resolución  SSN Nº 38708/2014',
          ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=238219',
          desc:'Reglamento General de la Actividad Aseguradora',
         },
         {
          a:'Resolución SSN Nº 38477/2014',
          ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/230000-234999/232554/norma.htm',
          desc:'Normas Sobre Políticas, Procedimientos y Controles Internos para combatir el Fraude',
         },
         {
          a:'Resolución SSN Nº 35550/11',
          ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=178890',
          desc:'Seguro de Responsabilidad Civil por Accidentes del Trabajo y Enfermedades Laborales',
         },
        ]
      }
  /*const tab6 = {
    listitems6: [
      {
        a: 'Ley 24.557/1995 - Ley de Riesgos del Trabajo',
        ahref: 'http://servicios.infoleg.gob.ar/infolegInternet/anexos/25000-29999/27971/norma.htm',
        desc: 'Objetivos y ámbito de aplicación. Prevención de Riesgos del Trabajo. Contingencia y situaciones cubiertas. Prestaciones dinerarias y en especie',
      },
      {
        a:'Resolución N° 46/2018',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/310000-314999/311020/norma.htm',
        desc:'Póliza A Digital',
      },
      {
        a:'Ley N° 26.773/2012',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/200000-204999/203798/norma.htm',
        desc:'Régimen de Ordenamiento de la reparación de los daños derivados de los accidentes de Trabajo y Enfermedades Profesionales, modificatoria de la Ley N° 24.557',
      },
      {
        a:'Ley N° 27.348/2017',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/270000-274999/272119/norma.htm',
        desc:'Complementaria de la Ley sobre Riesgos del Trabajo',
      },
      {
        a:'Resolución SRT N° 298/2017',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/270000-274999/272121/norma.htm',
        desc:'Reglamentación Ley N° 27.348',
      },
      {
        a:'Decreto 49/2014',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/225000-229999/225309/norma.htm',
        desc:'Listado de enfermedades profesionales. Decretos 658/96; 659/96; 590/97. Modificaciones',
      },
      {
        a:'Resolución SRT 741/2010',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/165000-169999/167725/norma.htm',
        desc:'Información que deben remitir las ART a la Superintendencia de Riesgos del Trabajo. Procedimiento',
      },
      {
        a:'Decreto 1694/2009',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/155000-159999/159765/norma.htm',
        desc:'Incremento de los montos de prestaciones dinerarias. Creación del Registro de Prestadores Médicos Asistenciales',
      },
      {
        a:'Resolución  SRT 529/2009',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=153837',
        desc:'Modifica la Resolución SRT N° 463/2009 relacionada a la creación del Registro de Cumplimiento de Normas de Salud, Higiene y Seguridad en el Trabajo',
      },
      {
        a:'Resolución SRT 463/2009',
        ahref:'http://servicios.infoleg.gob.ar/infolegInternet/anexos/150000-154999/153431/texact.htm',
        desc:'Solicitud de Afiliación y Contrato de Afiliación. Creación del Registro de Cumplimiento de Normas de Salud, Higiene y Seguridad en el Trabajo',
      },
    ]
  };*/

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

    <Fragment>
      
      {/*<div className="each-slide">
          <img width="100%"src={Normativa}></img>
      </div>*/}
      <div className={classes.root} className="container">
        {/*<div>
          Aquí podrá acceder a informacion oficial de la SSN: Leyes, Resoluciones, Decretos y más.
        </div>*/}

        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{ style: { background: "#83BC00", height: "5px" } }}
            variant="fullWidth"
            aria-label="full width tabs example"
            style={{ backgroundColor: "#83BC00" }}
          >
          <Tab className={classes.desc}
              label="Normativa General" 
              {...a11yProps(0)} />

          <Tab className={classes.desc}
              label="Covid-19" 
              {...a11yProps(1)} />
          <Tab className={classes.desc}
              label="Superintendencia de Riesgos del Trabajo"
              {...a11yProps(2)}
            />

          {/*<Tab className={classes.desc}
              label="Ley de Riesgos del Trabajo y Normativa Complementaria"
              {...a11yProps(2)}
            />*/}
            <Tab className={classes.desc}
              label="Ley de Higiene y Seguridad en el Trabajo y normas complementarias"
              {...a11yProps(3)}
            />
            <Tab className={classes.desc}
              label="Superintendencia de Seguros de la Nación" 
              {...a11yProps(4)} />
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
                    textAlign: "justify",
                    "padding-bottom": "inherit",
                    "border-bottom-color": "#F8A700"
                  }}
                  key={listitem.a}
                  className="list-group-item">
                  <a style={{color: '#F8A700','font-weight': 'bolder'}} href={listitem.ahref} target="_blank">
                      <DoubleArrowIcon style={{color: '#F8A700'}}/>
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
                    textAlign: "justify",
                    "padding-bottom": "inherit",
                    "border-bottom-color": "#F8A700"
                  }}
                  key={listitem.a}
                  className="list-group-item">
                  <a style={{color: '#F8A700','font-weight': 'bolder'}} href={listitem.ahref} target="_blank">
                      <DoubleArrowIcon style={{color: '#F8A700'}}/>
                      {listitem.a}
                  </a>
                  {listitem.a == "Disposición SRT Nº 5/2020  GERENCIA GENERAL- SRT" ?
                    (<a style={{'font-size': 'small'}}> <br/> {listitem.desc} <br/> {listitem.desc1}<br/> {listitem.desc2}<br/> {listitem.desc3}</a>):
                   <a style={{'font-size': 'small'}}> {listitem.desc}</a>}
                </li>
              ))}
            </ul>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <ul className="list-group">
              {tab2.listitems2.map(listitem => (
                  <li
                  style={{
                    textAlign: "justify",
                    "padding-bottom": "inherit",
                    "border-bottom-color": "#F8A700"
                  }}
                  key={listitem.a}
                  className="list-group-item">
                  <a style={{color: '#F8A700','font-weight': 'bolder'}} href={listitem.ahref} target="_blank">
                      <DoubleArrowIcon style={{color: '#F8A700'}}/>
                      {listitem.a}
                  </a>
                  <a style={{'font-size': 'small'}}>  {listitem.desc}</a>
                </li>
              ))}
            </ul>
          </TabPanel>

          <TabPanel value={value} index={3} dir={theme.direction}>
            <ul className="list-group">
              {tab3.listitems3.map(listitem => (
                <li
                  style={{
                    textAlign: "justify",
                    "padding-bottom": "inherit",
                    "border-bottom-color": "#F8A700"
                  }}
                  key={listitem.a}
                  className="list-group-item">
                  <a style={{color: '#F8A700','font-weight': 'bolder'}} href={listitem.ahref} target="_blank">
                      <DoubleArrowIcon style={{color: '#F8A700'}}/>
                      {listitem.a}
                  </a>
                  <a style={{'font-size': 'small'}}>  {listitem.desc}</a>
                </li>
              ))}
            </ul>
          </TabPanel>

          <TabPanel value={value} index={4} dir={theme.direction}>
            <ul className="list-group">
              {tab4.listitems4.map(listitem => (
                <li
                  style={{
                    textAlign: "justify",
                    "padding-bottom": "inherit",
                    "border-bottom-color": "#F8A700"
                  }}
                  key={listitem.a}
                  className="list-group-item">
                  <a style={{color: '#F8A700','font-weight': 'bolder'}} href={listitem.ahref} target="_blank">
                      <DoubleArrowIcon style={{color: '#F8A700'}}/>
                      {listitem.a}
                  </a>
                  <a style={{'font-size': 'small'}}>  {listitem.desc}</a>
                </li>
              ))}
            </ul>
          </TabPanel>
        </SwipeableViews>
      </div>
    </Fragment>
  );
}
