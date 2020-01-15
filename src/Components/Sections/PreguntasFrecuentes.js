import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      flexShrink: 0,
      'font-family': "sans-serif",
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.colorsecondary,
    },
    desc: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.colorsecondary,
      backgroundColor: 'lightgray',
      'font-family': "sans-serif", 
      color: 'gray',
      'font-size': 18,
    },
  }));
  
  export default function ControlledExpansionPanels() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (


      <div className={classes.root} className="container">
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{color: 'orange'}}/>}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}> ART - ASEGURADORA DE RIESGO DEL TRABAJO </Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <div >
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
              Es uno de los componentes del Sistema de Seguridad Social Argentino. La ley Nº24.557 de 
              Riesgos del Trabajo (y sus modificatorias, la Ley Nº26.773 y la Ley Nº27.348) tiene como
               objetivo prevenir los riesgos en la actividad laboral y reparar los daños ocacionados 
               por accidentes de trabajo y/o enfermedades profesionales.
            </Typography>
          </ExpansionPanelDetails>
          </div>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>ACCIDENTE DE TRABAJO  </Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography>

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>ENFERMEDAD PROFESIONAL  </Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography>

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>PAGO POR INCAPACIDAD PERMANENTE </Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography>

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography className={classes.heading}>GRAN INVALIDEZ  </Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography>

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography className={classes.heading}>ALCANCE DE LA COBERTURA  </Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography>

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <Typography className={classes.heading}>RELEVAMIENTO GENERAL DE RIESGOS LABORALES (RGRL)  </Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography>

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel8bh-content"
            id="panel8bh-header"
          >
            <Typography className={classes.heading}>RELEVAMIENTO DE AGENTES DE RIESGO (RAR)  </Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography>

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel9bh-content"
            id="panel9bh-header"
          >
            <Typography className={classes.heading}>PROGRAMA ABIERTO DE FORMACIÓN EN SALUD Y SEGURIDAD  </Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography>

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel10bh-content"
            id="panel10bh-header"
          >
            <Typography className={classes.heading}>VENTANILLA ELECTRÓNICA  </Typography>
            <Typography className={classes.secondaryHeading}></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography>

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
