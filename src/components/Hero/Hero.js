import React, { useState, useEffect, useRef } from "react";
import { FaReact } from "react-icons/fa"; // Импортируем иконку
import "./Hero.css";

const Hero = () => {
    const [iconStyle, setIconStyle] = useState({});
    const heroRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!heroRef.current) return;

            const rect = heroRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const moveFactor = 0.05;
            const moveX = (x - centerX) * moveFactor * -1;
            const moveY = (y - centerY) * moveFactor * -1;

            setIconStyle({
                transform: `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`,
            });
        };

        const currentHeroRef = heroRef.current;
        if (currentHeroRef) {
            currentHeroRef.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            if (currentHeroRef) {
                currentHeroRef.removeEventListener(
                    "mousemove",
                    handleMouseMove
                );
            }
        };
    }, []);

    return (
        <section id="hero" className="hero-section" ref={heroRef}>
            <FaReact className="hero-bg-icon" style={iconStyle} />{" "}
            {/* Используем иконку */}
            <div className="container hero-content">
                <h1>Тамерлан Гельгаев</h1>
                <h2>Frontend Разработчик</h2>
                <p className="subtitle">
                    17-летний разработчик из г.Грозного. Создаю быстрые,
                    адаптивные и красивые веб-приложения с фокусом на React.
                </p>
                <div className="hero-buttons">
                    <a href="#portfolio" className="btn">
                        Смотреть работы
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Связаться
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
