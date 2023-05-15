import React, { useEffect, useState } from "react";
import carouselSlides from "@component/app/static/HomePage/CarouselSlides";


export default function IntroSection() {

    const [carouselImageIndex, setCarouselImageIndex] = useState(carouselSlides[0].imgIndex)
    const [carouselImageCaption, setCarouselImageCaption] = useState(carouselSlides[0].caption)


    useEffect(() => {
        const imagesSliderTimer = setTimeout(() => {
            if (carouselImageIndex === 3) {
                setCarouselImageIndex(carouselSlides[0].imgIndex)
                setCarouselImageCaption(carouselSlides[0].caption)
            } else {
                setCarouselImageIndex(carouselSlides[carouselImageIndex].imgIndex)
                setCarouselImageCaption(carouselSlides[carouselImageIndex].caption)
            }
        }, 5000)

        return () => {
            clearTimeout(imagesSliderTimer)
        }
    }, [carouselImageIndex])


    return (
        <div
            className="flex justify-center bg-no-repeat bg-cover bg-position w-full h-[400px] md:h-[600px]"
            style={{
                backgroundImage: `url("/images/Home/carousel_${carouselImageIndex}.png")`,
                transition: 'background-image 1s ease-in-out',
                backgroundPosition: '100%',
            }}
        >
            <div className="p-6 lg:p-4">
                <div className="lg:w-[1170px] mx-auto">
                    <div className="font-sans mt-[85px] md:mt-[150px] lg:mt-[150px] align-middle left-0 right-0 text-[22px]  sm:text-[32px] md:text-[50px] text-center lg:text-left leading-6 sm:leading-9 md:leading-[50px] w-full lg:w-[500px] font-semibold mx-auto lg:mx-0">
                        {carouselImageCaption}
                    </div>
                </div>
            </div>
        </div>
    )
}