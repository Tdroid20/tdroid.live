import React from "react";
import { AboutHeaderComponents } from "../Components/header";
import { FooterComponent } from "../Components/Footer/footer";
import '../Style/apiStatus.css'

export const APIStatus = () => {
    return (
        <div className="Body">
            <AboutHeaderComponents />
            <div className="apiStatus_TitleDiv">
                <h1 id="apiStatusTitle">API Status</h1>
            </div>
            <div className="apiS_container">

            </div>
            <FooterComponent />
        </div>
    )
}