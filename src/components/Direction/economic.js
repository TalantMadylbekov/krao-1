import React from 'react';
import imgblock1 from "../images/direction_images/Экономика/5c7fe3b4-ac43-4834-a195-0068d1576994.jpeg"
import imgblock3 from "../images/direction_images/Экономика/Студенты кафедры.jpg"
import imgblock4 from "../images/direction_images/Экономика/IMG_7413.jpg"
import imgblock5 from "../images/direction_images/Экономика/db826162dae7482df3017c1e7d910836.jpg"
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

import jiydegul from '../images/direction_images/Экономика/Арпачиева Жийдегуль Шаршенбековна, преподаватель.jpg'
import aike from '../images/direction_images/Экономика/Асанкожоева Айке Амангельдиевна, ст.преподаватель.jpg'
import aisalkin from '../images/direction_images/Экономика/Асанова Айсалкын Асановна д.э.н., профессор.jpg'
import emilia from '../images/direction_images/Экономика/Назарбекова Эмилия Умбетовна К.э.н., и.о.  доцента.jpg'
import jildiz from '../images/direction_images/Экономика/Джылкычиева Жылдыз Сапарбековна к.э.н., доцент.jpg'
import mavluda from '../images/direction_images/Экономика/Рахматова  Мавлюда Убайдуллаевна К.э.н., доцент.jpg'
import melis from '../images/direction_images/Экономика/Тургунбаев Мелис Жусупжанович д.э.н. профессор.jpg'
import saltanat from '../images/direction_images/Экономика/Омурова Салтанат Каировна д.э.н., профессор.jpg'
import ularbek from '../images/direction_images/Экономика/Сыдыкбеков  Уларбек  Каныбекович Преподаватель.jpg'
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



const Economic = () => {

    const classes = useStyles()

    return (
        <div className="container">
            <div className="wrapper">
                <div className="econom-block-1">
                    <h1 className="font">Кафедра экономики и менеджмента</h1>
                    <img
                        className="img-block1"
                        src={imgblock1}
                        alt="тут должна была быть картина
                "/>
                </div>
                <div className="econom-block-2">
                    <p> Кафедра экономики как самостоятельная выпускающая кафедра была образована в 1997 г. <br/>
                        Деятельность кафедры проводится согласно «Закону об Образовании» КР, Уставу КРАО, и положению о кафедре. <br/>
                        Цель кафедры: <br/>
                        <ul>
                            <li>
                                осуществление подготовки высококвалифицированных и конкурентоспособных на рынке труда специалистов в области экономики с удовлетворением их потребностей в интеллектуальном, культурном и нравственном развитии.

                            </li>
                        </ul>
                        Основные задачи кафедры «Экономики»: <br/>
                        <ul>
                            <li>
                                подготовка компетентных специалистов, способных творчески мыслить, принимать эффективные решения в сложившихся экономических условиях;
                            </li>
                            <li>
                                воспитание у студентов лидерских качеств, потребности в постоянном обновлении знаний, способствование их формированию как социально-активных, высококультурных и гармонично развитых личностей;
                            </li>
                            <li>
                                формирование исследовательской среды среди преподавателей и студентов, стимулирование интереса к науке и исследованиям, популяризация науки.
                            </li>
                        </ul>
                        Подготовка выпускников осуществляется на основе следующих принципов: <br/>
                        <ul>
                            <li>
                                направленность на многоуровневую систему образования;
                            </li>
                            <li>
                                изменение социальных и ролевых функций преподавателя и обучающихся при компетентном подходе;
                            </li>
                            <li>
                                использование кредитно-рейтинговой системы для оценки уровня компетенций;
                            </li>
                            <li>
                                формирование готовности выпускников вуза к активной профессиональной и социальной деятельности;
                            </li>
                        </ul>
                        Ежегодно кафедра осуществляет выпуск специалистов по направлению 521603 — «Финансы и кредит» по специальности «Экономист» со специализацией: «Банковское дело», «Оценка собственности» и «Налоговые расследования».<br/>
                        Основной целью является обучение и подготовка кадров по данной специальности на современном высоком профессиональном уровне.<br/>
                        Преподаватели, работающие на кафедре, прошли переподготовку по американской программе повышения квалификации преподавателей по экономическим и бизнес дисциплинам в Академии образовательной ресурсной сети EDNET в рамках программы USAID.
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
                <h2 style={{ color: "#5889c4"}}>Кафедра экономики и менеджмента</h2>
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
                                Арпачиева Жийдегуль Шаршенбековна, преподаватель
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
                                Асанкожоева Айке Амангельдиевна, ст.преподаватель
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

                                Асанова Айсалкын Асановна д.э.н., профессор

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
                                Джылкычиева Жылдыз Сапарбековна к.э.н., доцент
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
                                Назарбекова Эмилия Умбетовна К.э.н., и.о.  доцента
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
                                   image={saltanat}
                                   title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Омурова Салтанат Каировна д.э.н., профессор
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
                                Рахматова  Мавлюда Убайдуллаевна К.э.н., доцент
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
                                   image={ularbek}
                                   title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Сыдыкбеков  Уларбек  Каныбекович Преподаватель
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
                                Тургунбаев Мелис Жусупжанович д.э.н. профессор
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
};

export default Economic