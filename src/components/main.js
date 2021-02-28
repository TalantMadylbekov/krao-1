import React from 'react';
import main from "../img/DSC_0298.jpg"
import "../css/main.css"
import Header from "./header";
import {Link} from "react-router-dom";
import tishkov from "../img/Валерий Александрович Тишков.jpg"
import Apas from "../img/Апас Джумагулович Джумагулов.jpg"
import cvet from "../img/Светлана Константиновна Бондырева.jpg"
import kakkev from "../img/Какеев Аскар Чукутаевич.jpg"
import koichyev from "../img/Койчуев Турар Койчуевич.jpg"
import nicolai from "../img/Николай Дмитриевич Никандров.jpg"
import aitmaov from "../img/Чингиз Торекулович Айтматов.jpg"
import rector from "../img/Чинара Асановна Шакеева.jpg"
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
import History from "./history";
import License from "./license";


const useStyles = makeStyles({
    root: {
        maxWidth: 450,
        margin:"50px",
        fontSize:"25px"

    },


});

const Main = () => {
        const classes = useStyles()

    return (
        <div>
            <img src={main} alt="" width="100%" className="picture"/>
            <div className="opacity"></div>
            <div className="container">
                <div className="overlay animate__animated animate__fadeInUp  wow">
                    <h2>Кыргызско-Российская академия образования</h2>
                    <h3>Уверенность в будушем!</h3>
                  <div className="buttons">
                     <div>
                         <button ><Link to="/history">История</Link></button>
                     </div>
                      <div>
                          <button><Link to="about">Общие сведения</Link></button>
                      </div>
                  </div>
                </div>
                <div className="preFounder  animate__animated animate__fadeInUp  wow">
                    <h2 style={{ color: "#c49558"}}>Наши учредители </h2>
                    <h3 style={{ color: "#c49558"}}>Они стояли у истоков создания КРАО – оазиса международного образования</h3>
                </div>
                <div className="founder  animate__animated animate__fadeInUp  wow">
                    <Card className={classes.root} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="440"
                                image={tishkov}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Валерий Александрович Тишков
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize:"25px"}}>
                                    Российский этнолог, историк.
                                    социальный антрополог
                                    Действительный член (академик)
                                    РАН (2008). Министр по делам
                                    национальности Российской
                                    Федерации (1992). Академик-
                                    секретарь Отделения историко-
                                    филологических наук, член
                                    Президиума РАН (2013). Доктор
                                    исторических наук, профессор.

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="440"
                                image={Apas}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Апас Джумагулович Джумагулов
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize:"25px"}}>
                                    Советский и кыргызский
                                    Государственный и партийный
                                    деятель , дипломат. Председатель
                                    Совета Министров Киргизской ССР
                                    (1986-1990). Премьер министр
                                    Кабинета министров Киргизской
                                    ССР (1990-1998). Премьер-
                                    министр Кыргызской  Республики
                                    (1993-1998)

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="440"
                                image={cvet}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">

                                    Светлана Константиновна Бондырева

                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize:"25px"}}>
                                    Российский психолог. Ректор
                                    Московского психолого-
                                    педагогического университета .
                                    Академик РАО. Доктор
                                    Психологических наук,
                                    Профессор.

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="440"
                                image={kakkev}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Какеев Аскар Чукутаевич
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize:"25px"}}>
                                    Заслуженный деятель науки КР (1995).
                                    Руководитель Аппарата Президента,
                                    Госсекретарь КР (1992-1993).
                                    Министр образования, науки и
                                    культуры КР (1993-1998).
                                    Своетник Президента КР (1998). Доктор
                                    философских наук, профессор.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="440"
                                image={nicolai}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Николай Дмитриевич Никандров
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize:"25px"}}>
                                    Советский и российский ученый,
                                    организатор педагогической
                                    науки, Президент Российской
                                    академии образования (1997-2013).
                                    Почетный член Российской
                                    Академии художеств. Первый
                                    Ректор Смольного Университета
                                    Российской Академии
                                    Образования. Доктор
                                    педагогических  наук, профессор.

                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="440"
                                image={aitmaov}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Чингиз Торекулович Айтматов
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize:"25px"}}>
                                    Народный писатель Киргизской
                                    ССР, дипломат. Герой
                                    Социалистического Труда
                                    Лауреат Ленинской и трех
                                    Государственных премий СССР.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <div style={{display:"flex",width:"100%",justifyContent:"center"}}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="440"
                                    image={rector}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Чинара Асановна Шакеева
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize:"25px"}}>
                                        Президент национального
                                        общества психологов Кыргызстана.
                                        Ректор КРАО. Действительный член
                                        (академик) АПиСН РФ, Академик
                                        Международной Айтматовской
                                        академии, профессор
                                        университета «Сока Гаккай» (Токио,
                                        Япония). Доктор психологических
                                        наук, профессор.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="440"
                                    image={koichyev}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Койчуев Турар Койчуевич
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize:"25px"}}>
                                        Заслуженный деятель науки КР(1992).
                                        Вице-премьер-министр КР (1993).
                                        Президент Национальной академии
                                        Наук Кыргызстана (1993-1997).
                                        Доктор экономических наук,
                                        Профессо

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                   </div>

            </div>
            <History />

        </div>
    );
};

export default Main;