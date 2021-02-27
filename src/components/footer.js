import React from 'react';
import "../css/about.css"

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                   <div className="box1">
                       <div style={{padding:"15px 0"}}>
                           <p>© Kyrgyz-Russian Academy Education All 2016 (Krao)</p>
                           <p>Все права защищены.</p>
                       </div>
                       <div>
                           <p><span >Наш адрес:</span> Кыргызстан г. Бишкек, ул. Л. Толстого, 210</p>
                           <p><span>Наша почта:</span> e-mail: krao@elcat.kg</p>
                       </div>
                   </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;