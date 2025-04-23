import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const isHomePage = location.pathname === "/";

    const handleScrollLinkClick = (event, id) => {
        if (isOpen) {
            setIsOpen(false);
        }

        if (isHomePage) {
            event.preventDefault();
            const element = document.getElementById(id);
            if (element) {
                const headerOffset =
                    document.querySelector(".navbar-header")?.offsetHeight ||
                    60;
                const elementPosition =
                    element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        }
    };

    // Список ссылок
    const navLinks = [
        { id: "hero", name: "Главная" },
        { id: "about", name: "Обо мне" },
        { id: "skills", name: "Навыки" },
        { id: "services", name: "Услуги" },
        { id: "portfolio", name: "Портфолио" },
        { id: "contact", name: "Контакты" },
    ];

    return (
        <header className="navbar-header">
            <button
                className="menu-toggle"
                onClick={toggleMenu}
                aria-label="Открыть меню"
                aria-expanded={isOpen}
            >
                {isOpen ? "✕" : "☰"}
            </button>
            <nav className={`navbar-menu ${isOpen ? "open" : ""}`}>
                <ul>
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
                                <Link
                                    to={`/#${link.id}`}
                                    onClick={(e) =>
                                        handleScrollLinkClick(e, link.id)
                                    }
                                >
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
