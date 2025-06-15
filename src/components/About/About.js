import React from "react";
import "./About.css";

// import myPhoto from '../../assets/';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-content">
                    {/* <img
                        // src=""
                        alt="Тамерлан Гельгаев"
                        className="about-photo"
                    /> */}
                    <div className="about-text">
                        <h2>Немного обо мне</h2>
                        <p>
                            Привет! Меня зовут Тамерлан, мне 17 лет, и я живу в
                            городе Грозный. Я увлеченный Frontend разработчик,
                            погруженный в мир JavaScript и React.
                        </p>
                        <p>
                            Мне нравится превращать идеи в живые, интерактивные
                            интерфейсы. Особое внимание уделяю чистоте кода,
                            адаптивности и производительности веб-приложений.
                        </p>
                        <p>
                            Стремлюсь создавать не просто работающие, но и
                            удобные, приятные для пользователя продукты. Готов
                            браться за интересные задачи и вносить свой вклад в
                            проекты.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
