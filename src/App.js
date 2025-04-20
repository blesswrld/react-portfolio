import React from "react";
import "./index.css"; // Подключаем основные стили

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

function App() {
    return (
        <>
            {" "}
            <Navbar />
            {/* Переключение темы в доработке... */}
            {/* <ThemeToggle /> */}
            <main>
                {" "}
                {/* Обертка для основного контента */}
                <Hero />
                <About />
                <Skills />
                <Services />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
