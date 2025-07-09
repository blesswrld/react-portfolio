// Импорты всех изображений для проектов
import project1Img from "../assets/images/projects/irvas-project.jpg";
import project2Img from "../assets/images/projects/loan-project.jpg";
import project3Img from "../assets/images/projects/marvel-web-app.jpg";
import project4Img from "../assets/images/projects/picture-project.jpg";
import project5Img from "../assets/images/projects/food-project.jpg";
import project6Img from "../assets/images/projects/rest-countries-api.jpg";
import project7Img from "../assets/images/projects/filmix-project.jpg";
import project8Img from "../assets/images/projects/codesync-platform.jpg";
import project9Img from "../assets/images/projects/pingme-messanger.jpg";
import project10Img from "../assets/images/projects/ceramic-soul.jpg";
import project11Img from "../assets/images/projects/adventure-project.jpg";

export const projectsData = [
    {
        title: "Irvas Project (Лендинг)",
        description:
            "Адаптивный лендинг, сверстанный по макету из Figma. Реализована интерактивность с помощью JavaScript, включая различные модальные окна, формы обратной связи, слайдер, а также калькулятор для подбора окон. Стилизация выполнена с использованием CSS.",
        imageUrl: project1Img,
        tech: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://irvas-project.vercel.app",
        repoUrl: "https://github.com/blesswrld/irvas-project",
    },
    {
        title: "Loan Project (Лендинг)",
        description:
            "Адаптивный многостраничный лендинг, сверстанный по макету Figma. Стилизация реализована с использованием препроцессора Sass. JavaScript применен для создания интерактивных элементов, таких как формы и слайдеры. Интегрирован YouTube API для динамической подгрузки видео.",
        imageUrl: project2Img,
        tech: ["HTML", "Sass", "JavaScript", "API Integration"],
        liveUrl: "https://loan-project-phi.vercel.app",
        repoUrl: "https://github.com/blesswrld/loan-project",
    },
    // {
    //     title: "Marvel Project (Веб-приложение)",
    //     description:
    //         "Веб-приложение на React для исследования вселенной Marvel. Построено с использованием функциональных компонентов и хуков для работы с асинхронными запросами к API. Позволяет просматривать список персонажей Marvel и комиксов, и получать информацию о них.",
    //     imageUrl: project3Img,
    //     tech: [
    //         "React",
    //         "JS (Hooks)",
    //         "API Integration",
    //         "SASS",
    //         "Create React App",
    //     ],
    //     liveUrl: "https://react-api-app-marvel.vercel.app",
    //     repoUrl: "https://github.com/blesswrld/react-api-app-marvel",
    // },
    {
        title: "Picture Project (Лендинг)",
        description:
            "Адаптивный лендинг, сверстанный по макету Figma. Применен JavaScript для создания интерактивных элементов: модальные окна (включая автоматически всплывающее по таймеру popup-окно), формы обратной связи и слайдер. Реализована работа с JSON Server для динамической подгрузки контента и имитации отправки данных форм.",
        imageUrl: project4Img,
        tech: ["HTML", "JavaScript", "JSON Server", "CSS"],
        liveUrl: "https://picture-project-xi.vercel.app",
        repoUrl: "https://github.com/blesswrld/picture-project",
    },
    {
        title: "Food Project (Лендинг)",
        description:
            "Адаптивный лендинг, сверстанный по макету Figma. С помощью JavaScript реализованы интерактивные элементы: модальные окна (включая автоматически всплывающее по таймеру popup-окно) и формы обратной связи. Настроен JSON Server для динамической подгрузки данных и имитации отправки данных с форм.",
        imageUrl: project5Img,
        tech: ["HTML", "JavaScript", "JSON Server", "CSS"],
        liveUrl: "https://food-project-amber-phi.vercel.app",
        repoUrl: "https://github.com/blesswrld/food-project",
    },
    {
        title: "Rest Countries Project (Веб-приложение)",
        description:
            "Веб-приложение на React для исследования стран мира, использующее Rest Countries API. Построено с применением функциональных компонентов и хуков для асинхронной работы с данными. Позволяет переключать светлую/темную тему, просматривать список стран, фильтровать их по названию или региону, а также изучать подробную информацию о выбранной стране, включая её соседей.",
        imageUrl: project6Img,
        tech: ["React", "JS (Hooks)", "API Integration", "Styled Components"],
        liveUrl: "https://rest-countries-api-ten-xi.vercel.app",
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
        liveUrl: "https://filmix-react.vercel.app",
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
        liveUrl: "https://code-sync-react-platform.vercel.app",
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
        liveUrl: "https://pingme-react-messanger.onrender.com",
        repoUrl: "https://github.com/blesswrld/PingMe-react-messanger",
    },
    {
        title: "Ceramic Soul (Многостраничный сайт)",
        description:
            "Многостраничный адаптивный сайт для студии керамики 'Ceramic Soul', разработанный для демонстрации и продажи уникальных изделий ручной работы. Сверстан по макету из Figma, стилизация выполнена с использованием препроцессора Sass. JavaScript применен для создания интерактивных элементов и обеспечения общей функциональности. Проект собран с использованием Vite для оптимизации производительности и ускорения процесса разработки.",
        imageUrl: project10Img,
        tech: ["HTML", "Sass", "JavaScript", "Vite"],
        liveUrl: "https://ceramic-soul.vercel.app",
        repoUrl: "https://github.com/blesswrld/ceramic-soul",
    },
    {
        title: "Adventure (Лендинг)",
        description:
            "Адаптивный лендинг для туристического агентства, сверстанный по собственному дизайну. Реализована интерактивная навигация с плавной прокруткой и мобильное меню с анимированным бургер-иконкой (переключение в крестик). Стилизация выполнена с использованием CSS, разделенного на модули (переменные, базовые стили, компоненты). JavaScript использован для обработки событий меню и навигации.",
        imageUrl: project11Img,
        tech: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://adventure-psi-five.vercel.app",
        repoUrl: "https://github.com/blesswrld/adventure-project",
    },
];
