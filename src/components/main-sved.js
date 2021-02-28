import React from 'react';
import About from "./about";
import "../css/main.css"

const MainSved = () => {
    return (
        <div>
            <About />
            <div className="container">
                <h1 className="pre">ОСНОВНЫЕ СВЕДЕНИЯ</h1>

               <div style={{padding:"50px 0"}}>
                   <div className="block2" >
                       <h4 >Полное наименование</h4>
                       <p style={{width:"800px"}}> Образовательное учреждение автономная  некоммерческая
                           организация высшего образования «Кыргызско-Российская
                           академия образования» (Институт)</p>
                   </div>
                   <div className="block2">
                       <h4>Сокращенное наименование</h4>
                       <p>  ОУ АНО ВО «Кыргызско-российская академия образования» ОУ АНО ВО «КРАО»</p>
                   </div>
                   <div className="block2">
                       <h4>Дата создания</h4>
                       <p>07.07.1997</p>
                   </div>
                   <div className="block2">
                       <h4>Адрес местонахождения</h4>
                       <p> 720009, Кыргызская Республика, г.Бишкек, улица Льва Толстого 210</p>
                   </div>
                   <div className="block2">
                       <h4>Режим, график работы  </h4>
                       <p> ПН-ПТ     9-00    -  17-00</p>
                   </div>
                   <div className="block2">
                       <h4>Контактные телефоны   </h4>
                       <p>  +9 (312) 418262, 418103, 418104</p>
                   </div>
                   <div className="block2">
                       <h4>Адрес электронной  почты </h4>
                       <p>e-mail:krao@elcat.kg</p>
                   </div>
                   <div className="block2">
                       <h4>Web-site  </h4>
                       <p>krao.kg</p>
                   </div>
                   <div className="block2">
                       <h4>Филиалы</h4>
                       <p>не имеются</p>
                   </div>
                   <div className="block2">
                       <h4>Представительства</h4>
                       <p> отсутствуют  </p>
                   </div>

               </div>
               </div>
        </div>
    );
};

export default MainSved;