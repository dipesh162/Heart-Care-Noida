import React from "react";

// Components
import HeartIcon from "../HeartIcon";
import ViewDetailsCta from "../ViewDetailsCta";


export default function FacilityCard({heading, details, ctaLink}) {
    return(
        <div className="text-white font-sans px-[18px] pb-4 md:pb-10 grow basis-0">
            <div className="flex justify-center md:justify-start">
                <HeartIcon/>
            </div>
            <div className="text-center md:text-left">
                <h4 className="pb-[5px] md:pb-4 font-medium text-[20px] leading-[30px] text-[#333333]">{heading}</h4>
                <p className="opacity-[0.85] leading-6 pb-2.5 text-[#777777] text-[14px]">{details}</p>
                <ViewDetailsCta ctaLink={ctaLink}/>
            </div>
        </div>
    )
}
