import React from "react";
import "./Services.css";

const services = [
    {
        title: "Разработка Landing Page (одностраничный сайт)",
        description:
            "Создание стильных, быстрых и адаптивных одностраничных сайтов на React или чистом JS/HTML/CSS.",
        price: "от 1 000 ₽",
    },
    {
        title: "Многостраничный сайт / Веб-приложение",
        description:
            "Создание многостраничных сайтов, корпоративных сайтов, небольших веб-приложений с использованием React и Redux (при необходимости).",
        price: "от 6 000 ₽",
    },
    {
        title: "Верстка по макету (Figma)",
        description:
            "Точная, адаптивная и кроссбраузерная верстка макетов в HTML/CSS/JS или React-компоненты.",
        price: "от 1 500 ₽",
    },
    {
        title: "Доработка и поддержка проектов",
        description:
            "Внесение правок, добавление нового функционала, исправление багов на фронтенде (преимущественно React/JS).",
        price: "от 1 000 ₽/час",
    },
    {
        title: "Frontend Оптимизация",
        description:
            "Улучшение скорости загрузки сайта, оптимизация кода и ресурсов для лучшего пользовательского опыта.",
        price: "от 1 000 ₽",
    },
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <h2>Что я могу предложить</h2>
                <p className="services-intro">
                    Готов взяться за интересные задачи и предоставить
                    качественный результат. Ниже приведены основные направления
                    работы и ориентировочные цены.
                </p>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className="service-price">
                                {service.price}*
                            </div>
                        </div>
                    ))}
                </div>
                <p className="services-note">
                    * Указанные цены являются ориентировочными и обсуждаются
                    индивидуально. <a href="#contact">Свяжитесь со мной</a> для
                    детального обсуждения вашего проекта!
                </p>
            </div>
        </section>
    );
};

export default Services;
