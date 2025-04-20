import React from "react";
import "./About.css";

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2>Немного обо мне</h2>
                <div className="about-content">
                    {/* Можно добавить фото слева/справа */}
                    {/* <img src="path/to/your/photo.jpg" alt="Тамерлан" className="about-photo"/> */}
                    <div className="about-text">
                        <p>
                            Привет! Меня зовут Тамерлан, мне 17 лет, и я живу в
                            городе Грозный. Я увлеченный Frontend разработчик,
                            погруженный в мир JavaScript и React.
                        </p>
                        <p>
                            Мне нравится превращать идеи в живые, интерактивные
                            интерфейсы. Особое внимание уделяю чистоте кода,
                            адаптивности и производительности веб-приложений. Я
                            всегда открыт для изучения новых технологий и лучших
                            практик в веб-разработке.
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
