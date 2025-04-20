import React from "react";
import "./Footer.css";

/* import { FaGithub, FaTelegramPlane } from "react-icons/fa"; */

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="container footer-content">
                {/* <div className="social-icons footer-socials">
                    <a
                        href="https://github.com/blesswrld"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://t.me/gelgaev_dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Telegram"
                    >
                        <FaTelegramPlane />
                    </a>
                </div> */}
                <p>© {currentYear}. Все права защищены.</p>
                <p>
                    <a href="#privacy-policy">Политика конфиденциальности</a>
                </p>{" "}
            </div>
        </footer>
    );
};

export default Footer;
