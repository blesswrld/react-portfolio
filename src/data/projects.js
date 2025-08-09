import irvasProjectImg from "../assets/images/projects/irvas-project.jpg";
import loanProjectImg from "../assets/images/projects/loan-project.jpg";
import pictureProjectImg from "../assets/images/projects/picture-project.jpg";
import foodProjectImg from "../assets/images/projects/food-project.jpg";
import restCountriesImg from "../assets/images/projects/rest-countries-api.jpg";
import filmixProjectImg from "../assets/images/projects/filmix-project.jpg";
import codesyncPlatformImg from "../assets/images/projects/codesync-platform.jpg";
import pingmeMessangerImg from "../assets/images/projects/pingme-messanger.jpg";
import ceramicsoulImg from "../assets/images/projects/ceramic-soul.jpg";
import flowstateKanbanImg from "../assets/images/projects/flowstate-kanban.jpg";
import momentumTrackerImg from "../assets/images/projects/momentum-tracker.jpg";

export const projectsData = [
    {
        title: "Irvas Project (Лендинг)",
        description:
            "Адаптивный лендинг, сверстанный по макету из Figma. Реализована интерактивность с помощью JavaScript, включая модальные окна, формы, слайдер и калькулятор для подбора окон. Стилизация выполнена с использованием CSS.",
        imageUrl: irvasProjectImg,
        tech: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://irvas-project.vercel.app",
        repoUrl: "https://github.com/blesswrld/irvas-project",
    },
    {
        title: "Loan Project (Лендинг)",
        description:
            "Адаптивный многостраничный сайт, сверстанный по макету Figma. Стилизация реализована с использованием Sass. JavaScript применен для создания интерактивных элементов. Интегрирован YouTube API для динамической подгрузки видео.",
        imageUrl: loanProjectImg,
        tech: ["HTML", "Sass", "JavaScript", "API Integration"],
        liveUrl: "https://loan-project-phi.vercel.app",
        repoUrl: "https://github.com/blesswrld/loan-project",
    },
    {
        title: "Picture Project (Лендинг)",
        description:
            "Адаптивный лендинг по макету Figma с интерактивными элементами на JavaScript: модальные окна (включая popup по таймеру), формы и слайдер. Реализована работа с JSON Server для имитации бэкенда.",
        imageUrl: pictureProjectImg,
        tech: ["HTML", "JavaScript", "JSON Server", "CSS"],
        liveUrl: "https://picture-project-xi.vercel.app",
        repoUrl: "https://github.com/blesswrld/picture-project",
    },
    {
        title: "Food Project (Лендинг)",
        description:
            "Адаптивный лендинг по макету Figma. С помощью JavaScript реализованы интерактивные элементы: модальные окна и формы. Настроен JSON Server для динамической подгрузки данных и имитации отправки форм.",
        imageUrl: foodProjectImg,
        tech: ["HTML", "JavaScript", "JSON Server", "CSS"],
        liveUrl: "https://food-project-amber-phi.vercel.app",
        repoUrl: "https://github.com/blesswrld/food-project",
    },
    {
        title: "Rest Countries Project (Веб-приложение)",
        description:
            "Веб-приложение на React для исследования стран мира через Rest Countries API. Позволяет переключать темы, просматривать список стран, фильтровать их по названию или региону и изучать подробную информацию о выбранной стране.",
        imageUrl: restCountriesImg,
        tech: ["React", "JS (Hooks)", "API Integration", "Styled Components"],
        liveUrl: "https://rest-countries-api-ten-xi.vercel.app",
        repoUrl: "https://github.com/blesswrld/REST-Countries-Api",
    },
    {
        title: "Filmix (Веб-приложение)",
        description:
            "Веб-приложение для поиска информации о фильмах и сериалах. Использует Kinopoisk API для получения актуальных данных: списки популярных фильмов, постеры, описания и рейтинги. Позволяет пользователям удобно навигироваться по каталогу.",
        imageUrl: filmixProjectImg,
        tech: ["React", "JavaScript", "API Integration", "MUI", "Vite", "Sass"],
        liveUrl: "https://filmix-react.vercel.app",
        repoUrl: "https://github.com/blesswrld/filmix-react",
    },
    {
        title: "CodeSync (Платформа для созвонов)",
        description:
            "Платформа для видеоконференций на Next.js. Реализованы групповые звонки с помощью Stream.io и аутентификация через Clerk. Интерфейс построен на Shadcn UI и Tailwind CSS. В качестве базы данных используется Convex.",
        imageUrl: codesyncPlatformImg,
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
        liveUrl: "https://codesync-react-platform.vercel.app",
        repoUrl: "https://github.com/blesswrld/CodeSync-react-platform",
    },
    {
        title: "PingMe (Мессенджер)",
        description:
            "Веб-мессенджер на React с обменом сообщениями в реальном времени через Socket.io. Для хранения файлов интегрировано облачное хранилище Yandex.Cloud. В качестве базы данных используется MongoDB. Стилизация на Tailwind CSS.",
        imageUrl: pingmeMessangerImg,
        tech: [
            "React",
            "JavaScript",
            "Socket.io",
            "MongoDB",
            "Zustand",
            "Yandex.Cloud",
            "Tailwind CSS",
            "Vite",
        ],
        liveUrl: "https://pingme-react-messanger.onrender.com",
        repoUrl: "https://github.com/blesswrld/PingMe-react-messanger",
    },
    {
        title: "Ceramic Soul (Многостраничный сайт)",
        description:
            "Адаптивный сайт для студии керамики, разработанный для демонстрации и продажи изделий. Сверстан по макету из Figma, стилизация выполнена с использованием Sass. JavaScript применен для интерактивных элементов. Проект собран с помощью Vite.",
        imageUrl: ceramicsoulImg,
        tech: ["HTML", "Sass", "JavaScript", "Vite"],
        liveUrl: "https://ceramic-soul.vercel.app",
        repoUrl: "https://github.com/blesswrld/ceramic-soul",
    },
    {
        title: "FlowState (Канбан-доска)",
        description:
            "Интерактивный Канбан-менеджер на Next.js с чистой архитектурой на кастомных хуках. Реализован drag-and-drop задач с помощью dnd-kit, создание, удаление, поиск и фильтрация. Состояние сохраняется в localStorage. Для улучшения UX встроены toast-уведомления и анимация конфетти.",
        imageUrl: flowstateKanbanImg,
        tech: [
            "Next.js",
            "React (Hooks)",
            "TypeScript",
            "dnd-kit",
            "Tailwind CSS",
            "Shadcn UI",
            "Sonner (Toasts)",
            "lucide-react",
        ],
        liveUrl: "https://flowstate-kanban.vercel.app",
        repoUrl: "https://github.com/blesswrld/flowstate-kanban",
    },
    {
        title: "Momentum (Трекер привычек)",
        description:
            "Минималистичный трекер привычек на Next.js. Позволяет добавлять кастомные привычки с периодом до года, отслеживать прогресс в интерактивной сетке и видеть счетчик оставшихся дней. Реализован поиск и сохранение в localStorage. UX улучшен за счет toast-уведомлений и анимации конфетти.",
        imageUrl: momentumTrackerImg,
        tech: [
            "Next.js",
            "React (Hooks)",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "Sonner (Toasts)",
            "react-confetti",
            "lucide-react",
        ],
        liveUrl: "https://momentum-tracker-lyart.vercel.app",
        repoUrl: "https://github.com/blesswrld/momentum-tracker",
    },
];
