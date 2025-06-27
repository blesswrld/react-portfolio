import React from "react";
import "./Footer.css";

// Раскомментируем иконки, чтобы использовать их
// import { FaGithub, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="container footer-content">
                <p>© {currentYear}. Все права защищены.</p>
                <p>
                    <a
                        href="/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Политика конфиденциальности
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
