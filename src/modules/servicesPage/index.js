import React from "react";
import EastIcon from '@mui/icons-material/East';
import './ServicesPage.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import CustomCard from "../../component/customCard";

export default function ServicesPage() {
    return(
        <div className="SP">
            <div className="SPD">
                <div>
                    <div className="SPDmH">Highly effective</div>
                    <div className="SPDmH">services I provide</div>
                </div>
                <div>
                    <div className="SPDmB">Contact me<EastIcon className="SPDmBa"/></div>
                </div>
            </div>
            <div style={{display:'flex', flexDirection:'row', paddingTop:'0px', gap:'40px', height:'420px', width:'100%'}}>
            <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                    <CustomCard serName="Web Design" serDesc="I develop websites, from elegant and modern designs to more traditional layouts that help your business grow" imgSrc="https://raw.githubusercontent.com/raviprakash11/bin/master/webdev.png"/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <CustomCard serName="Development on Tilda" serDesc="I develop fast, perfectly responsive and SEO-optimized websites on the Tilda platform" imgSrc="https://raw.githubusercontent.com/raviprakash11/bin/master/imac.png" isFlag/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <CustomCard serName="Web Design" serDesc="I develop websites, from elegant and modern designs to more traditional layouts that help your business grow" imgSrc="https://raw.githubusercontent.com/raviprakash11/bin/master/webdev.png"/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <CustomCard serName="Development on Tilda" serDesc="I develop fast, perfectly responsive and SEO-optimized websites on the Tilda platform" imgSrc="https://raw.githubusercontent.com/raviprakash11/bin/master/imac.png" isFlag/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <CustomCard serName="Web Design" serDesc="I develop websites, from elegant and modern designs to more traditional layouts that help your business grow" imgSrc="https://raw.githubusercontent.com/raviprakash11/bin/master/webdev.png"/>
                    </SwiperSlide>
                    <SwiperSlide>
                    <CustomCard serName="Development on Tilda" serDesc="I develop fast, perfectly responsive and SEO-optimized websites on the Tilda platform" imgSrc="https://raw.githubusercontent.com/raviprakash11/bin/master/imac.png" isFlag/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}