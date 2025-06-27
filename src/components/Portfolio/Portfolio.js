import React from "react";
import { projectsData } from "../../data/projects.js"; // <-- Импортируем данные
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <h2>Мои Работы</h2>
                <p className="portfolio-intro">
                    Здесь собраны некоторые из моих проектов...
                </p>
                <div className="portfolio-grid">
                    {projectsData.map(
                        (
                            project,
                            index // <-- Используем импортированные данные
                        ) => (
                            <div key={index} className="portfolio-card">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="portfolio-image"
                                />
                                <div className="portfolio-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="portfolio-tech">
                                        {project.tech &&
                                            project.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="tech-tag"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                    </div>
                                    <div className="portfolio-links">
                                        {/* Условие: Если проект в разработке */}
                                        {project.isInDevelopment ? (
                                            <span className="development-status">
                                                В разработке
                                            </span>
                                        ) : (
                                            <>
                                                {project.liveUrl &&
                                                    project.liveUrl !== "#" && (
                                                        <a
                                                            href={
                                                                project.liveUrl
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn btn-small"
                                                        >
                                                            Демо
                                                        </a>
                                                    )}
                                                {project.repoUrl &&
                                                    project.repoUrl !== "#" && (
                                                        <a
                                                            href={
                                                                project.repoUrl
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn btn-secondary btn-small"
                                                        >
                                                            Код
                                                        </a>
                                                    )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
