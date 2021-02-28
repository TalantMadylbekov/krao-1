import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import DescriptionIcon from '@material-ui/icons/Description';
import "../css/about.css"
import About from "./about";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const Finance2 = () => {
    const classes = useStyles();
    return (
        <div className="Finance2">
            <About />
            <div className="services">
                <h1 className="gr">Финансово-хозяйственная деятельность</h1>
                <br/>
            </div>
            <div className="Info" style={{margin:"100px 0"}}>
                <h2>Реквизиты для оплаты</h2>
                <div className={classes.root}>
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}><DescriptionIcon /> Реквизиты  </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <a href="https://drive.google.com/file/d/1T1sQEoovi5f0jdeRxKKWVuHPVBU-0Fmi/view?usp=sharing">
                                    Реквизиты для оплаты
                                </a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Finance2;