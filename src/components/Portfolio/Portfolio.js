import "./Portfolio.css";

import project1Img from "../../assets/icons/projects/irvas-project.jpg";
import project2Img from "../../assets/icons/projects/loan-project.jpg";
import project3Img from "../../assets/icons/projects/marvel-web-app.jpg";
import project4Img from "../../assets/icons/projects/picture-project.jpg";
import project5Img from "../../assets/icons/projects/food-project.jpg";
import project6Img from "../../assets/icons/projects/rest-countries-api.jpg";
import project7Img from "../../assets/icons/projects/filmix-project.jpg";
import project8Img from "../../assets/icons/projects/code-sync.png";
import project9Img from "../../assets/icons/projects/pingme-messanger.jpg";

const projects = [
    {
        title: "Irvas Project (Лендинг)",
        description:
            "Адаптивный лендинг, сверстанный по макету из Figma. Реализована интерактивность с помощью JavaScript, включая различные модальные окна, формы обратной связи, слайдер, а также калькулятор для подбора окон. Стилизация выполнена с использованием CSS.",
        imageUrl: project1Img,
        tech: ["HTML", "CSS", "JavaScript"], // Список технологий
        liveUrl: "https://irvas-project.vercel.app/", // Ссылка на живой демо
        repoUrl: "https://github.com/blesswrld/irvas-project", // Ссылка на GitHub репозиторий
    },
    {
        title: "Loan Project (Лендинг)",
        description:
            "Адаптивный многостраничный лендинг, сверстанный по макету Figma. Стилизация реализована с использованием препроцессора Sass. JavaScript применен для создания интерактивных элементов, таких как формы и слайдеры. Интегрирован YouTube API для динамической подгрузки видео.",
        imageUrl: project2Img,
        tech: ["HTML", "Sass", "JavaScript", "API Integration"],
        liveUrl: "https://loan-project-phi.vercel.app/",
        repoUrl: "https://github.com/blesswrld/loan-project",
    },
    {
        title: "Marvel Project (Веб-приложение)",
        description:
            "Веб-приложение на React для исследования вселенной Marvel. Построено с использованием функциональных компонентов и хуков для работы с асинхронными запросами к API. Позволяет просматривать список персонажей Marvel и комиксов, и получать информацию о них.",
        imageUrl: project3Img,
        tech: [
            "React",
            "JS (Hooks)",
            "API Integration",
            "SASS",
            "Create React App",
        ],
        liveUrl: "https://react-api-app-marvel.vercel.app/",
        repoUrl: "https://github.com/blesswrld/react-api-app-marvel",
    },
    {
        title: "Picture Project (Лендинг)",
        description:
            "Адаптивный лендинг, сверстанный по макету Figma. Применен JavaScript для создания интерактивных элементов: модальные окна (включая автоматически всплывающее по таймеру popup-окно), формы обратной связи и слайдер. Реализована работа с JSON Server для динамической подгрузки контента и имитации отправки данных форм.",
        imageUrl: project4Img,
        tech: ["HTML", "JavaScript", "JSON Server", "CSS"],
        liveUrl: "https://picture-project-xi.vercel.app/",
        repoUrl: "https://github.com/blesswrld/picture-project",
    },
    {
        title: "Food Project (Лендинг)",
        description:
            "Адаптивный лендинг, сверстанный по макету Figma. С помощью JavaScript реализованы интерактивные элементы: модальные окна (включая автоматически всплывающее по таймеру popup-окно) и формы обратной связи. Настроен JSON Server для динамической подгрузки данных и имитации отправки данных с форм.",
        imageUrl: project5Img,
        tech: ["HTML", "JavaScript", "JSON Server", "CSS"],
        liveUrl: "https://food-project-amber-phi.vercel.app/",
        repoUrl: "https://github.com/blesswrld/food-project",
    },
    {
        title: "Rest Countries Project (Веб-приложение)",
        description:
            "Веб-приложение на React для исследования стран мира, использующее Rest Countries API. Построено с применением функциональных компонентов и хуков для асинхронной работы с данными. Позволяет переключать светлую/темную тему, просматривать список стран, фильтровать их по названию или региону, а также изучать подробную информацию о выбранной стране, включая её соседей.",
        imageUrl: project6Img,
        tech: ["React", "JS (Hooks)", "API Integration", "Styled Components"],
        liveUrl: "https://rest-countries-api-ten-xi.vercel.app/",
        repoUrl: "https://github.com/blesswrld/REST-Countries-Api",
    },
    {
        title: "Filmix (Веб-приложение)",
        description:
            "Веб-приложение для поиска и просмотра информации о фильмах и сериалах. Использует сторонний Kinopoisk API для получения актуальных данных, таких как списки популярных и лучших фильмов, постеры, описания и рейтинги. Позволяет пользователям удобно навигироваться по каталогу кино.",
        imageUrl: project7Img,
        tech: [
            "React",
            "JavaScript",
            "Kinopoisk API",
            "MUI",
            "Vite",
            "CSS/SASS",
        ],
        liveUrl: "https://filmix-react.vercel.app/",
        repoUrl: "https://github.com/blesswrld/filmix-react",
    },
    {
        title: "CodeSync (Платформа для созвонов)",
        description:
            "Платформа для проведения видеоконференций и созвонов, разработанная с использованием Next.js. Реализована функциональность групповых звонков с помощью Stream.io. Для аутентификации пользователей интегрирован Clerk. Интерфейс построен с применением Shadcn UI и стилизован с помощью Tailwind CSS. В качестве базы данных используется Convex.",
        imageUrl: project8Img,
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Stream.io",
            "Clerk",
            "Convex",
            "Tailwind CSS",
            "Shadcn UI",
        ],
        liveUrl: "https://code-sync-react-platform.vercel.app/",
        repoUrl: "https://github.com/blesswrld/CodeSync-react-platform",
    },
    {
        title: "PingMe (Мессенджер)",
        description:
            "Веб-приложение мессенджер, разработанное на React с использованием Vite. Реализован обмен сообщениями в реальном времени с помощью Socket.io. Для хранения файлов и обмена фотографиями интегрировано облачное хранилище Yandex.Cloud. В качестве базы данных используется MongoDB. Интерфейс стилизован с помощью Tailwind CSS.",
        imageUrl: project9Img,
        tech: [
            "React",
            "JavaScript",
            "Socket.io",
            "MongoDB",
            "Yandex.Cloud Storage",
            "Tailwind CSS",
            "Vite",
        ],
        isInDevelopment: "В разработке",
        repoUrl: "https://github.com/blesswrld/PingMe-react-messanger",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <h2>Мои Работы</h2>
                <p className="portfolio-intro">
                    Здесь собраны некоторые из моих проектов. Кликните, чтобы
                    увидеть подробности или демо.
                </p>
                {projects && projects.length > 0 ? (
                    <div className="portfolio-grid">
                        {projects.map((project, index) => (
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
                        ))}
                    </div>
                ) : (
                    <p>Здесь скоро появятся мои проекты...</p>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
