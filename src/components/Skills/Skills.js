import React from "react";
import "./Skills.css";
// импорт иконок технологий из 'react-icons'
import {
    FaReact,
    FaJsSquare,
    FaHtml5,
    FaCss3Alt,
    FaSass,
    FaBootstrap,
    FaGulp,
    FaGitAlt,
} from "react-icons/fa";
import { SiRedux, SiWebpack, SiJquery } from "react-icons/si";

const skillsData = [
    { name: "JavaScript (ES6+)", icon: <FaJsSquare /> },
    { name: "React", icon: <FaReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Sass", icon: <FaSass /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "jQuery", icon: <SiJquery /> },
    { name: "Webpack", icon: <SiWebpack /> },
    { name: "Gulp", icon: <FaGulp /> },
    { name: "Git", icon: <FaGitAlt /> },
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2>Технологии, с которыми я работаю</h2>
                <p>
                    Использую Create React App для быстрой настройки
                    React-проектов.
                </p>
                <div className="skills-grid">
                    {skillsData.map((skill) => (
                        <div
                            key={skill.name}
                            className="skill-item"
                            title={skill.name}
                        >
                            <div className="skill-icon">{skill.icon}</div>{" "}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
