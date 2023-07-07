import React from "react";
import EastIcon from '@mui/icons-material/East';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './NavBar.scss';

export default function NavBar(){
    return(
        <div className="NBD">
            <div className="NBDer">ER</div>
            <div className="NBDa">
                <div className="NBDaa">Home</div>
                <div className="NBDaa">About</div>
                <div className="NBDaa">Service<KeyboardArrowDownIcon/></div>
                <div className="NBDaa">Portfolio</div>
                <div className="NBDaa">Resources<KeyboardArrowDownIcon/></div>
            </div>
            <div className="NBDcm">
                <div className="NBDcma">Contact me<EastIcon className="NBDcmaa"/></div>
            </div>
        </div>
    );
}