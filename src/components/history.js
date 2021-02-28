import React from 'react';
import img from "../img/здание для главной станицы.png"
import img2 from "../img/DSC_0298.jpg"
import img3 from "../img/DSC_0452.jpg"
import "../css/main.css"
import About from "./about";


const History = () => {
    return (
        <div>
            <About />
            <div className="container">
                <div style={{textAlign:"center",color:"#c49558",fontSize:"30px",margin:"60px 0"}}><h3>Наша история</h3></div>
                <div className="history">
                    <div className="th  animate__animated animate__fadeInUp   wow">
                        <img src={img} alt=""/>
                        <div style={{width:"600px"}}>
                            <h2>Знакомьтесь с нами!</h2>
                            <p>Кыргызско-Российская академия образования (КРАО) создана Постановлением Правительства Кыргызской Республики от 6-июня 1997 года в рамках межинтеграционного соглашения между Кыргызской Республикой и Российской Федерацией о сотрудничестве в области образования и науки.
                        </p></div>
                    </div>
                    <div className="th  animate__animated animate__fadeInUp   wow">
                        <div style={{width:"600px"}}>
                            <h2>Мы рады новым студентам! </h2>
                            <p> Стратегической задачей деятельности КРАО является проведение интернациональной образовательной политики в процессе формирования сознании обучающихся систем профессиональных знаний и нравственных ценностей.
                        </p></div>
                        <img src={img2} alt=""/>
                    </div>
                    <div className="th  animate__animated animate__fadeInUp   wow">
                        <img src={img3} alt=""/>
                        <div style={{width:"600px"}}>
                            <h2>КРАО – это живой организм, находящийся в постоянном развитии.</h2>
                            <p> Кыргызско-Российская академия образования (КРАО) призвана способствовать налаживанию контактов между учеными разных стран, наши аудитории это пространство обмена творческим опытом и идеями в области образования, науки и культуры.
                        </p></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;