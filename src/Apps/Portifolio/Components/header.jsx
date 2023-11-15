import React from "react";
import './header.css';
import { ThemeButton } from "./ThemeButton";

export const AboutHeaderComponents = () => {
    return (
        <div className="about_header">
            <div className="about_header_section">
                <h1 className="about_header_title">{"<Tdroid />"}</h1>
                <li className="about_header_list">
                    <ul className="about_header_item">
                        <a href="#title_about" className="about_header_list_text">Sobre-mim</a>
                    </ul>
                    <ul className="about_header_item">
                        <a href="!#" className="about_header_list_text">Experiência</a>
                    </ul>
                    <ul className="about_header_item">
                        <a href="!#" className="about_header_list_text">Certificações</a>
                    </ul>
                    <ul className="about_header_item">
                        <a href="!#" className="about_header_list_text">Contato</a>
                    </ul>

                    <div className="about_header_divider" />

                    <ThemeButton />
                    <button className="about_header_buttonCV">Download CV</button>
                </li>
            </div>
        </div>
    )
}