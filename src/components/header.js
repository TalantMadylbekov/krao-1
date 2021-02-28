import React ,{useState}from 'react';
import "../App.css"
import {Link} from "react-router-dom";




const Header = () => {
    return (
        <>
<header>
    <div className="container">
    <div className="box">
        <div className="logo">
            <div style={{display:"flex",alignItems:"center"}}>
                <Link to="/">KRAO</Link>
                <p>Кыргызско-Российская академия образования</p>
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/800px-Flag_of_Kyrgyzstan.svg.png" alt="" width="55px" style={{marginRight:"10px"}}/>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png" alt="" width="53px"/>
            </div>
        </div>
        <div className="menu" >
            <div className="dropdown">
                <button className="dropbtn">Об академии</button>
                <div className="dropdown-content">
                    <Link to="about">Сведения об образовательной организации</Link>
                    <Link to="/history">История КРАО</Link>
                    <Link>Руководство</Link>

                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Направления подготовки</button>
                <div className="dropdown-content">
                    <Link to="/creating">Link 1</Link>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Наука и развитие</button>
                <div className="dropdown-content">
                    <Link to="/creating">Link 1</Link>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Абитуриенту</button>
                <div className="dropdown-content">
                    <Link to="/creating">Link 1</Link>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Студенту</button>
                <div className="dropdown-content">
                    <Link to="/student">Расписание</Link>
                    <Link>Link 2</Link>
                    <a href="#">Link 3</a>
                </div>
            </div>
        </div>
    </div>

    </div>
</header>
            </>
    );
}

export default Header;