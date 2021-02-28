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
const Finance = () => {
    const classes = useStyles();
    return (
        <div className="Finance" style={{margin:"100px 0"}}>
            <About />
            <div className="services">
                <h1 className="gr">Платные образовательные услуги</h1>
                <br/>
            </div>
            <div className="contracts">
                <h2>Договоры</h2>
                <div className={classes.root}>
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}><DescriptionIcon /> Договор об условиях и порядке обучения в Кыргызско-Российской академии образования  </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <a href="https://drive.google.com/file/d/1RcoM4V-NglIbHB8s8_kUDBNFhimljP-2/view?usp=sharing">
                                    Образец договора об условиях и порядке обучения в Кыргызско-Российской академии образования
                                </a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div className="Price-list">
                <h2>Стоимость обучения</h2>
                <div className={classes.root}>
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}><DescriptionIcon /> Прейскурант  </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <a href="https://drive.google.com/file/d/1KzHMOUVYaisAtFWF0CWHQIHPD3m7aYUW/view?usp=sharing">
                                    Прейскуранты
                                </a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Finance;