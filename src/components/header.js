import React ,{useState}from 'react';
import kyrgyz from "../img/kyrgyz.png"
import russian from "../img/russian.png"






import "../App.css"
import {Link} from "react-router-dom";




const Header = () => {
    const [isOpen,setOpen] = useState(false)
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
                <img src={kyrgyz} alt=""/>
                <img src={russian} alt=""/>
            </div>
        </div>
        <div className="menu" >
            <div className="dropdown">
                <button className="dropbtn">Об академии</button>
                <div className="dropdown-content">
                    <Link to="about">Сведения об образовательной организации</Link>
                    <Link>История КРАО</Link>
                    <Link>Руководство</Link>

                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Абитуриент</button>
                <div className="dropdown-content">
                    <Link>Link 1</Link>
                    <Link>Link 2</Link>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Магистратура</button>
                <div className="dropdown-content">
                    <Link>Link 1</Link>
                    <Link>Link 2</Link>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Кафедры</button>
                <div className="dropdown-content">
                    <Link>Link 1</Link>
                    <Link>Link 2</Link>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Колледж</button>
                <div className="dropdown-content">
                    <Link>Link 1</Link>
                    <Link>Link 2</Link>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Курсы</button>
                <div className="dropdown-content">
                    <Link>Link 1</Link>
                    <Link>Link 2</Link>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Студентами</button>
                <div className="dropdown-content">
                    <Link>Link 1</Link>
                    <Link>Link 2</Link>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Dropdown</button>
                <div className="dropdown-content">
                    <Link>Link 1</Link>
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