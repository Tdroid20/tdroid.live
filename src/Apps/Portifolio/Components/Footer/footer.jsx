import React from "react";
import SKFLogo from '../../Assets/Images/PNG/SkyrusProductionLettersFull.png'
import './footer.css'
import { InstagramIcon, YoutubeIcon } from "../icon/icons";

export const FooterComponent = () => {
    return (
        <footer>
            <div className="row justify-content-center mb-0 pt-5 pb-0 row-2 px-3">
                <div className="col-12">
                    <div className="row row-2">
                        <div className="col-sm-3 text-md-center"><h5><span></span><b><img src={SKFLogo} alt="Skyrus Productions" className="footer_SKFLogo" /></b></h5></div>
                        <div className="col-sm-3  my-sm-0 mt-5"><ul className="list-unstyled">
                            <li className="mt-0"><i className="fa-solid fa-server"></i> API</li>
                            <li><i className="fa-regular fa-gem"></i> Beta Presence</li>
                            <li><i className="fa-solid fa-clock-rotate-left"></i> ChangeLogs</li>
                        </ul>
                        </div>
                        <div className="col-sm-3  my-sm-0 mt-5">
                            <ul className="list-unstyled">
                                <li className="mt-0">HUB/Lobby</li>
                                <li>Use Cases</li>
                                <li>Customers Services</li>
                            </ul>
                        </div>
                        <div className="col-sm-3  my-sm-0 mt-5"><ul className="list-unstyled"><li className="mt-0">Company</li><li>About</li><li>Careers- <span className="Careers">We're-hiring</span></li></ul></div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-0 pt-0 row-1 mb-0  px-sm-3 px-2">
                <div className="col-12">
                    <div className="row my-4 row-1 no-gutters">
                        <div className="col-sm-3 col-auto text-center"><small>&#9400; Skyrus Productions S.A</small></div><div className="col-md-3 col-auto "></div><div className="col-md-3 col-auto"></div>
                        <div className="col  my-auto text-md-left  text-right footer_gap ">
                            <small><span className="">contact@tdroid.live</span></small>
                            <YoutubeIcon /> <InstagramIcon />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}