import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // Импортировали библиотеку
import "./Contact.css";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";

import { FcCheckmark } from "react-icons/fc";
import { MdError } from "react-icons/md";
import { VscBracketError } from "react-icons/vsc";

// Импортируем наши GIF
/* import successGif from "../../assets/gifs/feedback/success.gif"; */
/* import errorGif from "../../assets/gifs/feedback/error.gif"; */

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [sendStatus, setSendStatus] = useState("");

    // Улучшение: используем useEffect для сброса статуса.
    // Это чище, чем создавать таймер при каждом рендере.
    useEffect(() => {
        if (sendStatus) {
            const timer = setTimeout(() => {
                setSendStatus("");
            }, 5000); // 5 секунд

            return () => clearTimeout(timer); // Очистка таймера при размонтировании
        }
    }, [sendStatus]); // Этот эффект запустится только когда sendStatus изменится

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isSending) return;

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            console.error(
                "ОШИБКА: Ключи EmailJS не загружены из .env! Проверьте файл .env и ПЕРЕЗАПУСТИТЕ сервер."
            );
            setSendStatus("config_error");
            alert(
                "Ошибка конфигурации EmailJS. Проверьте .env и перезапустите сервер (см. консоль F12)."
            );
            return;
        }

        setIsSending(true);
        setSendStatus("");

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(
                (result) => {
                    // Успешно отправили
                    setSendStatus("success");
                    form.current.reset(); // Очищаем поля формы

                    const timer = setTimeout(() => {
                        setSendStatus(""); // Сбрасываем статус через 6 секунд
                    }, 6000);
                },

                (error) => {
                    // Произошла ошибка
                    console.error("Ошибка отправки EmailJS:", error.text);
                    setSendStatus("error");
                    // Показываем ошибку от EmailJS, если она есть
                    alert(
                        `Не удалось отправить сообщение. Ошибка: ${
                            error.text ||
                            "Неизвестная ошибка. Проверьте ключи и настройки EmailJS."
                        }`
                    );
                }
            )
            .finally(() => {
                // Этот блок выполнится в любом случае (успех или ошибка)
                setIsSending(false); // Говорим, что закончили отправку
            });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Свяжитесь со мной</h2>
                <p className="contact-intro">
                    Готов обсудить ваш проект, ответить на вопросы или просто
                    пообщаться. Выберите удобный способ связи:
                </p>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Контактная информация:</h3>
                        <p>📍 Город: Грозный, Чеченская Республика</p>
                        <p>
                            📧 Email:{" "}
                            <a href="mailto:gelgaev.dev@mail.ru">
                                gelgaev.dev@mail.ru
                            </a>
                        </p>
                        <p>
                            💬 Telegram:{" "}
                            <a
                                href="https://t.me/timaamn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @timaamn
                            </a>
                        </p>
                        <div className="social-icons contact-socials">
                            <a
                                href="https://github.com/blesswrld"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://t.me/timaamn"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Telegram"
                            >
                                <FaTelegramPlane />
                            </a>
                        </div>
                    </div>

                    {/* Привязываем ref={form} к нашей форме */}
                    <form
                        className="contact-form"
                        ref={form}
                        onSubmit={handleSubmit}
                    >
                        <h3>Или отправьте сообщение прямо сейчас:</h3>
                        <div className="form-group">
                            <label htmlFor="name">Ваше имя:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Ваш Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Сообщение:</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        {/* ---- Зона кнопки и сообщений о статусе ---- */}
                        <div className="form-footer">
                            <button
                                type="submit"
                                className="btn"
                                disabled={isSending}
                            >
                                {isSending
                                    ? "Отправка..."
                                    : "Отправить сообщение"}
                            </button>

                            {/* Контейнер для красивых сообщений */}
                            <div className="status-message-container">
                                {sendStatus === "success" && (
                                    <div
                                        className="status-message success"
                                        style={{ marginTop: 10 }}
                                    >
                                        <FcCheckmark />
                                        <span>
                                            Ваше сообщение успешно отправлено!
                                        </span>
                                    </div>
                                )}
                                {sendStatus === "error" && (
                                    <div
                                        className="status-message error"
                                        style={{ marginTop: 10 }}
                                    >
                                        <MdError />
                                        <span style={{ marginLeft: 5 }}>
                                            Ошибка отправки. Попробуйте позже
                                            или свяжитесь другим способом.
                                        </span>
                                    </div>
                                )}
                                {sendStatus === "config_error" && ( // Сообщение об ошибке конфигурации
                                    <div
                                        className="status-message error"
                                        style={{ marginTop: 10 }}
                                    >
                                        <VscBracketError />
                                        <span style={{ marginLeft: 5 }}>
                                            Ошибка конфигурации отправки.
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
