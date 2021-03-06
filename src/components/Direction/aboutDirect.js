import React from 'react';
import {Link} from "react-router-dom";

const AboutDirect = () => {
    return (
        <div>
            <div className="container">
                <h1 className="gr">Направления подготовки</h1>
                <div className="links">
                    <div className="block">
                        <div>
                            <Link to="chairs">Кафедры</Link>
                        </div>
                        <div>
                            <Link to="magistracy">Магистратура</Link>
                        </div>
                        <div>
                            <Link to="college">Колледж</Link>
                        </div>
                        <div>
                            <Link to="courses">Курсы</Link>
                        </div>
                        <div>
                            <Link to="drivingschool">Автошкола</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutDirect;