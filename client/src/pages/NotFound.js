import React from 'react';
import Error404 from "../assets/error404.png"
import "../index.css"
const NotFound = () => {
    return (
    <section className="error-404-section section-padding">
        <div className="error">
            <img src={Error404} alt={"Not found"}/>
        </div>
        <div className="error-message">
            <h3>Ой! Страница не найдена!</h3>
            <p>К сожалению мы не можем найти запрошенную вами страницу. Возможно, вы неправильно ввели адрес.</p>
            <a href="/" className="theme-btn">Вернуться назад</a>
        </div>
    </section>
    );
};

export default NotFound;