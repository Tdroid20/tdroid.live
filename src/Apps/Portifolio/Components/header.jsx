import React, { useState } from "react";
import './header.css';
import './Script/DownloadCV'
import { ThemeButton } from "./ThemeButton";
import CVZip from '../Assets/Documents/TdroidCV.zip'

export const AboutHeaderComponents = () => {

    const [download, setDownload] = useState("")

    return (
        <div className="about_header">
            <div className="about_header_section">
                <h1 className="about_header_title">{"<Tdroid />"}  </h1>
                <li className="about_header_list">
                    <ul className="about_header_item">
                        <a href="#title_about" className="about_header_list_text">Sobre-mim</a>
                    </ul>
                    <ul className="about_header_item">
                        <a href="#aboutSkills_title " className="about_header_list_text">Experiência</a>
                    </ul>
                    <ul className="about_header_item">
                        <a href="!#" className="about_header_list_text">Certificações</a>
                    </ul>
                    <ul className="about_header_item">
                        <a href="!#" className="about_header_list_text">Contato</a>
                    </ul>

                    <div className="about_header_divider" />

                    <ThemeButton />
                    <button className="about_header_buttonCV" id="downloadButton"><a href={CVZip} id="downloadBTN" download="TdroidCV_Richard.zip" type="application/pdf">Download CV</a></button>
                </li>
            </div>
        </div>
    )
}