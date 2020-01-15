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
    'font-size': 'x-large',
    'font-weight': 'bold'
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
    listitems: ["Aviso de Obra",
                "Declaración Jurada de Establecimientos",
                "Relevamiento de Agentes de Riesgo (RAR)",
                "Relevamiento de Agentes de Riesgos Laborales - RGRL Dec.351 - Comercion e Industria",
                "Relevamiento de Agentes de Riesgos Laborales - RGRL Dec.911 - Construcción",
                "Relevamiento de Agentes de Riesgos Laborales - RGRL Dec.617 - Agro",
                "Registro de Sustancias y Agentes Cancerígenos - Formulario e Instructivo SRT 415-02"            
            ]
  };

  return (
    <Fragment>
    <div className={classes.root} className="container">
      <h5>
          Aquí podrá descargar e imprimir los formularios correspondientes a la gestión
          de la cobertura de Riesgos del Trabajo.

      </h5>

      <AppBar  position="static" >
      
        <Tabs 
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{style: {background:'green', height:'5px'}}}
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{backgroundColor: 'yellowgreen'}}
          //    font-size: x-large;
        >
          <Tab className={classesTab.root} label="CONTACTOS"  {...a11yProps(0)}/>
          <Tab className={classesTab.root} label="PREVENCIÓN" {...a11yProps(1)}/>
          <Tab className={classesTab.root} label="SINIESTROS" {...a11yProps(2)}/>
          <Tab className={classesTab.root} label="PRESTADORES"{...a11yProps(3)}/>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
              <ul className="list-group">
                {state.listitems.map(listitem => (
                    <li 
                    className="list-item-descargas"
                    key={listitem}
                    >
                    {listitem}
                    <a href="#">
                    <Icon style={{float: "right"}} fill="orange" width={25} />
                      </a>
                    </li>
                ))}
                </ul>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            
                <ul className="list-group">
                {state.listitems.map(listitem => (
                    <li 
                    key={listitem}
                    className="list-item-descargas"
                    >
                    {listitem}
                    <a href="#">
                    <Icon style={{float: "right"}} fill="orange" width={25} />
                      </a>
                    </li>
                ))}
                </ul>
            
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
                <ul className="list-group">
                {state.listitems.map(listitem => (
                    <li 
                    key={listitem}
                    className="list-item-descargas"
                    >
                    {listitem}
                    <a href="#">
                    <Icon style={{float: "right"}} fill="orange" width={25} />
                      </a>
                    </li>
                ))}
                </ul>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
              <ul className="list-group">
                {state.listitems.map(listitem => (
                    <li 
                    key={listitem}
                    className="list-item-descargas"
                    >
                    {listitem}
                    <a href="#">
                    <Icon style={{float: "right"}} fill="orange" width={25} />
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