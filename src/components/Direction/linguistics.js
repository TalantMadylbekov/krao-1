import React from 'react';

import imgblock1 from "../images/direction_images/Лингвистика/C1D9AC823914A4DADA002A3400ECB34B.png"
import imgblock3 from "../images/direction_images/Лингвистика/1034162672.jpg"
import imgblock4 from "../images/direction_images/Лингвистика/IMG_9195.jpg"
import imgblock5 from "../images/direction_images/Лингвистика/DSC_1107.jpg"
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from "@material-ui/core";

import jiydegul from '../images/direction_images/Лингвистика/Кыркбаева Гулмайрам Надырбековна Кандидат филологических наук, заведующая кафедрой.jpg'
import aike from '../images/direction_images/Лингвистика/Десятова Екатерина Александровна Старший преподаватель.jpg'
import aisalkin from '../images/direction_images/Лингвистика/Кашкарбаева Бегай Тобокеловна  Старший преподаватель(2).jpg'
import emilia from '../images/direction_images/Лингвистика/Сатынбаева Динара Сатынбаевна Преподаватель.jpeg'
import jildiz from '../images/direction_images/Лингвистика/Тургунова Нурзада Алтынбековна  Преподаватель.JPG'
import mavluda from '../images/direction_images/Лингвистика/Щус Анастасия Анатольевна Преподаватель.jpg'

import "../Direction/css/chairs.css"



const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        margin:"50px",
        fontSize:"25px",
        border: "1px solid #5889C4",


    },
    media: {
        objectFit:"contain"
    }


});


const Linguistics  = () => {

    const classes = useStyles()

    return (
        <div className="container">
            <div className="wrapper">
                <div className="econom-block-1">
                    <h1 className="font">Лингвистика и государственный язык</h1>
                    <img
                        className="img-block1"
                        src={imgblock1}
                        alt="тут должна была быть картина
                "/>
                </div>
                <div className="econom-block-2">
                    <p>
                        Кафедра лингвистики является структурным подразделением Кыргызско-Российской академии образования, основана в 2009 году и является одной из ведущих  кафедр. <br/>
                        Подготовка специалистов осуществляется на основании предусмотренной  ГОС высшего профессионального образования Кыргызской Республики. <br/>
                        При организации учебного процесса по подготовке специалистов кафедра «Лингвистика»  руководствуется законодательством, нормативными актами Министерства образования и науки  Кыргызской Республики, решениями Ученого Совета и внутренними нормативно- правовыми документами. <br/>
                        Целью создания кафедры является подготовка высококвалифицированных специалистов-лингвистов. Направление «Лингвистика» готовит специалистов в сфере межъязыковой и культурной коммуникации различных профессиональных сфер. Кроме основных лингвистических дисциплин, с которыми можно ознакомиться в соответствующих направлениях подготовки, предусматривает обязательное изучение двух иностранных языков: английского и китайского. По окончании полного курса обучения выпускнику выдается диплом установленного Министерством образования и науки образца с присвоением соответствующей квалификации. <br/>
                        Кроме учебного процесса сотрудники кафедры и студенты заняты научно-исследовательской и научно-организационной работой. Они проводят конференции и круглые столы, организуют летние школы, ездят в лингвистические экспедиции, пишут монографии и учебники, издают журнал, проводят олимпиады и другие лингвистические конкурсы, участвуют в различных научных проектах, проводят лингвистическую экспертизу, разрабатывают новые языковые информационные  технологии. <br/>
                        На кафедра «Лингвистика» работает профессиональный преподавательский состав , включая теоретических и практических языковедов различных сферах деятельности, что свою очередь повышает уровень качества преподаваемых лингвистических дисциплин. <br/>
                        Область профессиональной деятельности <br/>
                        Это направление не просто  является одним из самых популярных среди абитуриентов. Оно во все времена остается актуальным. Ведь подобные специалисты нужны в государственных органах, туристических компаниях, отелях, ресторанах, СМИ, издательствах, бюро переводов, учебных заведениях.
                        Кем работают такие профессионалы: <br/>
                        Это направление не просто  является одним из самых популярных среди абитуриентов. Оно во все времена остается актуальным. Ведь подобные специалисты нужны в государственных органах, туристических компаниях, отелях, ресторанах, СМИ, издательствах, бюро переводов, учебных заведениях.
                        Кем работают такие профессионалы: <br/>
                        <ul>
                            <li>
                                переводчиками разного направления;
                            </li>
                            <li>
                                лингвистами;
                            </li>
                            <li>
                                референтами;
                            </li>
                            <li>
                                сопровождающими иностранных туристов на экскурсиях;
                            </li>
                            <li>
                                организаторами проектов в сфере переводческой деятельности и межкультурного общения;
                            </li>
                            <li>
                                руководителями бюро переводов;
                            </li>
                            <li>
                                менеджерами по внешним связям;
                            </li>
                            <li>
                                руководителями отделов по работе с иностранными клиентами.
                            </li>
                        </ul>
                        На кафедре «Лингвистика» работает профессиональный преподавательский состав, включая теоретических и практических языковедов различных сферах деятельности, что свою очередь повышает уровень качества преподаваемых лингвистических дисциплин.
                    </p>
                </div>
                <div className="econom-block-3">
                    <div className="part1-3">
                        <h1>ВЫПУСКНИК</h1>
                        <h2>Оставаться на связи</h2>
                        <p>Выпускники могут оставаться на связи, посещая общественные мероприятия и встречи, присоединяясь к нам в социальных сетях и читая нашу электронную новостную рассылку для выпускников.
                        </p>
                    </div>
                    <div className="part2-3">
                        <img
                            className="img-block3"
                            src={imgblock3}
                            alt="тут должна была быть картина
                        "/>
                    </div>
                </div>
                <div className="econom-block-4">
                    <div className="part2-4">
                        <img
                            className="img-block4"
                            src={imgblock4}
                            alt="тут должна была быть картина
                        "/>
                    </div>
                    <div className="part1-4">
                        <h1>РОДИТЕЛИ И УЧИТЕЛЯ</h1>
                        <h2>Ассоциация родителей, учителей и друзей</h2>
                        <p>Мы заинтересованная, дружелюбная и инновационная организация, активно вовлеченная в Академическое сообщество.
                        </p>
                    </div>
                </div>
                <div className="econom-block-5">
                    <div className="part1-5">
                        <h1>ПРЕДОСТАВЛЕНИЕ</h1>
                        <h2>Мечтайте о больших мечтах для наших студентов</h2>
                        <p>Ваша поддержка может вывести нас за рамки того, что мы можем
                        </p>
                    </div>
                    <div className="part2-5">
                        <img
                            className="img-block5"
                            src={imgblock5}
                            alt="тут должна была быть картина
                        "/>
                    </div>
                </div>
            </div>
            <div className="preFounder  animate__animated animate__fadeInUp  wow">
                <h2 style={{ color: "#5889c4"}}>Кафедра лингвистики и государственного языка</h2>
                <h3 style={{ color: "#5889c4"}}>Научно-преподавательский состав</h3>
            </div>
            <div className="founder  animate__animated animate__fadeInUp  wow">
                <Card className={classes.root} >
                    <CardActionArea>
                        <CardMedia className={classes.media}
                                   component="img"
                                   alt="Contemplative Reptile"
                                   height="400"
                                   image={jiydegul}
                                   title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Кыркбаева Гулмайрам Надырбековна Кандидат филологических наук, заведующая кафедрой
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media}
                                   component="img"
                                   alt="Contemplative Reptile"
                                   height="400"
                                   image={aike}
                                   title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Десятова Екатерина Александровна Старший преподаватель
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media}
                                   component="img"
                                   alt="Contemplative Reptile"
                                   height="350"
                                   image={aisalkin}
                                   title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">

                                Кашкарбаева Бегай Тобокеловна  Старший преподаватель(2)

                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media}
                                   component="img"
                                   alt="Contemplative Reptile"
                                   height="400"
                                   image={jildiz}
                                   title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Тургунова Нурзада Алтынбековна  Преподаватель
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media}
                                   component="img"
                                   alt="Contemplative Reptile"
                                   height="400"
                                   image={emilia}
                                   title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Сатынбаева Динара Сатынбаевна Преподаватель
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia className={classes.media}
                                   component="img"
                                   alt="Contemplative Reptile"
                                   height="400"
                                   image={mavluda}
                                   title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Щус Анастасия Анатольевна Преподаватель
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
};

export default Linguistics