import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './TestiMoneyPage.scss';
import { Avatar } from "@mui/material";

export default function TestiMoneyPage() {
    return (
        <div className="TPD">
            <div className="TPDh">See what my customers are saying</div>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="TPDcc">
                        <Avatar alt="Remy Sharp" src="https://raw.githubusercontent.com/raviprakash11/bin/master/person4.jpg" className="TPDcca" />
                        <div className="TPDcct">
                            <p className="TPDcctm">I am extremly pleased with the work you have done. The website you developed for me is exceptaional, exceeding my expectations in terms of both aesthetics and functionality. You attention to detail, quick communication, and ability to bring my vision to life made the experience truly outstanding. Thank you for your exceptional work!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="TPDcc">
                        <Avatar alt="Remy Sharp" src="https://raw.githubusercontent.com/raviprakash11/bin/master/person1.jpg" className="TPDcca" />
                        <div className="TPDcct">
                            <p className="TPDcctm">I am extremly pleased with the work you have done. The website you developed for me is exceptaional, exceeding my expectations in terms of both aesthetics and functionality. You attention to detail, quick communication, and ability to bring my vision to life made the experience truly outstanding. Thank you for your exceptional work!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="TPDcc">
                        <Avatar alt="Remy Sharp" src="https://raw.githubusercontent.com/raviprakash11/bin/master/person2.jpg" className="TPDcca" />
                        <div className="TPDcct">
                            <p className="TPDcctm">I am extremly pleased with the work you have done. The website you developed for me is exceptaional, exceeding my expectations in terms of both aesthetics and functionality. You attention to detail, quick communication, and ability to bring my vision to life made the experience truly outstanding. Thank you for your exceptional work!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="TPDcc">
                        <Avatar alt="Remy Sharp" src="https://raw.githubusercontent.com/raviprakash11/bin/master/person3.jpg" className="TPDcca" />
                        <div className="TPDcct">
                            <p className="TPDcctm">I am extremly pleased with the work you have done. The website you developed for me is exceptaional, exceeding my expectations in terms of both aesthetics and functionality. You attention to detail, quick communication, and ability to bring my vision to life made the experience truly outstanding. Thank you for your exceptional work!</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}