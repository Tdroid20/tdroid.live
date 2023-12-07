import React from "react";
import '../../services/Mock/setup.json'
import { mockupApi } from "../../services/Mock/Production/setup";
import './offline.css'
import Warning from './Assets/Icons/Warning3D.png'

export const OfflineWeb = () => {
    return (
        <div className="body_offline">
            <img src={Warning} alt="⚠" className="offline_icon" />
            <h1 className="title_offline">{mockupApi.map(x => x.maintenance.translation.pt_BR.title)}</h1>
            <p className="description_offline">{mockupApi.map(x => x.maintenance.translation.pt_BR.description)}</p>
        </div>
    )
};