import React from 'react';
import '../css/education.css'
import { Icon } from 'react-icons-kit'
import {fileText2} from 'react-icons-kit/icomoon/fileText2'
import {filePdf} from 'react-icons-kit/icomoon/filePdf'
import {makeStyles} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
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
export default function SimpleAccordion() {
    const classes = useStyles();

    return (
        <div className="wrap">
            <About />
            <h1 className="gr">Образование</h1>
            <table className="table">
                <caption className="info"><h3>Информация об уровне образования, формах обучения,
                    нормативном сроке обучения, о сроке действия
                    государственной аккредитации образовательной программы
                    (при наличии государственной аккредитации),
                    о языках, на которых осуществляется образование (обучение)</h3></caption>

                <tr>
                    <th rowSpan="2">Код</th>
                    <th rowSpan="2">Наименование</th>
                    <th rowSpan="2">Уровень образования</th>
                    <th rowSpan="2">Языки, на которых осуществляется образование (обучение)</th>
                    <th colSpan="3">Нормативный срок обучения (форма обучения)</th>
                    <th rowSpan="2">link</th>
                </tr>

                <tr className="th" >
                    <td >очная</td>
                    <td >очно-заочная</td>
                    <td >заочная</td>
                </tr>
                <tr>
                    <td>09.03.03</td>
                    <td>Прикладная информатика</td>
                    <td>Высшее образование - бакалавриат</td>
                    <td>Русский язык</td>
                    <td>4 года</td>
                    <td>5 лет</td>
                    <td></td>
                    <td><a href="https://drive.google.com/drive/folders/1qj19U6GwvV5fUCYkYccKnqIm7WdtPLbM?usp=sharing"><Icon size={32} icon={fileText2} /></a></td>
                </tr>
                <tr >
                    <td>37.03.01</td>
                    <td>Психология</td>
                    <td>Высшее образование - бакалавриат</td>
                    <td>Русский язык</td>
                    <td>4 года</td>
                    <td>5 лет</td>
                    <td></td>
                    <td><a href="https://drive.google.com/drive/folders/1ZHVqoyHL_TpiBfiRzXVj-eOH-wnvkZ8E?usp=sharing"><Icon size={32} icon={fileText2} /></a></td>
                </tr>
                <tr >
                    <td>38.03.01</td>
                    <td>Экономика</td>
                    <td>Высшее образование - бакалавриат</td>
                    <td>Русский язык</td>
                    <td>4 года</td>
                    <td>5 лет</td>
                    <td></td>
                    <td><a href="https://drive.google.com/drive/folders/1pNn12BZOBLM-wubYYvBWCOJ-evZbRwpy?usp=sharing"><Icon size={32} icon={fileText2} /></a></td>
                </tr>
                <tr >
                    <td>38.03.04</td>
                    <td>Государственное и муниципальное управлениее</td>
                    <td>Высшее образование - бакалавриат</td>
                    <td>Русский язык</td>
                    <td>4 года</td>
                    <td>5 лет</td>
                    <td></td>
                    <td><a href="https://drive.google.com/drive/folders/1iQbUjEEvKeG_XZ8m8Y0wygXcjUWSI1L3?usp=sharing"><Icon size={32} icon={fileText2} /></a></td>
                </tr>
            </table>
            <div className ="license">Лицензия на осуществления деятельности <a href="https://drive.google.com/file/d/1iBfLfcKyLaPgNl4FLBG3i3xJ-ZPP0LQ-/view?usp=sharing"><Icon size={32} icon={fileText2} /></a></div>
            <div className={classes.root}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}><h2>Обоазовательные стандарты</h2></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <div>
                            <div>
                                <a href="https://drive.google.com/file/d/1y-LKRKBM-gN8TdqgHNK3BI_qIAzk_3kH/view?usp=sharing">
                                    <div style={{ color: '#861e24' }}>
                                        <Icon size={32} icon={filePdf}/>
                                        Прикладная информатика
                                    </div>
                                </a>
                            </div>
                            <div>
                            <a href="https://drive.google.com/file/d/19hKwAI6Mr0-SnLKj4y-zEqr926YnRB0r/view?usp=sharing">

                                <div style={{ color: '#861e24' }}>
                                    <Icon size={32} icon={filePdf}/>
                                    Психология
                                </div>
                            </a>
                            </div>
                            <div>
                            <a href="https://drive.google.com/file/d/1JHi9B3OtOhKb2f5GsF4H2NVIdqh6g24e/view?usp=sharing">
                                <div style={{ color: '#861e24' }}>
                                    <Icon size={32} icon={filePdf}/>
                                    Экономика
                                </div>
                            </a>
                            </div>
                            <div>
                            <a href="https://drive.google.com/file/d/1Vpr7PcFi8NB1f4FY__Fgg3H4GXItDy6E/view?usp=sharing">
                                <div style={{ color: '#861e24' }}>
                                    <Icon size={32} icon={filePdf}/>
                                    Государственное и муниципальное управление
                                </div>
                            </a>
                            </div>
                            </div>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>

    );
};
