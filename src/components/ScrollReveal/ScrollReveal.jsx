import React, { useState, useEffect, useRef } from "react";

import "./ScrollReveal.css";

const ScrollReveal = ({ children, animationClass = "fade-in-up" }) => {
    const [isVisible, setIsVisible] = useState(false);

    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(
                (entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);

                        observer.unobserve(entry.target);
                    }
                },
                {
                    threshold: 0.1,
                }
            );
        });
        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);
    return (
        <div
            ref={domRef}
            // Логика добавления класса остается той же:
            // базовый класс + класс анимации, если isVisible === true
            className={`scroll-reveal ${isVisible ? animationClass : ""}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
