import React from "react";

// Components
import BoldedDivider from "../BoldedDivider";

export default function AboutScreen(){

    return (
        <div
            className="flex justify-center bg-no-repeat bg-cover bg-position w-full h-[400px] md:h-[508px]"
            style={{
                backgroundImage: `url("/images/Home/carousel_1.png")`,
                transition: 'background-image 1s ease-in-out',
                backgroundPosition: '100%',
            }}
        >
            <div className="p-6 lg:p-4">
                <div className="lg:w-[1170px] mx-auto w-fit">
                    <div className="w-full lg:w-[58%] font-sans text-white">
                        <div className="pb-[17px] mt-[85px] md:mt-[150px] lg:mt-[150px] align-middle left-0 right-0 text-[22px]  sm:text-[32px] md:text-[50px] text-center lg:text-left leading-[30px] md:leading-[50px] font-semibold mx-auto lg:mx-0">
                            About Dr. Birinder Thind
                        </div>
                        <BoldedDivider bottomValue="0px"/>
                        <p className="text-base md:text-[18px] leading-[26px] mb-[15px] pt-[1px] text-center md:text-left">A Cardiologist in Noida and has an experience of 17 years in this field.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}