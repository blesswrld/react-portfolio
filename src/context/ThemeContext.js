import React, { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types"; // Импортируем PropTypes

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const getInitialTheme = () => {
        if (typeof window !== "undefined") {
            const storedPrefs = window.localStorage.getItem("color-theme");
            if (typeof storedPrefs === "string") {
                return storedPrefs;
            }
        }
        // Всегда начинаем с темной, если нет сохраненной
        return "dark";
    };

    const [theme, setTheme] = useState(getInitialTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        const root = window.document.documentElement;
        root.setAttribute("data-theme", theme);
        localStorage.setItem("color-theme", theme);
    }, [theme]);

    // Оборачиваем значение в useMemo для оптимизации
    const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

// Добавляем PropTypes для ThemeProvider
ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired, // children должен быть React-узлом и обязателен
};

export default ThemeContext;
