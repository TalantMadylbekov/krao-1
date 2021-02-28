import React from 'react';
import {Link} from "react-router-dom";
import "../css/about.css"

const About = () => {
    return (
        <div>
            <div className="container">
                <h1 className="gr">Сведения об образовательной организации</h1>
                <div className="links">
                    <div className="block">
                        <div>
                            <Link to="info">Основные сведения</Link>
                        </div>
                        <div>
                            <Link to="structure">Структура и органы управления образовательной организацией</Link>
                        </div>
                        <div>
                            <Link to="documents">Документы</Link>
                        </div>
                        <div>
                            <Link to="/education">Образование</Link>
                        </div>
                    </div>
                    <div className="block">
                        <div>
                            <Link to="/staff">Руководство. Педагогический (научно-педагогический) состав</Link>
                        </div>
                        <div>
                            <Link to="/logistic">Материально-техническое обеспечение и оснащённость образовательного процесса</Link>
                        </div>
                        <div>
                            <Link to="/pay" >Платные образовательные услуги</Link>
                        </div>
                        <div>
                            <Link to="/finance">Финансово-хозяйственная деятельность</Link>
                        </div>
                    </div>
                   <div className="block">
                       <div>
                           <Link>Вакантные места для приема (перевода)</Link>
                       </div>
                       <div>
                           <Link to="/international">Международное сотрудничество</Link>
                       </div>
                       <div>
                           <Link>Доступная среда</Link>
                       </div>
                   </div>

                </div>
            </div>
        </div>
    );
};

export default About;