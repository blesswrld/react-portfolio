import React from "react";
import { skillsData } from "../../data/skills.js"; // Импортируем данные
import "./Skills.css";

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2>Технологии, с которыми я работаю</h2>
                <p>
                    Использую Create React App, Vite, NextJs для быстрой
                    настройки React-проектов.
                </p>
                <div className="skills-grid">
                    {skillsData.map(
                        (
                            skill // <-- Используем импортированные данные
                        ) => (
                            <div
                                key={skill.name}
                                className="skill-item"
                                title={skill.name}
                            >
                                <div className="skill-icon">{skill.icon}</div>
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;
