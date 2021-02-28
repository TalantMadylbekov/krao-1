import React from 'react';
import "../css/staffs.css"
import About from "./about";

const Staffs = () => {
    return (
        <div>
            <About />
            <h2>Руководство Кыргызско-Российской академии образования</h2>

            <table className="table">
                <thead>
                <tr>
                    <th>Ф.И.О</th>
                    <th>Должность</th>
                    <th>Контактный телефон</th>
                    <th>Адрес электронной почты</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Шакеева Чинара Асановна</td>
                    <td>Ректор</td>
                    <td>+996312418262</td>
                    <td>krao@elcat.kg</td>
                </tr>
                    <tr>
                        <td>Наралиева Динар Баисбековна</td>
                        <td>Проректор по учебно-воспитательной работе</td>
                        <td>+996 555202171</td>
                        <td>Naralievad@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Кененбаева Гулайым Мекишевна</td>
                        <td>Проректор по научной работе и развитию</td>
                        <td>+996500154453</td>
                        <td>gkenenbaeva@mail.ru</td>
                    </tr>
                    <tr>
                        <td>Базарбаев Талантбек Аскерович</td>
                        <td>Проректор по административно-хозяйственной части</td>
                        <td>+996 704735531</td>
                        <td>talanta@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Ким Наталья Игоревна</td>
                        <td>Начальник отдела по качеству образования, лицензирования и аккредитации</td>
                        <td>+996 701009565</td>
                        <td>kimtata78@mail.ru</td>
                    </tr>
                    <tr>
                        <td>Кашкарбаева Бегай Тобокеловна</td>
                        <td>Начальник отдела по информационным технологиям и дистанционному обучению</td>
                        <td>+996707070077</td>
                        <td>beka410525@gmail.com</td>
                </tr>
                    <tr>
                        <td>Илларионова Лина Михайловна</td>
                        <td>секретарь Ученого Совета</td>
                        <td>+996 556103301</td>
                        <td>tanecha_i@mail.ru</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Staffs;