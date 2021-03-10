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
const Drivingschool = () => {
    const classes = useStyles();
    return (
        <div className="Finance">
            <div className="services">
                <h1>Автошкола</h1>
                <br/>
            </div>
            <div className="contracts">
                <h2>Устав автошколы "Чистая дорога" </h2>
                <div className={classes.root}>
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}><DescriptionIcon /> Устав  </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <a href="https://drive.google.com/file/d/1niEBON_x15Ju-qXV1nToitmIIU73W-Oo/view?usp=sharing">
                                    Устав автошколы "Чистая дорога"
                                </a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div className="Price-list">
                <h2>Положение автошколы "Чистая дорога"</h2>
                <div className={classes.root}>
                    <Accordion>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}><DescriptionIcon /> Положение  </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <a href="https://drive.google.com/file/d/1yIN7QliNBGpiAm4GpH4jgmKNxAk9kkHr/view?usp=sharing">
                                    Положение об организации учебного процесса по подготовке водителеймеханических транспортных средств категории "В" и "В и С" в автошколе ОсОО "Чистая дорога"
                                </a>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="Price-list">
                    <h2>Лицензия автошколы "Чистая дорога"</h2>
                    <div className={classes.root}>
                        <Accordion>
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><DescriptionIcon /> Лицензия  </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <a href="https://drive.google.com/file/d/1HftNW_3eKpAUo8fBRHSxgcDHHaCDW7Kz/view?usp=sharing">
                                        Лицензия автошколы "Чистая дорога"
                                    </a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drivingschool;