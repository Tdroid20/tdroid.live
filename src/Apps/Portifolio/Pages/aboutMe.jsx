import React from "react";
import '../Style/aboutMe.css'
import { OfflineWeb } from "../../Maintenance/offline";
import { AboutHeaderComponents } from "../Components/header";


const AboutMePage = () => {
    let pre_alpha = false;
    if (pre_alpha) {
        return (
            <div>
             <OfflineWeb />
            </div>
        )
    }

    return (
    <div className="Body">
        <AboutHeaderComponents />
        <h1 className="title_about">Hello World! ❤</h1>
    </div>
    )
};

export default AboutMePage;