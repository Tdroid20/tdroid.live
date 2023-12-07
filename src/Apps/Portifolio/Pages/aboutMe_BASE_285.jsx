import React from "react";
import '../Style/aboutMe.css'
import { OfflineWeb } from "../../Maintenance/offline";
import { AboutHeaderComponents } from "../Components/header";
import { mockupApi } from "../../../services/Mock/setup";


const AboutMePage = () => {
    let pre_alpha = mockupApi.map(x => x.environment.isPreAlpha);
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
