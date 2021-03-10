import React from 'react';
import {Link} from "react-router-dom";

const Chairs = () => {
    return (
        <div>
            <div className="container">
                <h1 className="gr">Кафедры</h1>
                <div className="links">
                    <div className="block">
                        <div>
                            <Link to="/economic">Кафедра Экономики и менеджмента</Link>
                        </div>
                        <div>
                            <Link to="/statejurist">Кафедра Государственного и муниципального управления и юриспруденции</Link>
                        </div>
                        <div>
                            <Link to="/infotech">Кафедра Информационных технологий и естественно-технических наук</Link>
                        </div>
                        <div>
                            <Link to="/psychology">Кафедра Психологии и педагогических дисциплин</Link>
                        </div>
                        <div>
                            <Link to="/linguistics">Кафедра Лингвистики и государственного языка</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chairs;