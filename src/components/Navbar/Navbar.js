import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

// Список ссылок
const navLinks = [
    { id: "hero", name: "Главная" },
    { id: "about", name: "Обо мне" },
    { id: "skills", name: "Навыки" },
    { id: "services", name: "Услуги" },
    { id: "portfolio", name: "Портфолио" },
    { id: "contact", name: "Контакты" },
];

// Кастомный хук для управления состоянием меню
const useMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    // useCallback, чтобы функции не создавались заново при каждом рендере
    const openMenu = useCallback(() => setIsOpen(true), []);
    const closeMenu = useCallback(() => setIsOpen(false), []);

    // Эффект для закрытия меню по клавише Escape
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                closeMenu();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            // Блокируем скролл основной страницы, когда меню открыто
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, closeMenu]);

    return { isOpen, openMenu, closeMenu };
};

const Navbar = () => {
    const { isOpen, openMenu, closeMenu } = useMenu();
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const handleScrollLinkClick = (event, id) => {
        closeMenu();

        if (isHomePage) {
            event.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                const elementTop =
                    element.getBoundingClientRect().top + window.scrollY;
                const offset = 70;

                window.scrollTo({
                    top: elementTop - offset,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <nav className="navbar-container">
            {/* Кнопка-бургер */}
            <button
                className={`menu-toggle ${isOpen ? "hidden" : ""}`}
                onClick={openMenu}
                aria-label="Открыть меню"
            >
                ☰
            </button>

            {/* Оверлей */}
            <div
                className={`overlay ${isOpen ? "active" : ""}`}
                onClick={closeMenu}
            />

            {/* Выпадающее меню */}
            <div
                id="navbar-menu"
                className={`navbar-menu ${isOpen ? "open" : ""}`}
                aria-hidden={!isOpen}
            >
                <button
                    className="menu-toggle-close"
                    onClick={closeMenu}
                    aria-label="Закрыть меню"
                >
                    ✕
                </button>
                <ul className="navbar-menu-list">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            {isHomePage ? (
                                <a
                                    href={`#${link.id}`}
                                    onClick={(e) =>
                                        handleScrollLinkClick(e, link.id)
                                    }
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link to={`/#${link.id}`} onClick={closeMenu}>
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
