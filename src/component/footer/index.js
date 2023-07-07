import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Divider } from "@mui/material";
import './Footer.scss';

export default function Footer() {
    return (
        <div className="FFMD">
            <div className="FMD">
                <div className="FMDer">ER</div>
                <div className="FMDa">
                    <div className="FMDaa">Home</div>
                    <div className="FMDaa">About</div>
                    <div className="FMDaa">Service<KeyboardArrowDownIcon /></div>
                    <div className="FMDaa">Portfolio</div>
                    <div className="FMDaa">Resources<KeyboardArrowDownIcon /></div>
                </div>
                <div className="FMDcm">
                    <div className="FMDcma"><LinkedInIcon/></div>
                    <div className="FMDcma"><InstagramIcon/></div>
                    <div className="FMDcma"><TwitterIcon/></div>
                </div>
            </div>
            <Divider/>
            <div className="FMDf">The site was created in 2023 by Ravi Prakash on ReactJS</div>
        </div>
    );
}