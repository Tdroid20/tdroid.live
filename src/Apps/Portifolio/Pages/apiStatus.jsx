import React, { useEffect, useState } from "react";
import { AboutHeaderComponents } from "../Components/header";
import { FooterComponent } from "../Components/Footer/footer";
import '../Style/apiStatus.css'
import { API_SK } from "../../api/api";

export const APIStatus = () => {
    const [details, setDetails] = useState({});

    const getStatus = async () => {
        try {
            const response = await API_SK.get("/");
            setDetails(response.data);
            console.log(process.env.REACT_APP_API)
        } catch(error) {
            console.log(process.env.REACT_APP_API)
            console.error("Error fetching API status:", error);
        }
    }

    useEffect(() => {
        getStatus();
    }, [])

    return (
        <div className="Body">
            <AboutHeaderComponents />
            <div className="apiStatus_TitleDiv">
                <h1 id="apiStatusTitle">API Status</h1>
            </div>

            <div className="apiS_container">

                <div className="api_messageSection">
                    <p className="apiS_APIMessage">{details?.message || 'Api is offline'}</p>
                </div>
                <div className="apiS_sections">
                    <div className="apiStatusBasic">
                        <p className="apiS_SectionTitle">{details?.name || "API_Offline"}</p>
                        <p className="apiS_SectionValue">Versão: {details?.version || "API_Offline"}</p>
                        <p className="apiS_SectionValue">Status: {details?.status || "API_Offline"}</p>
                        <p className="apiS_SectionValue">hub: {details?.hub || "API_Offline"}</p>
                    </div>

                    <div className="apiStatusBasic">
                        <p className="apiS_SectionTitle">Apps</p>
                        <div className="apiS_arraySections">
                            { details?.server && details.server.length > 0 ? (
                                details.server.map((response) => (
                                <div key={response.type}>
                                    <div className="apiS_arraySection">
                                        <p className="apiS_SectionValue">Nome: { response.app.name }</p>
                                        <p className="apiS_SectionValue">Tipo: { response.app.type === "app/socialNetwork" ? "Rede Social" : "Portifolio" }</p>
                                        <p className="apiS_SectionValue">Provedor: { response.app.copyright.provider ?? "No Provider" }</p>
                                        <p className="apiS_SectionValue">Aplicativo Integrado: { response.app.hasIntegration === true ? "Sim" : "Não" }</p>
                                    </div>
                                </div>
                            ))
                            ) : (
                                <p>No apps found</p>
                            )}
                        </div>
                    </div>

                    <div className="apiStatusBasic">
                        <p className="apiS_SectionTitle">Desenvolvedores</p>
                        <p className="apiS_SectionValue">Nome: Offline</p>
                        <p className="apiS_SectionValue">Atuação: API_Offline</p>
                        <p className="apiS_SectionValue">Skyrus: No Named</p>
                        <p className="apiS_SectionValue">Formação: Offline</p>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}