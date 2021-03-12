import React from 'react';

import imgblock1 from "../images/direction_images/Психология/Last-Piece1.jpg"
import imgblock3 from "../images/direction_images/Психология/DSC_0002.JPG"
import imgblock4 from "../images/direction_images/Психология/photo_2021-02-19_14-18-50.jpg"
import imgblock5 from "../images/direction_images/Психология/IMG_20200911_133716.jpg"
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

import jiydegul from '../images/direction_images/Психология/Ноздрачева Татьяна Владимировна заведующая кафедрой.jpg'
import aike from '../images/direction_images/Психология/Шакеева Чынара Асановна, доктор психологических наук, профессор.jpg'
import aisalkin from '../images/direction_images/Психология/Мамырова Мээрим Ишенбековна, кандидат педагогических наук, и.о. доцент кафедры.jpg'
import emilia from '../images/direction_images/Психология/Шумская Наталья Адыловна, кандидат психологических наук, и.о. доцент кафедры.png'
import jildiz from '../images/direction_images/Психология/Ким Наталья Игоревна старший преподаватель кафедры.jpg'
import mavluda from '../images/direction_images/Психология/Петровская Надежда Александровна, старший преподаватель кафедры.jpg'
import melis from '../images/direction_images/Психология/Пукаев Виталий Владимирович старший преподаватель кафедры.jpg'
import saltanat from '../images/direction_images/Психология/Трапезников Артем Викторович, преподаватель кафедры.jpg'

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



const Psychology = () => {

    const classes = useStyles()

    return (
        <div className="container">
            <div className="wrapper">
                <div className="econom-block-1">
                    <h1 className="font">Кафедра психологии и педагогических дисциплин</h1>
                    <img
                        className="img-block1"
                        src={imgblock1}
                        alt="тут должна была быть картина
                "/>
                </div>
                <div className="econom-block-2">
                    <p>В 1997 году была открыта кафедра Психологии, осуществляющая подготовку специалистов для получения диплома «Психолог, преподаватель психологии» <br/>
                        С 2011 года кафедра перешла на систему двухступенчатого образования – «бакалавр психологии». <br/>
                        Целью создания кафедры является подготовка специалистов с базовым психологическим образованием, что дает глубокие, систематизированные знания по общей, социальной, возрастной и семейной психологии. C первого курса студенты приступают к практической деятельности, выполнению лабораторных работ и диагностических тестов. <br/>
                        Среди выпускников кафедры: <br/>
                        <ul>
                            <li>
                                психологи в правоохранительных органах КР и РФ;
                            </li>
                            <li>
                                преподаватели и администрация структурных подразделений КРАО, других образовательных организациях высшего и среднего профессионального образования;
                            </li>
                            <li>
                                менеджеры по подбору персонала производственных подразделений (ОсОО Торговый Дом «Народный», ОсОО «НУР Телеком» и др.), бизнес-тренеры в компаниях ЗАО «Шоро», СК «Авангард Стиль», психологи в туристических компаниях, психологи-тренеры по работе с кадрами в крупных компаниях (ОсОО «Имарат Строй», ЗАО «КОКА-КОЛА БИШКЕК БОТТЛЕРС» и др.), менеджеры по продажам в торговых фирмах (ОсОО «НЕМАН-ФАРМ», ОсОО «Кондитерский Дом «Куликовский» и др.);
                            </li>
                            <li>
                                заместители директоров, завучи, учителя начальных классов в средних общеобразовательных школах;
                            </li>
                            <li>
                                психологи в средних общеобразовательных школах, детских садах, колледжах, образовательных организациях, специальных коррекционных школах или классах общеобразовательных школ, в центрах по работе с детьми с аутизмом.
                            </li>
                        </ul>
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
                <h2 style={{ color: "#5889c4"}}>Кафедра психологии и педагогических дисциплин</h2>
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
                                Ноздрачева Татьяна Владимировна заведующая кафедрой
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
                                Шакеева Чынара Асановна, доктор психологических наук, профессор
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

                                Мамырова Мээрим Ишенбековна, кандидат педагогических наук, и.о. доцент кафедры

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
                                Ким Наталья Игоревна старший преподаватель кафедры
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
                                Шумская Наталья Адыловна, кандидат психологических наук, и.о. доцент кафедры
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
                                Петровская Надежда Александровна, старший преподаватель кафедры
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
                                Пукаев Виталий Владимирович старший преподаватель кафедры
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
                                Трапезников Артем Викторович, преподаватель кафедры
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
};

export default Psychology