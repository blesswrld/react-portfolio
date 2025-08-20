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

import ScrollReveal from "./components/ScrollReveal/ScrollReveal";

import PrivacyPolicyPage from "./components/PrivacyPolicyPage/PrivacyPolicyPage";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"; // Добавляем useLocation
import { Link } from "react-router-dom"; // Добавляем Link
import { FaArrowLeft } from "react-icons/fa"; // Добавляем иконку

// Создаем отдельный компонент для кнопки "Назад"
const BackButton = () => {
    const location = useLocation();

    // Показываем кнопку только если мы на странице /privacy-policy
    if (location.pathname !== "/privacy-policy") {
        return null;
    }

    return (
        <Link to="/" className="back-to-home-btn">
            <FaArrowLeft />
            <span>Назад</span>
        </Link>
    );
};

function MainPage() {
    return (
        <>
            <main>
                <Hero />
                <ScrollReveal>
                    <About />
                </ScrollReveal>
                <ScrollReveal>
                    <Skills animationClass="fade-in-left" />
                </ScrollReveal>
                <ScrollReveal>
                    <Services />
                </ScrollReveal>
                <ScrollReveal>
                    <Portfolio />
                </ScrollReveal>
                <ScrollReveal>
                    <Contact />
                </ScrollReveal>
            </main>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <BackButton />

            <Routes>
                <Route
                    path="/privacy-policy"
                    element={
                        <ScrollReveal>
                            <PrivacyPolicyPage />
                        </ScrollReveal>
                    }
                />

                <Route path="/" element={<MainPage />} />

                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>

            <ScrollReveal>
                <Footer />
            </ScrollReveal>
        </BrowserRouter>
    );
}

export default App;
