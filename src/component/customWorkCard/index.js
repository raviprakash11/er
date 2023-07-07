import React from "react";
import './CustomWorkCard.scss';

export default function CustomWorkCard({serName, serDesc, imgSrc, imgSrc1, isFlag}) {
    return(
        <div className="CWCD">
            <div className="CWCDt">
                <img src={imgSrc1} alt="macbook" style={{width:'100px', height:'100px'}} />
                <div className="CWCDtH">{serName}</div>
                <div className="CWCDtC">{serDesc}</div>
            </div>
            <img src={imgSrc} alt="macbook" className="CWCDi"/>
        </div>
    );
}