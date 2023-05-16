import React from "react";
const tailwindConfig = require('tailwind.config.js')

// Static
import Services from "@component/app/static/HomePage/Services";

// Components
import ServiceCard from "../ServiceCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/swiper-bundle.min.css";
import "swiper/css/autoplay"

export default function ServicesGallery() {
    SwiperCore.use([Autoplay]);

    let smBreakPoint = Number(tailwindConfig.theme.screens.sm.replace("px", ''))
    let mdBreakPoint = Number(tailwindConfig.theme.screens.md.replace("px", ''))

    const isMobile = window.innerWidth <= 766
    const isTablet = (window.innerWidth > 767) && (window.innerWidth <= 1199)
    const isDesktop = window.innerWidth > 1199

    return(
        <div>
            {/* {!mdBreakPoint ? */}
           <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={isTablet ? 2 : isMobile ? 1 : 3}
                // slidesPerView={3}

                // slidesPerView={'auto'}
                navigation={isTablet ? true : false}
                centeredSlides={true}
                //   className={isDesktop && `w-[800px]`}
                observer={true}
                observeParents={true}
                watchOverflow
                width={'100%'}
                // observer={'true'}
                //   className='flex justify-center'
                // width={100}
                // breakpoints={{
                //     // 766:{
                //     //     slidesPerView:1
                //     // },
                //     1199: {
                //         slidesPerView:2
                //     },
                //     1170:{  
                //         slidesPerView:3
                //     }
                // }}

                autoplay={!isDesktop ? {
                    delay: 2500,
                    disableOnInteraction: false,
                  }: false}          
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {Services.map((service,i)=>(
                    <SwiperSlide key={i} virtualIndex={i} className="w-[200px]">
                        <ServiceCard
                            key={i}
                            imgPath={service.imgPath}
                            name={service.name}
                            details={service.details}
                            link={service.link}
                            detailslineClamp={service.detailslineClamp}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

             {/* :
                <div>
                {Services.map((service,i)=>(
                    <ServiceCard
                    key={i}
                    imgPath={service.imgPath}
                    name={service.name}
                    details={service.details}
                    link={service.link}
                    detailslineClamp={service.detailslineClamp}
                />
                ))}
                </div>
            } */}
        </div>
    )
}
