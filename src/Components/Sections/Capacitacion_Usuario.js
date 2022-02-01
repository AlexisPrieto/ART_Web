import React, { Fragment, useEffect } from 'react';
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
import { YoutubePlayer } from "reactjs-media";
import Capacitacion_Evaluacion from "./Capacitacion_Evaluacion";
import Capacitacion_DDJJ from './Capacitacion_DDJJ';
import Api from '../../Api/Api';


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
      {index == 11 ? value === index && <Box p={3} style={{padding: 0}}>{children}</Box> : value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  console.log('index: '+index)
  return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 'auto',
    //width: 500,
  },
}));


const useStylesTab = makeStyles(theme => ({
  root: {
    'font-size': 'unset',
    'font-weight': 'bold',
     'width': 'auto',
    "& .MuiTabs-scroller ": {
      'white-space': 'initial',
    },
    "& .MuiTabs-flexContainer ": {
      'flex-wrap': 'wrap',
      'flex-direction': 'column',
    }
  },
}));

export default function FullWidthTabs(props) {

  const classes = useStyles();
  const classesTab = useStylesTab();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [nota, setNota] = React.useState(0);
  const [nota2, setNota2] = React.useState(0);

  const userCUIT = props.userCUIT2;
  const userId2  = props.userId;
  const userTipo2= props.userTipo;
  const establecimId= props.estabId;

  useEffect(() => { //se comporta como el ComponentDidMount     

    if (props.userTipo == "T"){
    async function consultarNota (id, cuit){
  
      console.log('consultarNota: id:'+props.userId+' cuit:'+props.userCUIT2);
      
      try {
          const response = await Api.get(`CapacitacionesUsuarios/ListarPorEmpresaUsuario?pCUIT=${props.userCUIT2}&pUsuariosWebId=${props.userId}`, {
              headers: {
                  'Content-Type': 'application/json',
              }            
          })
          console.log('nota1: ',response.data);
          console.log('nota2: ',response.data[0].Calificacion);
          
          //MAPACA
          response.data.map(calificaciones => {            
              if (calificaciones.CapacitacionesId == 1) {
                setNota(calificaciones.Calificacion);
              }
              
              if (calificaciones.CapacitacionesId == 2) {
                setNota2(calificaciones.Calificacion);
              }
          })
      }
      catch (error) {
          console.log('[nota error]: ' + error);
      } 
      return 0
    };
   
    consultarNota (1, 1)
    }
  });


  console.log('nota** '+nota) 

  console.log('userCUIT--: '+userCUIT);
  console.log('userId2--: '+userId2);
  console.log('userTipo2--: '+userTipo2);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const state = {
    Mod1_Cap1:[
      {
        Desc:"Proximamente",
        File: ""
      }
    ],

    Mod1_Cap2:[
      {
        Desc:"Proximamente",
        File: ""
      }
    ],

    Mod2_Cap1:[
      {
        Desc:"Condiciones Ingreso y Permanencia",
        File: "Condiciones Ingreso y Permanencia.pdf"
      },
      {
        Desc:"Prevención en el Lugar de Trabajo",
        File: "Prevención en el Lugar de Trabajo.pdf"
      },
      {
        Desc:"Síntomas",
        File: "Síntomas.pdf"
      }
    ],

    Mod2_Cap2: [
      {
        Desc:"Proximamente",
        File: ""
      }
    ],
  
    Mod3_Cap1:[
      {
        Desc:"Proximamente",
        File: ""
      }
    ],

    Mod4_Cap1:[
      {
        Desc:"Proximamente",
        File: ""
      }
    ],
  };


  return (
    <div>
    <div className={classes.root} style={{'display': '-webkit-box'}}>
      <AppBar  position="static"  style={{'height': 'max-content',  width: 'auto'}}>
        <Tabs 
          className={classesTab.root}
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{style: {background:'#83BC00', height:'5px'}}}
          style={{backgroundColor: 'white', color: 'grey', 'display': 'flex', flexFlow: 'column'}}
        >
       (showBulkActions ? 'show' : 'hidden')
          <Tab className="Mui-selected" style={{backgroundColor: '#83BC00', color: 'white'}} label="Capacitación Disposición SRT 2/2021"/>
          <Tab className="Mui-selected" style={{backgroundColor: '#83BC00', color: 'white', textAlign: 'left', minWidth: 'fit-content'}} label="Modulo 1: Riesgos  en los Establecimientos"/>
          <Tab className={classesTab.root} label="Capacitacion 1"   {...a11yProps(0)}/>
          <Tab className={classesTab.root} label="Capacitacion 2"   {...a11yProps(1)}/>
          <Tab className="Mui-selected" style={{backgroundColor: '#83BC00', color: 'white', textAlign: 'left', minWidth: 'fit-content'}} label="Modulo 2: Normativa en H y Seguridad en el Trabajo"/>
          <Tab className={classesTab.root} label="Capacitacion COVID-19" {...a11yProps(2)}/>
          <Tab className={classesTab.root} label="Botiquin de primeros auxilios"  {...a11yProps(3)}/>
          <Tab className="Mui-selected" style={{backgroundColor: '#83BC00', color: 'white', textAlign: 'left', minWidth: 'fit-content'}} label="Modulo 3: Elementos de Protección Personal"/>
          <Tab className={classesTab.root} label="Capacitación .."  {...a11yProps(4)}/>
          <Tab className="Mui-selected" style={{backgroundColor: '#83BC00', color: 'white', textAlign: 'left', minWidth: 'fit-content'}} label="Modulo 4: Productos Químicos y Biológicos"/>
          <Tab className={classesTab.root} label="Capacitacion .."   {...a11yProps(5)}/>
         
          {userTipo2 === "E" ?
          <Tab className="Mui-selected" style={{backgroundColor: '#f8a700', color: 'white', minWidth: 'fit-content'}} label="Declaracion Jurada Empleador"/>
            :null}
        </Tabs>
      </AppBar>

      <div>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{}}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
              
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
                <ul className="list-group">
                {state.Mod1_Cap1.map(obj => (
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
                {state.Mod1_Cap2.map(obj => (
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
              
        </TabPanel>

        <TabPanel value={value} index={5} dir={theme.direction}>
                <ul className="list-group"> 
                {state.Mod2_Cap1.map(obj => (
                    <li 
                    key={obj.Desc}
                    className="list-item-descargas"
                    >
                      {obj.Desc}
                      <a href="#">
                      <Link to={"Capacitacion/Modulo2/"+obj.File} target="_blank" download>
                        <Icon style={{float: "right"}} fill="#F8A700" width={25} />
                      </Link>
                      </a>
                    </li>
                ))}
                </ul>
                  <div style={{marginTop: '5%', textAlign: 'center'}}>
                    <YoutubePlayer
                      src="https://youtu.be/5nVACv-X8V8"
                      width={800}
                      height={600}
                    /> 
                  </div>
                  {console.log('Nota----: '+nota)}
                  
                  {(userTipo2 === "T" && nota < 6) ? 
                  <Capacitacion_Evaluacion IdEval={1} CUITEmpre={userCUIT} Id={userId2} EstablecimientoId={establecimId}/>
                  : <div>Evaluación realizada: Calificación ({nota}) </div> }
        </TabPanel>

        <TabPanel value={value} index={6} dir={theme.direction}>
            
                <ul className="list-group"> 
                    {state.Mod2_Cap2.map(obj => (
                    <li 
                    key={obj.Desc}
                    className="list-item-descargas"
                    >
                      {obj.Desc}
                      <a href="#">
                      <Link to={"Capacitacion/Modulo2/"+obj.File} target="_blank" download>
                        <Icon style={{float: "right"}} fill="#F8A700" width={25} />
                      </Link>
                      </a>
                    </li>
                    ))}
                </ul>
                <div style={{marginTop: '5%', textAlign: 'center'}}>
                    <YoutubePlayer
                      src="https://youtu.be/I7HO1yZ__mk"
                      width={800}
                      height={600}
                    /> 
                  </div>

                
                  {(userTipo2 === "T" && nota2 < 6) ? 
                  <Capacitacion_Evaluacion IdEval={2} CUITEmpre={userCUIT} Id={userId2} EstablecimientoId={establecimId}/>
                  : <div>Evaluación realizada: Calificación ({nota2}) </div> }
                
        </TabPanel>  

        <TabPanel value={value} index={7} dir={theme.direction}>
        </TabPanel>  

        <TabPanel value={value} index={8} dir={theme.direction}>
                <ul className="list-group"> 
                {state.Mod3_Cap1.map(obj => (
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

        <TabPanel value={value} index={9} dir={theme.direction}>
               
        </TabPanel>  

        <TabPanel value={value} index={10} dir={theme.direction}>
                <ul className="list-group"> 
                {state.Mod4_Cap1.map(obj => (
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

          <TabPanel value={value} index={11} dir={theme.direction}>
            
              <Capacitacion_DDJJ CUIT={userCUIT}/>  
          
          </TabPanel>
      </SwipeableViews>
      </div>
      
    </div>
     
    </div>
  );
}