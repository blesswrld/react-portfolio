import React, { useContext } from "react";
import PropTypes from "prop-types"; // Импортируем для примера, хотя пропсов нет
import ThemeContext from "../../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ThemeToggle.css";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className="theme-toggle-button"
            onClick={toggleTheme}
            aria-label={`Переключить на ${
                theme === "dark" ? "светлую" : "темную"
            } тему`}
            title={`Переключить на ${
                theme === "dark" ? "светлую" : "темную"
            } тему`}
        >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
    );
};

ThemeToggle.propTypes = {
    // У этого компонента сейчас нет пропсов
};

export default ThemeToggle;
