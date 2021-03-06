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
                            <Link to="chairs">Кафедра Экономики и менеджмента</Link>
                        </div>
                        <div>
                            <Link to="magistracy">Кафедра Государственного и муниципального управления и юриспруденции</Link>
                        </div>
                        <div>
                            <Link to="college">Кафедра Информационных технологий и естественно-технических наук</Link>
                        </div>
                        <div>
                            <Link to="courses">Кафедра Психологии и педагогических дисциплин</Link>
                        </div>
                        <div>
                            <Link to="drivingschool">Кафедра Лингвистики и государственного языка</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chairs;