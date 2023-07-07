import React from "react";
import EastIcon from '@mui/icons-material/East';
import './WorkPage.scss';
import CustomWorkCard from "../../component/customWorkCard";

export default function WorkPage(){
    return(
        <div className="WPD">
            <div className="WPDC">
                <div className="WPCh">Why work with me</div>
                <div className="WPCc">
                    <div className="WPCca">
                        <div className="WPCcat">I accompany you</div>
                        <div className="WPCcat">every step of the way</div>
                    </div>
                    <div className="WPCcb">
                        <div className="WPCcbb">Contact me <EastIcon className="WPCcbbb"/></div>
                    </div>
                </div>
                <div className="WPCf">
                    <div className="WPCft">With enough successful projects under my belt, I've established</div>
                    <div className="WPCft">a simple yet effective process that will take you from idea to launch!</div>
                </div>
            </div>
            <div className="WPCC">
                <CustomWorkCard serName="4. Support" serDesc="We maintain a close relationship and ongoing communication with your team to provide long-term assistance with any design or developemnt needs" imgSrc="https://raw.githubusercontent.com/raviprakash11/bin/master/support.png" imgSrc1="https://raw.githubusercontent.com/raviprakash11/bin/master/chat.png"/>
                <CustomWorkCard serName="4. Support" serDesc="We maintain a close relationship and ongoing communication with your team to provide long-term assistance with any design or developemnt needs" imgSrc="https://raw.githubusercontent.com/raviprakash11/bin/master/support.png" imgSrc1="https://raw.githubusercontent.com/raviprakash11/bin/master/chat.png"/>
                <CustomWorkCard serName="4. Support" serDesc="We maintain a close relationship and ongoing communication with your team to provide long-term assistance with any design or developemnt needs" imgSrc="https://raw.githubusercontent.com/raviprakash11/bin/master/support.png" imgSrc1="https://raw.githubusercontent.com/raviprakash11/bin/master/chat.png"/>
                <CustomWorkCard serName="4. Support" serDesc="We maintain a close relationship and ongoing communication with your team to provide long-term assistance with any design or developemnt needs" imgSrc="https://raw.githubusercontent.com/raviprakash11/bin/master/support.png" imgSrc1="https://raw.githubusercontent.com/raviprakash11/bin/master/chat.png"/>
            </div>
        </div>
    );
}