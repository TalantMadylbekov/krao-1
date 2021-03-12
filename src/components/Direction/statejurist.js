import React from 'react';

import imgblock1 from "../images/direction_images/Юристпруденция/gossluzba2.jpg"
import imgblock3 from "../images/direction_images/Юристпруденция/Наши выпускники.JPG"
import imgblock4 from "../images/direction_images/Юристпруденция/заседание кафедры.jpg"
import imgblock5 from "../images/direction_images/Юристпруденция/Учебный судебный процесс.jpg"
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

import jiydegul from '../images/direction_images/Юристпруденция/Наралиева Динара Баисбековна Заведующая кафедрой, и.о.доцента.jpg'
import aike from '../images/direction_images/Юристпруденция/Базарбаева Венера Кадыракуновна. И.о. доцента.jpg'
import aisalkin from '../images/direction_images/Юристпруденция/Бикбулатова Аниса Рифовна Доктор исторических наук, и.о. профессора .jpg'
import emilia from '../images/direction_images/Юристпруденция/Гуронов Осмоналы Ниязович  Кандидат юридических наук,  и.о.профессора.jpg'
import jildiz from '../images/direction_images/Юристпруденция/Иманбердиев Досалы Чойбекович  Доктор наук государственного управления   .jpg'
import mavluda from '../images/direction_images/Юристпруденция/Кулматова Венера Шаарпековна Кандидат юридических наук, доцент.jpg'
import melis from '../images/direction_images/Юристпруденция/Сатимкулов Убайдулла Акилбекович  Кандидат юридических наук,доцента.jpg'

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


const Statejurist = () => {

    const classes = useStyles()

    return (
        <div className="container">
            <div className="wrapper">
                <div className="econom-block-1">
                    <h1 className="font">Кафедра государственного и муниципального <br/> управления и юриспруденции</h1>
                    <img
                        className="img-block1"
                        src={imgblock1}
                        alt="тут должна была быть картина
                "/>
                </div>
                <div className="econom-block-2">
                    <p>Кафедра Государственного и муниципального управления и юриспруденции была образована в 1997 году и является структурным подразделением Кыргызско-Российской академии образования, осуществляющим учебную, учебно-методическую и научно-исследовательскую деятельность, внеучебную работу среди студентов,. по двум направлениям подготовки: «Государственное и муниципальное управление» и «Юриспруденция» в соответствии с нормативно-правовыми актами Кыргызской Республики
                        <br/>

                        Основной целью деятельности кафедры является удовлетворение потребностей личности в интеллектуальном, культурном и нравственном развитии посредством получения высшего, послевузовского профессионального образования.
                        <br/>

                        Основной задачей кафедры является акцентированная фундаментальная направленность в подготовке профессиональных кадров по направлениям. В сочетании с базовым набором дисциплин по направлениям подготовки,  также  обучающиеся в процессе обучения осваивают знания и навыки работы с информационными, языковыми, управленческими, правовыми технологиями, что соответствует  государственным компетентным требованиям к нашим выпускникам. Наши выпускники занимают особое место на рынке труда, в целом реализуют свой профессиональный потенциал на службе в государственных органах, частных компаниях и других сферах государственной и правовой деятельности. <br/>
                        Кафедра активно сотрудничаем с организациями и работодателями различного уровня, от государственных и муниципальных органов власти до частных коммерческих предприятий, на которых наши студенты постоянно проходят практику. Реализуя академическую свободу, кафедра ведет работу в постоянном взаимодействии с другими вузами не только Кыргызстана, но и России, Казахстана, Армении, Японии и др. <br/>
                        Кафедра участвует в научных мероприятиях Академии, а также самостоятельно проводит конференции, семинары, круглые столы, открытые лекции. Нашими гостями с открытыми лекциями, часто становятся представители Жогорку Кенеша, государственных, региональных и муниципальных органов власти, известные юристы и бизнесмены, представители шоу-бизнеса и др. <br/>
                        Кафедра обеспечена высококвалифицированным профессорско-преподавательским составом, среди которых, известные, заслуженные фундаментальные ученые, государственные служащие, практикующие специалисты в системе ГиМУ и юриспруденции, передающие свой практический опыт студентам.
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
                <h2 style={{ color: "#5889c4"}}>Кафедра государственного и муниципального управления и юриспруденции</h2>
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
                                Наралиева Динара Баисбековна Заведующая кафедрой, и.о.доцента
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
                                Базарбаева Венера Кадыракуновна. И.о. доцента
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

                                Бикбулатова Аниса Рифовна Доктор исторических наук, и.о

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
                                Иманбердиев Досалы Чойбекович  Доктор наук государственного управления
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
                                Гуронов Осмоналы Ниязович  Кандидат юридических наук,  и.о.профессора
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
                                Кулматова Венера Шаарпековна Кандидат юридических наук, доцент
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
                                   image={melis}
                                   title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Сатимкулов Убайдулла Акилбекович  Кандидат юридических наук,доцента
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
};

export default Statejurist