import React from "react";
import './CustomCard.scss';

export default function CustomCard({serName, serDesc, imgSrc, isFlag}) {
    return(
        <div className="CCD">
            <div className="CCDt">
                <div className="CCDtH">{serName}</div>
                <div className="CCDtC">{serDesc}</div>
                <div className="CCDtB">Learn more</div>
            </div>
            <img src={imgSrc} alt="macbook" className="CCDi" style={{backgroundColor:isFlag?'#ADD8E6':'#f08080'}}/>
        </div>
    );
}