import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import './PortFolioPage.scss';

export default function PortFolioPage() {
    return (
        <div className="PPD">
            <div className="PPDt">
                <div className="PPDta">Check out my portfolio</div>
                <div className="PPDtb">Want to know what I can do? Take a look at some of the work I've created</div>
            </div>
            <div className="PPDs">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <img src="https://raw.githubusercontent.com/raviprakash11/bin/master/web1.jpg" alt="web1" className='PPDsi'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://raw.githubusercontent.com/raviprakash11/bin/master/web2.jpg" alt="web1" className='PPDsi'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>                        <div>
                        <img src="https://raw.githubusercontent.com/raviprakash11/bin/master/web6.jpg" alt="web1" className='PPDsi'/>
                    </div></SwiperSlide>
                    <SwiperSlide>                        <div>
                        <img src="https://raw.githubusercontent.com/raviprakash11/bin/master/web3.jpg" alt="web1" className='PPDsi'/>
                    </div></SwiperSlide>
                    <SwiperSlide>                        <div>
                        <img src="https://raw.githubusercontent.com/raviprakash11/bin/master/web5.jpg" alt="web1" className='PPDsi'/>
                    </div></SwiperSlide>
                    <SwiperSlide>                        <div>
                        <img src="https://raw.githubusercontent.com/raviprakash11/bin/master/web4.jpg" alt="web1" className='PPDsi'/>
                    </div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}