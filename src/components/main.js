import React from 'react';
import main from "../img/IMG_20210226_191029.jpg"
import "../css/main.css"
import Header from "./header";
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div>

            <img src={main} alt="" width="100%" className="picture"/>
            <div className="opacity"></div>
            <div className="container">
                <div className="overlay">
                    <h2>Кыргызско-Российская академия образования.</h2>
                    <h3>Уверенyость в будушем!</h3>
                  <div className="buttons">
                     <div>
                         <button>История</button>
                     </div>
                      <div>
                          <button>Общие сведения</button>
                      </div>
                  </div>
                </div>

            </div>

        </div>
    );
};

export default Main;