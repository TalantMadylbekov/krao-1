import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import DescriptionIcon from '@material-ui/icons/Description';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
const Courses = () => {
    const classes = useStyles();
    return (
        <div className="Finance">
            <div className="services">
                <h1>Курсы </h1>
                <br/>
            </div>
            <div className="contracts">
                <h2>Курсы дополнительного образования" </h2>
                <div className={classes.root}>
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}><DescriptionIcon /> Лицензия   </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <a href="https://drive.google.com/file/d/1Tnpvr2T30W0KzY092tFl0Fbgf_TVgk81/view?usp=sharing">
                                    Лицензия дополнительного образования"
                                </a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Courses;