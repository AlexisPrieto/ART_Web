import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import accesoWeb from '../../Assets/Img/accesoWeb.jpg';
import Img from '../../Assets/Img/PreguntasFrecuentes.jpg'

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      flexShrink: 0,
      'font-family': "Montserrat",
      //'font-family': "sans-serif",
    },
    /*secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.colorsecondary,
    },*/
    desc: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.colorsecondary,
      backgroundColor: 'lightgray',
      'font-family':  "monserrat",//"sans-serif", 
      color: 'gray',
      'font-size': 18,
      textAlign: 'left',
    },
  }));
  
  export default function ControlledExpansionPanels() {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = panel => (event, isExpanded) => {
      
      setExpanded(isExpanded ? panel : false);
      //window.scrollTo(0, expanded.offsetTop-100);
      window.scrollTo(0, isExpanded.getBoundingClientRect().pos);
    };
  
    return (
      <Fragment>
      <img width="100%"src={Img}></img>
      <div className={classes.root} className="container">
        
        <ExpansionPanel 
          /*expanded={expanded === 'panel1'} onChange={handleChange('panel1')}*/ >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon style={{color: 'orange'}}/>}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}> ¿Qué es una ART? </Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <div >
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Las Aseguradoras de Riesgo de Trabajo son Compañías de Seguros que tendrán como objeto único 
            el otorgamiento de las prestaciones que establece la ley.<p/>
            La autorización para funcionar como ART estará a cargo de la SRT y SSN. Esta autorización podrá
            ser revocada por:<p/>
            <ul>
              <li>a) Omisión de otorgamiento íntegro y oportuno de las prestaciones de la ley.</li>
              <li>b) Cuando se verifiquen deficiencias graves en el cumplimiento de su objeto que no sean subsanadas
              en los plazos que establezca la reglamentación expedida por SSN.</li>
              <li>c) Por causas y procedimientos previstos en la LRT y en la ley 20.091 (Ley de Seguros), como por 
              ejemplo pérdida del capital mínimo, liquidación de la casa matriz, etc.</li>
            </ul>
            Los bienes que respaldan las reservas de las ART son inembargables por cualquier crédito que no sea
            derivado de las obligaciones que establece la LRT, aún en caso de liquidación de la entidad. 
            En este último caso los bienes serán transferidos al Fondo de Reserva, fondo que se ha creado con 
            el fin de afrontar las prestaciones dinerarias y en especie de las ART en liquidación.<p/>
            Ley N° 24.557
            </Typography>
          </ExpansionPanelDetails>
          </div>
        </ExpansionPanel>
        <ExpansionPanel 
          /*expanded={expanded === 'panel2'} onChange={handleChange('panel2')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>¿Qué cubre una ART?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
          <Typography className={classes.desc} color="textSecondary">
            La ART cubre dos tipos de contingencias laborales:<p/>
            <ul>
              <li>Accidente de Trabajo</li>
              <li>Enfermedad Profesional</li>
            </ul>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel 
          /*expanded={expanded === 'panel3'} onChange={handleChange('panel3')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>¿Qué es un accidente de trabajo y una enfermedad profesional?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Un accidente de trabajo es todo acontecimiento súbito y violento, ocurrido por el hecho o en
            ocasión del trabajo, o en el trayecto entre el domicilio del trabajador y su lugar de trabajo
            (y viceversa), siempre y cuando no lo hubiese interrumpido o alterado por causas ajenas al 
            trabajo.<p/>
            Una enfermedad profesional es una patología causada por agentes que se encuentran en el ambiente
            de trabajo o por especiales condiciones en el mismo, potencialmente lesivas para la salud. 
            Estos pueden ser físicos, químicos, biológicos o generadores de sobrecarga física para el 
            trabajador expuesto. Es condición "sine qua non", que exista un vínculo inexcusable entre la 
            enfermedad y la presencia en el trabajo de los agentes o condiciones que posibiliten la gestación
            de un daño a la salud. Es decir, debe existir una enfermedad o daño al organismo que provenga 
            claramente de la exposición del trabajador a los agentes o condiciones causantes.<p/>
            Ley N° 24.557
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel 
          /*expanded={expanded === 'panel4'} onChange={handleChange('panel4')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>¿Cuáles son los objetivos de las ART?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            <ul>
              <li>a) La reducción de la siniestralidad laboral a través de la asistencia técnica y el 
              asesoramiento al empleador en el cumplimiento de sus obligaciones en materia de prevención
              de los riesgos derivados del trabajo.</li>
              <li>b) La reparación de los daños derivados de accidentes de trabajo y de enfermedades 
              profesionales, incluyendo la rehabilitación del trabajador damnificado.</li>
              <li>c) La promoción de la recalificación y la recolocación de los trabajadores damnificados.</li>
              <li>d) La promoción de la negociación colectiva laboral para la mejora de las medidas de prevención.</li>
            </ul>
            Ley N° 24.557
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel 
          /*expanded={expanded === 'panel5'} onChange={handleChange('panel5')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography className={classes.heading}>¿Cuáles son las obligaciones de las Aseguradoras de Riesgos del Trabajo?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Las obligaciones de las ART son:<p/>
            <ul>
              <li>a) Declarar en el Registro de Cumplimiento de Normas de Higiene, Salud y Seguridad en el Trabajo, con carácter de declaración jurada, dentro de los 40 días corridos de recibido el Relevamiento General de Riesgos Laborales (RGRL) y el plan de regularización de los incumplimientos denunciados.</li>
              <li>b) Denunciar en el Registro mencionado a los empleadores que no hayan presentado el RGRL al momento de la afiliación y a aquellos que no hayan cumplido con el Plan fijado oportunamente.</li>
              <li>c) Verificar la verosimilitud del relevamiento realizado por el empleador y evaluar si la consistencia del cronograma de regularización se adecua a las características y riesgos de la actividad.</li>
              <li>d) Realizar visitas de verificación de cumplimiento de la normativa de Higiene y Seguridad, según el art. 11 de la Resolución 463/09.</li>
              <li>e) Brindar asesoramiento y ofrecer asistencia técnica a los empleadores afiliados, en las siguientes materias:</li>
            <center style={{textAlign:'left','text-indent': '3em'}}>1.	La existencia de riesgos y sus potenciales efectos sobre la salud de los trabajadores en el o los establecimientos de ámbito del Contrato.</center>
            <center style={{textAlign:'left','text-indent': '3em'}}>2.	Normativa vigente en materia de higiene y seguridad en el trabajo.</center>
            <center style={{textAlign:'left','text-indent': '3em'}}>3.	Selección de elementos de protección personal.</center>
            <center style={{textAlign:'left','text-indent': '3em'}}>4.	Capacitación que corresponde brindar a los trabajadores.</center>
            <center style={{textAlign:'left','text-indent': '3em'}}>5.	Información sobre la seguridad en el empleo de productos químicos y biológicos.</center>
              <li>f) Realizar los exámenes médicos periódicos de acuerdo con el formulario Relevamiento de Agentes de Riesgo (RAR), el listado de expuestos y toda la documentación respaldatoria que debe presentar el empleador en forma anual, o ante la ocurrencia de cualquier cambio en el proceso o en la organización del trabajo.</li>
              <li>g) Proveer prestadores médicos para la efectiva realización de los exámenes médicos periódicos y coordinar con el empleador la fecha de realización de los mismos.</li>
              <li>h) Poner a disposición del empleador y/o de los empleados los informes de resultados de los exámenes médicos realizados con sus respectivas recomendaciones.</li>
              <li>i) Denunciar ante la S.R.T. todos los incumplimientos a las normas de Higiene y Seguridad en el Trabajo vigentes.</li>
              <li>j) Mantener un registro actualizado de accidentes y enfermedades profesionales. Realizar actividades permanentes de prevención de riesgos y control de las condiciones y medio ambiente de trabajo.</li>
              <li>k) Promover la integración de comisiones paritarias de riesgos del trabajo y colaborar en su capacitación.</li>
              <li>l) Informar al empleador y a los trabajadores sobre el sistema de prevención establecido en la Ley de Riesgos del Trabajo, en particular sobre los derechos y deberes de cada una de las partes.</li>
              <li>m) Colaborar en las investigaciones y acciones de promoción de la prevención que desarrolle la Superintendencia de Riesgos del Trabajo.</li>
              <li>n) Cumplir toda obligación que establezca la Superintendencia de Riesgos del Trabajo.</li>
              <li>o) Para cumplir con las obligaciones establecidas precedentemente, las Aseguradoras deberán contar con profesionales especializados en higiene y seguridad y medicina del trabajo de modo que asegure la atención en materia de prevención de riesgos de sus afiliados.</li>
              <li>p) Tener acceso a la información necesaria para cumplir con las prestaciones de la Ley de Riesgos del Trabajo.</li>
              <li>q) Cumplir con las acciones establecidas en las Resoluciones SRT Nro. 559/09 - 51/97- 552/01 - 550/11 - 230/03 - 1721/04 y 1392/05 - 01/05 - 463/09 y modificatorias que correspondan a las mismas.</li>
              <li>r) Poner a disposición del empleador el listado de prestadores, que brindará cobertura a nivel nacional en caso de producirse un accidente laboral o declararse una enfermedad profesional.</li>
              <li>s) Cuando la ART detecte incumplimientos por parte del empleador a las normas de higiene y seguridad en el trabajo, como asimismo los que resulten del Relevamiento General de Riesgos Laborales o los programas específicos establecidos por la Superintendencia de Riesgos del Trabajo, deberá notificarlo a la Superintendencia de Riesgos del Trabajo.</li>
              <li>t) Notificar a la SRT las altas y bajas de empleadores afiliados.</li>
          </ul>

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel 
          /*expanded={expanded === 'panel6'} onChange={handleChange('panel6')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography className={classes.heading}>¿Qué es una ART MUTUAL?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Son entidades asociativas de seguros mutuos sin fines de lucro, constituidas por las 
            asociaciones profesionales de empleadores o grupos de empleadores y las asociaciones
             sindicales de trabajadores con personería gremial. (Decreto N° 1720/12)
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel 
          /*expanded={expanded === 'panel7'} onChange={handleChange('panel7')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <Typography className={classes.heading}>¿Quiénes están cubiertos?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Obligatoriamente están cubiertos los funcionarios y empleados del sector público nacional,
             de las provincias y sus municipios y la Ciudad Autónoma de Buenos Aires; los trabajadores
             en relación de dependencia del sector privado; los trabajadores de casas particulares; 
             los pasantes y las personas obligadas a prestar un servicio de carga pública. 
             Es requisito que el trabajador se encuentre registrado.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel 
          /*expanded={expanded === 'panel8'} onChange={handleChange('panel8')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel8bh-content"
            id="panel8bh-header"
          >
            <Typography className={classes.heading}>¿Cuáles son las obligaciones de los empleados?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
              <ul>
                <li>a) Recibirán de su empleador información y capacitación en materia de prevención de riesgos del trabajo, debiendo participar en las acciones preventivas.<br/></li>
                <li>b) Cumplirán con las normas de higiene y seguridad, incluido el Plan de Mejoramiento, así como con las medidas de recalificación profesional.<br/></li>
                <li>c) Informarán al empleador de todo hecho o circunstancia riesgosa inherente a sus puestos de trabajo y al establecimiento en general.<br/></li>
                <li>d) Se someterán a la realización de los exámenes médicos periódicos que se le indiquen según la exposición a Riesgos declarada por el empleador.<br/></li>
                <li>e) Se someterán a los tratamientos de médicos y de rehabilitación indicados por la Aseguradora. En caso de negarse, la Aseguradora podrá suspender las prestaciones conforme a lo establecido por el Artículo 20° de la Ley Nº 24.557.<br/></li>
                <li>f) Denunciarán ante el empleador los accidentes y enfermedades profesionales que sufran.<br/></li>
                <li>g) Los empleados además deberán:<br/></li>
              </ul>
              <center style={{textAlign:'left','text-indent': '3em'}}>1.	Utilizar los equipos de protección personal o colectiva y observar las medidas de protección impartidas en los cursos de capacitación.</center>
              <center style={{textAlign:'left','text-indent': '3em'}}>2.	Utilizar o manipular en forma correcta y segura las sustancias, máquinas, herramientas, dispositivos y cualquier otro medio con que desarrollen su actividad laboral conforme a la capacitación brindada por el empleador.</center>
              <center style={{textAlign:'left','text-indent': '3em'}}>3.	Observar las indicaciones de los carteles y avisos sobre medidas de protección, y colaborar con el empleador en materia de salud y seguridad.</center>
              <center style={{textAlign:'left','text-indent': '3em'}}>4.	Colaborar en la organización de programas de formación y educación en materia de salud y seguridad.</center>
              <center style={{textAlign:'left','text-indent': '3em'}}>5.	Informar al empleador de todo hecho o sustancia riesgosa.</center>
              <center style={{textAlign:'left','text-indent': '3em'}}>6.	Portar la credencial de la Aseguradora de Riesgos de Trabajo en forma permanente.</center>

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel 
          /*expanded={expanded === 'panel9'} onChange={handleChange('panel9')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel9bh-content"
            id="panel9bh-header"
          >
            <Typography className={classes.heading}>¿Cómo se financia el sistema?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Conforme a lo establecido por el Artículo 23° de la Ley N° 24.557 sobre Riesgos del Trabajo, las 
            prestaciones se financiarán con el pago de una cuota mensual a cargo del empleador, la que deberá 
            ser declarada y abonada conjuntamente con los aportes y contribuciones que integran al CUSS, 
            estando su fiscalización, verificación y control a cargo de la ART.<p/>
            En este sentido, el Decreto N° 334/96 dispone que la cuota será declarada e ingresada durante 
            el mes en que se brinden las prestaciones, con las mismas modalidades, plazos y condiciones 
            establecidos para el pago de los aportes y contribuciones con destino a la seguridad social, 
            en función de la nómina salarial del mes anterior. 

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel 
          /*expanded={expanded === 'panel10'} onChange={handleChange('panel10')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel10bh-content"
            id="panel10bh-header"
          >
            <Typography className={classes.heading}>¿Cómo se declara y se abona la alícuota?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            La alícuota se declara e ingresa durante el mes en que se brinden las prestaciones, con las
             mismas modalidades, plazos y condiciones establecidos para el pago de los aportes y 
             contribuciones con destino a la seguridad social, en función de la nómina salarial del mes
             anterior.<p/>
            Con respecto a los empleadores no obligados con el Sistema único de Seguridad Social (SUSS), 
            las cotizaciones se abonan bajo las mismas condiciones, directamente a las aseguradoras.<p/>
            La declaración se efectúa utilizando el aplicativo dispuesto por la A.F.I.P., mediante la 
            Resolución General Nº 3757/2015, denominado Sistema de Cálculo de Obligaciones de la Seguridad 
            Social (SICOSS), o bien mediante el sistema Declaración en Línea dispuesto en la Resolución 
            General Nº 3758/2015 como medio obligatorio para aquellos empleadores que tengan hasta 100 
            empleados inclusive. Este aplicativo calcula en forma automática los montos a abonar, a partir
            de los datos requeridos de la empresa, de cada empleado y las alícuotas convenidas con la ART.
            A esto se deberá adicionar el importe fijo de $0,60 correspondiente al Fondo Fiduciario para
            Enfermedades Profesionales.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel11'} onChange={handleChange('panel11')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel11bh-content"
            id="panel11bh-header"
          >
            <Typography className={classes.heading}>¿Cómo se determina la cuota?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            De acuerdo a la Ley 24557 de Riesgos del Trabajo, Art 23, modificado por el Dcto. 334/96, 
            las cuotas del seguro deben declararse e ingresarse en el mes en que se brinden las prestaciones,
             con las mismas modalidades, plazos y condiciones establecidos para el pago de los aportes y 
             contribuciones con destino al Sistema Único de Seguridad Social (SUSS), en función de la nómina
            salarial del mes anterior.<p/>
            De acuerdo al Decreto 491/97, en todos los casos de inicio de actividades, o cuando por otras razones no 
            exista nómina salarial en el mes anterior, el cálculo se realizará en función de la nómina salarial prevista
            para el mes en curso. Posteriormente, junto con la declaración ante la AFIP, se realizará el ajuste pertinente.<p/>
            El valor a abonar mensualmente, se conforma por un componente FIJO (cápita) por empleado bajo relación de
            dependencia y uno VARIABLE (prima) aplicable sobre el monto de la masa salarial imponible de todos los 
            empleados.<p/>
            Además, el Dcto. 590/97, modificado posteriormente por el Dcto. 1278/00, crea un fondo especial denominado
            Fondo Fiduciario para Enfermedades Profesionales (FFEP) a través del cual se garantizan los recursos para 
            hacer frente a las prestaciones dinerarias que deben percibir los trabajadores en virtud de las enfermedades
            profesionales detectadas por la realización de los Exámenes Médicos Periódicos, mediante una cuota mensual
            de $0.60 (sesenta centavos) por cada trabajador en relación de dependencia. Este valor debe sumarse al 
            componente FIJO (cápita) a fin poder ser ingresado en el aplicativo del SIJyP.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel12'} onChange={handleChange('panel12')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel12bh-content"
            id="panel12bh-header"
          >
            <Typography className={classes.heading}>¿Cómo se informan las altas y bajas del personal?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Las empresas que efectúan sus aportes y contribuciones por medio del Sistema único de Seguridad Social 
            (SUSS) deberáN tramitar a través del aplicativo Mi Simplificación de AFIP las novedades de ingreso 
            y egreso de personal dependiente y a continuación informarlo en la DD.JJ. (Form. 931) que presenta 
            ante AFIP.<p/>

            Todas las altas, bajas y modificaciones realizadas mediante el aplicativo Mi Simplificación, son 
            incluidas en la nómina de su empresa mediante un proceso automático, el día hábil siguiente a partir
             de las 12 hs. por lo que no es necesario que la empresa cliente las informe a ART MUTUAL RURAL.<p/>
            Las empresas por fuera del SUSS deberá notificar a la Aseguradora las altas del personal antes del 
            inicio de la relación laboral y las bajas dentro de los 10 días de producidas las mismas.

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel13'} onChange={handleChange('panel13')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel13bh-content"
            id="panel13bh-header"
          >
            <Typography className={classes.heading}>¿Se puede modificar o incorporar cláusulas en los certificados de cobertura?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            El contenido de los certificados de cobertura que se emiten por la página Web o se solicitan en 
            las Sucursales y responde a lo establecido en la normativa vigente y su texto cuenta con la 
            aprobación de la Superintendencia de Riesgos del Trabajo, por lo que no se efectúan modificaciones
             y/o agregados en los mismos.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel14'} onChange={handleChange('panel14')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel14bh-content"
            id="panel14bh-header"
          >
            <Typography className={classes.heading}>¿Dónde puedo consultar mi Estado de Cuenta?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Para consultar rápidamente el estado de su Contrato Tipo de Afiliación, ponemos a disposición 
            ART MUTUAL RURAL (link) on-line, una herramienta que le permitirá ver el detalle de cuotas, 
            períodos devengados, alícuotas, premios, pagos, intereses y saldos de períodos adeudados, 
            ingresando a nuestra página web
            <a href="https://www.artmutualrural.com.ar" style={{color:'blue','text-decoration': 'underline' }} target="_blank">
            (link)</a>.<p/>

            <p className="container">
                <img src={accesoWeb}/>    
                
            </p>

            Asimismo, Ud. podrá evacuar las consultas de facturación y cobranzas que tenga en relación a este capítulo a través de los siguientes medios de contacto:<br/>
            	Enviando un e-mail a (link)<br/>
            	Contactándose telefónicamente al 0800- (Agregar tel de atención al cliente)

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel15'} onChange={handleChange('panel15')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel15bh-content"
            id="panel15bh-header"
          >
            <Typography className={classes.heading}>¿Cuáles son los exámenes médicos laborales obligatorios? (Res. 37/10)</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Los exámenes preocupacionales o de ingreso:<p/>
            <ul>
              <li>	Su realización es obligatoria y están a cargo del empleador, debiendo efectuarse de manera previa al inicio de la relación laboral.</li>
              <li>	Tienen como propósito evaluar la aptitud del postulante conforme sus condiciones psicofísicas para el desempeño de las actividades que se le requerirán.</li>
              <li>	Los contenidos de estos exámenes serán, como mínimo, los del ANEXO I de la RES 37/10.</li>
              <li>	En caso de preverse la exposición a los agente de riesgo del Decreto N° 658/96 deberán, además, efectuarse los estudios correspondientes a cada agente, detallados en el ANEXO II.</li>
            </ul>
            Los exámenes médicos periódicos:<p/>
              Tienen por objetivo la detección precoz de afecciones producidas por aquellos agentes de riesgo determinados por el Decreto N° 658/96 a los cuales el trabajador se encuentre expuesto con motivo de sus tareas, con el fin de evitar el desarrollo de enfermedades profesionales.

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel16'} onChange={handleChange('panel16')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel16bh-content"
            id="panel16bh-header"
          >
            <Typography className={classes.heading}>¿Cuáles son los exámenes médicos laborales optativos?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            De acuerdo a la RES 37/10, los exámenes previos a la transferencia de actividad:<p/>
            <ul>
              <li>Cuando el cambio de tareas conlleve el cese de la eventual exposición a los agentes de riesgo antes mencionados, el examen previsto en este artículo tendrá carácter optativo. La realización de este examen será, en este supuesto, responsabilidad de la Aseguradora o empleador autoasegurado.</li>
            </ul>
            
            Exámenes posteriores a ausencias prolongadas:<p/>
            <ul>
              <li>	Los exámenes posteriores a ausencias prolongadas tienen como propósito detectar las patologías sobrevenidas durante la ausencia.</li>
              <li>	Sólo podrán realizarse en forma previa al reinicio de las actividades del trabajador.</li>
              <li>	La realización de estos exámenes, de carácter optativo, serán responsabilidad de la Aseguradora sin perjuicio de que la Aseguradora pueda convenir con el empleador su realización.</li>
            </ul>
            Los exámenes de egreso:<p/>
            <ul>
              <li>	Tienen como propósito comprobar el estado de salud frente a los elementos de riesgo a los que hubiere sido expuesto el trabajador al momento de la desvinculación.</li>
              <li>	Estos exámenes permitirán el tratamiento oportuno de las enfermedades profesionales, al igual que la detección de eventuales secuelas incapacitantes.</li>
              <li>	Se llevarán a cabo entre los diez (10) días anteriores y los treinta (30) días posteriores a la terminación de la relación laboral.</li>
              <li>	Tienen carácter optativo y serán responsabilidad de la Aseguradora sin perjuicio de que la Aseguradora pueda convenir con el empleador su realización.</li>
              <li>	Revisten el carácter de obligatorios en todos los casos en que exista exposición a los agentes de riesgo antes mencionados, debiendo efectuarse con las frecuencias y contenidos mínimos indicados en el ANEXO II de la Resolución c, incluyendo un examen clínico.</li>
              <li>	La responsabilidad de realizarlos está a cargo de la Aseguradora, sin perjuicio de que pueda convenir con el empleador su realización.</li>  
            </ul>
            Los exámenes previos a la transferencia de actividad:<p/>
            <ul>
            	<li>Los exámenes previos a la transferencia de actividad tienen, en lo pertinente, los objetivos indicados para los exámenes de ingreso y de egreso. Es obligatoria la realización de exámenes previos a la transferencia de actividad toda vez que dicho cambio indique el comienzo de una eventual exposición a uno o más agentes de riesgo determinados por el Decreto N° 658/96, no relacionados con las tareas anteriormente desarrolladas. La realización de estos exámenes será, en este supuesto, responsabilidad del empleador, y deberán realizarse antes del cambio efectivo de las tareas. Los contenidos del examen serán, como mínimo, los indicados en el ANEXO II de la Resolución 37/10.</li>
            </ul>  
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel17'} onChange={handleChange('panel17')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel17bh-content"
            id="panel17bh-header"
          >
            <Typography className={classes.heading}>¿Qué normas mínimas de seguridad e higiene se deben cumplir?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            La Ley 19.587/72 de Higiene y Seguridad y sus decretos reglamentarios han establecido para las empresas la obligación legal (conforme a la actividad que desarrollan y la cantidad de trabajadores que emplean) de contratar un ingeniero calificado que brinde el Servicio de Higiene y Seguridad en el Trabajo.<p/>
              <ul>
                <li>	Decreto 351/79. Detalle de las medidas de seguridad que los establecimientos deberán tomar en relación a características constructivas, condiciones de higiene en los ambientes laborales, protección personal del trabajador, estadísticas de accidentes y enfermedades del trabajo. Se amplían como anexos los siguientes temas: carga térmica, iluminación, color, ruidos y vibraciones, instalaciones eléctricas, protección contra incendios.</li>
                <li>	Decreto 911/96. Adapta las normas establecidas por el Decreto 351, estableciendo obligaciones específicas para la industria de la construcción.</li>
                <li>	Decreto 1338/96: Fija la misión fundamental del Servicio de Higiene y Seguridad como tendiente a determinar, promover y mantener adecuadas condiciones ambientales en los lugares de trabajo. Indica la cantidad de horas profesionales mínimas obligatorias para el Servicio de Higiene y Seguridad y el Servicio de Medicina Laboral.</li>
                <li>	Decreto 617/97: Establece el "Reglamento de Higiene y Seguridad para la Actividad Agraria".</li>
              </ul>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel 
          /*expanded={expanded === 'panel18'} onChange={handleChange('panel18')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel18bh-content"
            id="panel18bh-header"
          >
            <Typography className={classes.heading}>¿Qué empresas están obligadas a contar con un servicio de higiene y seguridad en el trabajo?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Todas las empresas deberán contar, por sí o a través de la contratación de un tercero, con un servicio brindado por profesionales técnicos calificados con el fin de dar cumplimiento a las normas de Higiene y Seguridad en el Trabajo.<p/>
            Según el Art. 14 del Decreto 1.338/96, quedan exceptuadas de la obligación de tener asignación de profesionales técnicos en higiene y seguridad las siguientes entidades:<p/>
            <ul>
              <li>	Los establecimientos dedicados a la agricultura, caza, silvicultura y pesca, que tengan hasta 15 trabajadores permanentes.</li>
              <li>	Las explotaciones agrícolas por temporada.</li>
              <li>	Los establecimientos dedicados exclusivamente a tareas administrativas de hasta 200 trabajadores.</li>
              <li>	Los establecimientos donde se desarrollen tareas comerciales o de servicios de hasta 100 trabajadores, siempre que no se manipulen, almacenen o fraccionen productos tóxicos, inflamables, radioactivos o peligrosos para el trabajador.</li>
              <li>	Los servicios médicos sin internación.</li>
              <li>	Los establecimientos educativos que no tengan talleres.</li>
              <li>	Los talleres de reparación de automotores que empleen hasta 5 trabajadores equivalentes.</li>
              <li>	Los lugares de esparcimiento público que no cuenten con áreas destinadas al mantenimiento, de menos de 3 trabajadores.</li>
            </ul>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel19'} onChange={handleChange('panel19')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel19bh-content"
            id="panel19bh-header"
          >
            <Typography className={classes.heading}>¿Qué hacer en caso de accidente laboral leve?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Ante esta situación deberán comunicarse al Tel: 0800- (TEL CECAP) las 24 hs. los 365 días del año, donde recibirán instrucciones sobre los pasos a seguir según el estado del accidentado.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel20'} onChange={handleChange('panel20')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel20bh-content"
            id="panel20bh-header"
          >
            <Typography className={classes.heading}>¿Qué hacer en caso de accidente laboral grave?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Ante cualquier accidente en el que se considere que existe riesgo inmediato para la vida del accidentado o necesite urgente atención médica, debe comunicarse directamente al Servicio de Emergencias Médicas 0800- (TEL CECAP)
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel21'} onChange={handleChange('panel21')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel21bh-content"
            id="panel21bh-header"
          >
            <Typography className={classes.heading}>¿Qué hacer en caso de reagravación?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            En ese caso se deberá actuar como si fuera un siniestro nuevo (aclarando que es una reagravación* de un siniestro anterior- detallar nro. de caso y/o fecha de PMI), efectuando una nueva denuncia dentro de las 24hs.. La fecha del siniestro debe ser la de la reagravación. <p/>
En todos los casos, al reingresar el trabajador a sus tareas, el mismo deberá presentar la Constancia de Solicitud de Reingreso y la Constancia de Alta Médica/Fin de Tratamiento - según correspondiera, que documentan el momento y las características del retorno a la actividad.<p/>
(*) Reaparición de la dolencia del siniestro original

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel22'} onChange={handleChange('panel22')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel22bh-content"
            id="panel22bh-header"
          >
            <Typography className={classes.heading}>¿Qué debe hacer un empleado ante un accidente fuera del ámbito laboral?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            De permitirlo su estado de salud, deberá concurrir a su empresa y pedir a su superior una Solicitud de Atención Médica, y éste le indicará el lugar al cual debe dirigirse para su atención. De no ser posible llegar a su empresa, deberá comunicarse al 0800-(TEL CECAP), o dirigirse a alguno de los Centros Médicos que se encuentran en la cartilla de prestadores médicos de ART MUTUAL RURAL 
            <a href="https://www.artmutualrural.com.ar" style={{color:'blue','text-decoration': 'underline' }} target="_blank">
            (link)</a>.<p/>
            Deberá tener siempre a mano su Credencial de ART MUTUAL RURAL y anotar las direcciones de los centros de atención más cercanos a su domicilio y a su lugar de trabajo. Ante un accidente "in itinere", deberá realizar la correspondiente denuncia policial.

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel23'} onChange={handleChange('panel23')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel23bh-content"
            id="panel23bh-header"
          >
            <Typography className={classes.heading}>¿Cuál es el procedimiento para Reintegro de Gastos Médicos?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            De acuerdo a la Ley 24.557, art 43, solo se reconocerán prestaciones a partir del momento en que la Aseguradora tome conocimiento de la ocurrencia del accidente.<p/>
            Los accidentes de trabajo y enfermedades profesionales deberán ser atendidos siempre en un prestador médico de la red de ART MUTUAL RURAL. <p/>
            Si por algún motivo excepcional un trabajador accidentado hubiera recibido asistencia por fuera de la red de prestadores y éstos fueran autorizados o reconocidos por ART MUTUAL RURAL, para solicitar su reintegro deberá <p/>
            <ul>
              <li>Integrar todos los datos requeridos en el formulario de Solicitud de Reintegro.(link formulario)</li>
              <li>Consignar en el apartado de "Domicilio para devolución de esta documentación" el domicilio y el teléfono del solicitante del reintegro donde ART MUTUAL RURAL  pueda enviar documentación y/o información en el caso que el trámite sea observado.</li>
            	<li>Indicar Tipo de pago solicitado: transferencia bancaria o pago por ventanilla banco (solo personas físicas no jurídicas)</li>
            	<li>La cuenta bancaria deberá pertenecer al empleado accidentado o a la empresa empleadora.</li>
            	<li>Los reintegros por gastos de sepelio podrán ser presentados por los familiares y/o el empleador sin más.</li>
            	<li>El importe declarado en la solicitud de reintegro deberá ser igual a la suma de los comprobantes presentados.</li>
            	<li>La solicitud deberá estar acompañada de Factura (Tipo B ó C ó Comprobante fiscal) o Recibo de Pago Original. Esta deberá contener los datos del empleado/accidentado (nombre y apellido, y DNI o CUIL), un detalle discriminado y valorizado individualmente de cada prestación con sus fechas de realización.</li>
            </ul>
            Además, según el tipo de prestación, deberá tener adjunta la siguiente documentación:<p/>
            
            Honorarios médicos:
            <ul>
              <li>Evolución médica y/o protocolo de tratamiento (parte de cirugía, parte de anestesia, parte de monitoreo, etc.) firmado y sellado por el profesional interviniente.</li>
            </ul>
            Prácticas Odontológicas:
            <ul>
              <li>Odontograma completo, indicando la pieza a tratar.</li>
            </ul>
            Exámenes Complementarios:
            <ul>
              <li>Laboratorio, radiología, prácticas de mediana o alta complejidad, tratamientos de rehabilitación.</li>
              <li>Prescripción médica.</li>
              <li>Informe o protocolo con fechas de realización, resultado y firma de conformidad por parte del siniestrado.</li>
            </ul>
            Internación:
            <ul>
              <ul>Copia de Historia Clínica que deberá contener como mínimo:
                <li>Informe de Hospitalización.</li>
                <li>Informe de Alta (Epicrisis).</li>
                <li>Hoja de Indicaciones Médicas.</li>
                <li>Hoja de Evolución Médica.</li>
                <li>Anamnesis.</li>
                <li>Hoja de Enfermería. (No excluyente).</li>
                <li>Hoja de Controles y Suministros. (No excluyente).</li>
                <li>Protocolo de Cirugía. (solamente para casos quirúrgicos).</li>
                <li>Protocolo de Anestesia. (solamente para casos quirúrgicos).</li>
                <li>Protocolo de Monitoreo. (solamente para casos quirúrgicos).</li>
                <li>Informes de Prácticas de Diagnóstico. (No excluyente).</li>
              </ul>
            </ul>  
            Medicamentos Ambulatorios:
            <ul>
              <li>Prescripción médica firmada y sellada por el profesional interviniente con datos filiatorios del accidentado (apellido y nombre, tipo y nro. de documento) y troqueles (que deben coincidir con el / los medicamentos solicitados).</li>
            </ul>
            Traslados (remis, ambulancia o U.T.I.M.):
            <ul>
              <li>Voucher con datos del traslado (tipo de traslado, origen y destino del traslado, tiempo de espera, cantidad de kilómetros, etc.) firmado por el accidentado o acompañante.</li>
            </ul>
            Gastos de Sepelio:
            <ul>
              <li>Certificado de defunción.</li>
              <li>Factura Original del servicio de Sepelio.</li>
              <li>Comprobante de CBU (La cuenta debe estar a nombre de quien solicita el reintegro).</li>
              <li>La documentación completa deberá ser remitida a DOMICILIO DE LA ART Ciudad Autónoma de Buenos Aires, colocando en el sobre "Solicitud de Reintegro de Gastos Médicos" At: Liquidación de Prestaciones Médicas ART e indicando remitente. </li>
            </ul>
            El plazo de pago para los reintegros de gastos médicos es de 10 días hábiles a contar desde el momento en que se recibe la documentación detallada (en su totalidad y debidamente conformada) en la Mesa de Entradas de ART MUTUAL RURAL<p/>
            Por seguimiento de estado / situación de reintegro, contactarse con Atención al cliente al 0-800- ATENCION AL CLIENTE, o por e-mail a clientes@ARTMUTUALRURAL.

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel24'} onChange={handleChange('panel24')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel24bh-content"
            id="panel24bh-header"
          >
            <Typography className={classes.heading}>¿Qué son las prestaciones dinerarias?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Son pagos mensuales que deben efectuar la ART mientras el damnificado no pueda trabajar, por el tiempo que corresponda y en la cantidad adecuada, en caso de accidente o enfermedad profesional. En los casos que corresponda, la ART debe pagar también una indemnización.<p/>
            Estos pagos se determinan según el tipo de incapacidad, y tienen como finalidad reparar los daños causados.<p/>
            Estas prestaciones son irrenunciables y poseen carácter alimentario, no pudiendo ser cedidas ni enajenadas por sus beneficiarios. Las prestaciones dinerarias varían según el grado de incapacidad del trabajador (parcial -leve o grave- y total) y su carácter (temporaria, provisoria o permanente). Pueden presentarse las siguientes situaciones:<p/>
            <ul>
              <li>Incapacidad laboral temporaria, se produce cuando un trabajador se encuentra accidentado o padece una enfermedad profesional, y el daño sufrido le impide la realización de sus tareas habituales.</li>
              <li>Incapacidad laboral permanente. Es la situación en que luego de haber estado sometido a tratamiento médico por la mutual, el trabajador presenta una disminución de su capacidad laboral de forma permanente. Cuando la incapacidad permanente es menor a 66%, se considera de grado parcial y cuando la incapacidad permanente es mayor o igual a 66%, es de grado total.</li>
              <li>Gran invalidez. Se trata de la incapacidad laboral permanente total, en la que el trabajador afectado necesita de la asistencia continua de otra persona. Esta prestación cesa con el fallecimiento del accidentado.</li>
              <li>Fallecimiento. Las prestaciones son las mismas que en el caso de incapacidad laboral permanente definitiva total, y en este caso los beneficiarios son los derechohabientes, en los términos del Art 53 Ley 24241.</li>
            </ul>  
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel25'} onChange={handleChange('panel25')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel25bh-content"
            id="panel25bh-header"
          >
            <Typography className={classes.heading}>¿Qué es la ILT?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            La Incapacidad Laboral Temporaria se produce cuando un trabajador se encuentra accidentado o padece una enfermedad profesional, y el daño sufrido le impide la realización de sus tareas habituales. . Se trata de un impedimento transitorio que tiene una duración máxima de 24 meses contados desde la producción del accidente, o desde la primera manifestación invalidante de la enfermedad.<p/>
            La ley sobre Riesgos del Trabajo N° 24.557 establece cuatro causas por las cuales cesa la situación de ILT 1- Alta médica 2- Determinación de incapacidad laboral permanente 3- Transcurso de un año desde la PMI 4- Muerte del trabajador<p/>
            El obligado al pago deberá abonar una prestación dineraria de cuantía y condiciones iguales a la que efectivizaba en concepto de Incapacidad Laboral Temporaria. Durante esta última etapa, el trabajador no devengará remuneraciones de su empleador. Dicho período podrá ser reducido si con anterioridad se hubiese sustanciado el trámite pertinente para establecer la Incapacidad Laboral Permanente ante los organismos competentes.<p/>
            En este período el trabajador percibe una prestación de pago mensual equivalente al ingreso base mensual que no tiene carácter remuneratorio.<p/>
            Durante los diez primeros días, contados a partir del día siguiente de la fecha de primera manifestación invalidante, el pago de la incapacidad laboral temporaria está a cargo del empleador. A partir del día undécimo día está a cargo de la A.R.T.<p/>
            Una vez finalizado el periodo de ILT, si el trabajador presentara secuelas incapacitantes, la ART deberá presentar el trámite ante las Comisiones Medicas SRT a fin de que este organismo determine la incapacidad permanente del accidentado.<p/>

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel26'} onChange={handleChange('panel26')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel26bh-content"
            id="panel26bh-header"
          >
            <Typography className={classes.heading}>¿Cómo calcular el monto a pagar por ILT?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            La prestación dineraria durante una Incapacidad Laboral Temporaria se calcula conforme a las pautas dispuestas por el artículo 208 de la Ley de Contrato de Trabajo N° 20.744 (t.o. 1976) y sus modificatorias, incluye la totalidad de los conceptos que debió percibir el damnificado al momento de la primera manifestación invalidante, sin tener en cuenta el tope máximo de remuneraciones sujetas a aportes que estipula la ley previsional. <p/>
            Si el salario estuviere integrado por remuneraciones variables, se liquidará según el promedio de lo percibido en el último semestre de prestación de servicios. La prestación dineraria se debe ajustar conforme a los aumentos que durante el período de interrupción fueren acordados a los de su misma categoría por aplicación de una norma legal, convención colectiva de trabajo o decisión del empleador.<p/>
            Este tipo de compensación económica se encuentra exenta del Impuesto a las Ganancias.<p/>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel27'} onChange={handleChange('panel27')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel27bh-content"
            id="panel27bh-header"
          >
            <Typography className={classes.heading}>¿Cómo proceder para el reintegro de prestaciones?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Durante el período en que el trabajador se encuentra imposibilitado de prestar servicios a su empleador, percibirá una prestación por Incapacidad Laboral Temporaria (I.L.T.). El pago de los 10 primeros días, a contar desde el día siguiente al de producida la contingencia, estará a cargo del empleador. A partir del décimo segundo día, ART MUTUAL RURAL asume el pago de la misma y de las correspondientes contribuciones patronales.<p/>
            El empleador deberá efectuar los pagos al trabajador de acuerdo a su periodicidad habitual de liquidación y efectuar las correspondientes Contribuciones Patronales y Retenciones. Para solicitar el reintegro, el empleador deberá completar y enviar la documentación detallada en el instructivo de reintegros de ILT que se encuentra publicado en ENLACE REINTREGROS ILT <p/>
            ART MUTUAL RURAL procederá al reintegro de dichas sumas dentro de los treinta (30) días contados a partir de la fecha en que se recibe la documentación completa.<p/>
            La documentación correspondiente se podrá enviar a nuestra casilla MAIL REINTEGROS entregar en nuestra red de sucursales, o enviar por correo a DOMICILIO ART (CABA) C…AAB.<p/>
            Documentación a presentar para percibir el Reintegro:<p/>
            Consideraciones particulares:<p/>
            1.	SAC: La prestación dineraria que se devengue deberá incluir la parte proporcional del SAC. Por lo tanto, ART MUTUAL RURAL incluirá en cada pago el 8,33% del SAC, de la totalidad de los Conceptos Remunerativos. En caso que los haberes NO Remunerativos devenguen SAC, el empleador deberá adjuntar el correspondiente acuerdo salarial.<br/>
            2.	Aumento de Salarios: Con el fin de dar cumplimiento a la normativa, se solicita a la empresa cliente que informe a la aseguradora de los aumentos de salarios que se otorguen a los trabajadores que se encuentren bajo ILT, ya sea por Convenio Colectivo o voluntarios del Empleador. Dicha información puede realizarse mediante nota o mail, adjuntando el correspondiente acuerdo salarial.<br/>
            3.	Plazos de Reintegro: El plazo de reintegro es de 30 días, contados a partir de la fecha en que se recibe la documentación completa. La documentación de reintegros de ILT se puede enviar por e-mail a nuestra casilla    ENLACE MAIL REINTEGROS, entregar en nuestra red de sucursales, o enviar por correo a DOMICILIO ART (CABA) C…AAB <br/>
            Ante cualquier consulta, se podrá contactar con nuestro Centro de Atención al Cliente, llamando en forma gratuita al 0800-ATENCIÓN AL CLIENTE, o por e-mail a e-mail atención al cliente 

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel28'} onChange={handleChange('panel28')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel28bh-content"
            id="panel28bh-header"
          >
            <Typography className={classes.heading}>¿Se puede solicitar Pago directo al trabajador en concepto de Incapacidad Laboral Temporaria?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Sí. Cuando un trabajador se encuentre en período de Incapacidad Laboral Temporaria, y se produzca su desvinculación laboral, el empleador/trabajador podrá solicitar a ART MUTUAL RURAL el Pago Directo al Beneficiario presentando la siguiente documentación:<p/>
            <ul>
              <li>Carta solicitando pago directo con datos del siniestro: Datos de trabajador, N° de caso, fecha de ocurrencia.</li>
              <li>Telegrama de despido o renuncia.</li>
              <li>Copia de los recibos de sueldo de los 6 meses anteriores al mes del accidente, y recibo de liquidación final. En caso de que el siniestro haya ocurrido el mismo mes de inicio de la relación laboral o el accidentado tenga menos de 6 meses de antigüedad, deberá adjuntar el recibo de del mes del accidente.</li>
              <li>Si el trabajados realiza trabajos de temporada o eventuales deberá presentar recibo de ajuste de producción y un detalle donde quede perfectamente detallado inicio y fin del periodo de trabajo en donde ocurrió el accidente.</li>
              <li>Comprobante de CBU del trabajador para el depósito en cuenta.</li>
            </ul>
            En los casos que el damnificado haya perdido el vínculo laboral con el empleador por cualquier causa, para los aumentos se deben tener en cuenta los incrementos que se estipulen semestralmente para los topes mínimos y máximos previsionales (ajuste SIPA).

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel29'} onChange={handleChange('panel29')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel29bh-content"
            id="panel29bh-header"
          >
            <Typography className={classes.heading}>¿Cuándo existe una Incapacidad Laboral Permanente?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Cuando el daño sufrido por el trabajador le ocasiona una disminución de su capacidad laboral en forma permanente. Finalizada la etapa de incapacidad laboral temporaria, ya sea por otorgamiento de Alta Médica con incapacidad o por cumplimiento del plazo de ILT para un caso que pudiera finalizar con incapacidad (1 año máximo para casos cuya primera manifestación invalidante sea anterior al 26/10/2012 o 2 años máximo para casos cuya primera manifestación invalidante sea 26/10/2012 y posteriores), se procederá a la presentación del caso ante las Comisiones Medicas de la SRT, único organismo facultado para determinar el porcentaje de disminución de la incapacidad laboral.<p/>
            De considerar las Comisiones Medicas que el accidentado posee una Incapacidad Laboral Permanente Definitiva, emitirá un dictamen para el accidentado y otro para la ART, que tendrá 15 días (hábiles para casos cuya (PMI) ocurriera con anterioridad a la entrada en vigencia de la Nueva Ley 26773 / corridos para casos cuya (PMI) ocurriera con posterioridad a la entrada en vigencia de la Nueva Ley 26773) para poner a disposición y abonar el dictamen a favor del accidentado.<p/>

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel30'} onChange={handleChange('panel30')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel30bh-content"
            id="panel30bh-header"
          >
            <Typography className={classes.heading}>¿Qué es la Incapacidad Laboral Permanente Provisoria?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            En los casos cuya Primera Manifestación Invalidante (PMI) ocurriera con anterioridad a la entrada en vigencia de la Nueva Ley 26773 (modificatoria de la Ley 24.557), al momento de ser evaluado el accidentado en los términos del punto anterior, si la SRT considerara que es posible una mejoría a favor del accidentado a través de tratamiento médico, podrá otorgar Incapacidad Permanente Parcial Provisoria que durará 36 meses para las incapacidades parciales (plazo extensible por la SRT a 60 meses al momento de finalización del plazo) o de 60 meses para las incapacidades totales.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel31'} onChange={handleChange('panel31')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel31bh-content"
            id="panel31bh-header"
          >
            <Typography className={classes.heading}>¿Qué es la Gran Invalidez?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Se considera que un trabajador está en situación de Gran Invalidez cuando tiene una Incapacidad Laboral Permanente Total y necesita la asistencia continua de otra persona para realizar los actos elementales de la vida.<p/>
            La Ley N° 26773, establece  que independientemente de la fecha de la PMI, los damnificados deben percibir en forma mensual la suma de $2.000 (Decreto N°1694/09), actualizada en la misma proporción en que lo sean las prestaciones del Sistema Integrado Previsional Argentino (SIPA), de acuerdo a lo dispuesto en el artículo 32 de la Ley N°24.241, modificado por su similar N° 26.417.

            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel 
          /*expanded={expanded === 'panel32'} onChange={handleChange('panel32')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel32bh-content"
            id="panel32bh-header"
          >
            <Typography className={classes.heading}>¿Qué documentación es obligatoria para el pago de la prestación dineraria?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            Obligación del Empleador:<p/>
            <ul>
              <li>Certificación de Remuneraciones debidamente certificada. Si el accidentado tuviera antigüedad mayor al año: recibos de sueldo de los 12 meses anteriores a la fecha del siniestro (en los casos de trabajadores sujetos a variables por producción deberá presentar el recibo de ajuste de producción del periodo trabajado en que ocurriera el siniestro). Si el accidentado tuviera antigüedad menor al año: recibos de sueldo de los meses trabajados incluyendo el mes del siniestro (en los casos de trabajadores sujetos a variables por producción deberá presentar el recibo de ajuste de producción del periodo trabajado en que ocurriera el siniestro).</li>
            </ul>
            Obligación de los Derechohabientes:<p/>
            A los efectos de acreditar la calidad de derechohabientes conforme lo establecido en el Art. 53 de la ley 24.241 y sus decretos reglamentarios, deberá remitir a ésta aseguradora la siguiente documentación:<p/>
            <ul>
              <li>Fotocopia legalizada de 1° y 2° hoja del DNI de esposa/o o concubina/o;</li>
              <li>Fotocopia legalizada de Partida de nacimiento y fotocopia legalizada de 1° y 2° hoja de DNI correspondiente a los hijos menores de 21 años; y/o menores de 25 años a cargo exclusivo del trabajador fallecido;</li>
              <li>Fotocopia legalizada del Acta de Matrimonio emitida por registro civil con fecha posterior al fallecimiento o sentencia sumaria (civil) que acredite el concubinato;</li>
              <li>Constancia de alumno regular emitido por organismo oficial reconocido por autoridad competente; en caso de hijos mayores de 21 años y menores de 25 años, los cuales fueran estudiantes a cargo exclusivo del trabajador fallecido.</li>
              <li>Fotocopia de los recibos de sueldo correspondientes a los últimos 12 meses o del período trabajado en caso de ser menor.</li>
              <li>Fotocopia legalizada de la partida de defunción.</li>
              <li> Factura y/o recibo original que acredite el pago de los gastos de sepelio, para su posterior reintegro.</li>
            </ul> 

            En caso que los derechohabientes fueran los padres del trabajador fallecido, deberán remitir fotocopia legalizada de la siguiente documentación:<p/>
            <ul>
            	<li>Partida de nacimiento del trabajador fallecido;</li>
            	<li>Acta de matrimonio de los padres y 1° y 2° hoja del DNI de cada uno de los progenitores;</li>
            	<li>Partida de defunción;</li>
            </ul>
            En caso que el solicitante invoque que se encontraba a cargo del trabajador fallecido deberá presentar "Información Sumaria Judicial" la cual obligatoriamente deberá darse intervención a la ANSES y demás terceros interesados, que acredite la escasez o carencia de recursos personales y que la falta de contribución importa un desequilibrio esencial en su economía particular.<p/>
              <ul>
            	<li>Certificado de supervivencia de los derechohabientes.</li>
              </ul>
            La copia de la documentación que debe presentar el derechohabiente deberá estar certificada por autoridad competente, Juez de Paz o Escribano Público (en este último caso la firma del escribano deberá además estar certificada por el Colegio de Escribanos).<p/>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel 
          /*expanded={expanded === 'panel33'} onChange={handleChange('panel33')}*/>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon 
            style={{color: 'orange'}} />}
            style={{'border-bottom': 'solid','border-bottom-color': 'orange'}}
            aria-controls="panel33bh-content"
            id="panel33bh-header"
          >
            <Typography className={classes.heading}>¿Cuáles son las características del servicio de sepelio?</Typography>
            {/*<Typography className={classes.secondaryHeading}></Typography>*/}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.desc}>
            <Typography className={classes.desc} color="textSecondary">
            ART MUTUAL RURAL brinda el servicio en forma directa por intermedio de sus prestadores o bien actúa por reintegro. <p/>
            El monto del reintegro se ajustará a los límites determinados por la normativa vigente y se hará efectivo una vez recibidos los comprobantes correspondientes. Resolución SRT 1195/04 Art. 8°. En aquellos casos en que la aseguradora o el empleador autoasegurado no se hubiera responsabilizado de los trámites y costos del servicio funerario y el gasto hubiera sido cubierto por algún sistema que implique el pago adelantado, por parte del fallecido o el grupo familiar, de sumas para la previsión de esta eventualidad, la aseguradora o el empleador autoasegurado procederán a poner a disposición de los derechohabientes, la suma de DIECINUEVE (19) MOPRES. Una vez determinada la naturaleza laboral del siniestro y finalizada la verificación de las condiciones exigidas por la normativa vigente, esta aseguradora iniciará el trámite de liquidación de la prestación pertinente.<p/>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      </Fragment>
    );
  }
