import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Функция для закрытия меню при клике на ссылку (для мобильных)
    const handleLinkClick = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <>
            <button
                className="menu-toggle"
                onClick={toggleMenu}
                aria-label="Открыть меню"
                aria-expanded={isOpen}
            >
                {/* можно использовать SVG или FontAwesome иконки */}
                {isOpen ? "✕" : "☰"}
            </button>
            <nav className={`navbar-menu ${isOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <a href="#hero" onClick={handleLinkClick}>
                            Главная
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={handleLinkClick}>
                            Обо мне
                        </a>
                    </li>
                    <li>
                        <a href="#skills" onClick={handleLinkClick}>
                            Навыки
                        </a>
                    </li>
                    <li>
                        <a href="#services" onClick={handleLinkClick}>
                            Услуги
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={handleLinkClick}>
                            Портфолио
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={handleLinkClick}>
                            Контакты
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
