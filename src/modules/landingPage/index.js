import React from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import './LandingPage.scss';

export default function LandingPage() {
    return (
        <div className="LPD">
            <div>
                <div className="LPDta">Web Design & Infographics for marketplaces</div>
                <div className="LPDtb">With experience and passion for creating websites that will impress your customers and help your business grow</div>
                <div className="LPDtc">I will work with you to create a custom website that perfectly represents your brand</div>
                <div className="LPDb">
                    <div className="LPDba">Contact me <MailOutlineIcon className="LPDbai"/></div>
                    <div className="LPDbb">Watch video <PlayArrowOutlinedIcon className="LPDbbi"/> </div>
                </div>
            </div>
            <div>
            <img src="https://raw.githubusercontent.com/raviprakash11/bin/master/hologram1.png" alt="hologram1" className="LDPi"/>
            </div>
        </div>
    );
}