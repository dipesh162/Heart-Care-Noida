import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import HeartIcon from "../HeartIcon";

// Icons
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";


export default function FacilityCard({heading, details, ctaLink}) {
    return(
        <div className="text-white font-sans px-[18px] grow basis-0">
            <div className="flex justify-center md:justify-start">
                <HeartIcon/>
            </div>
            <div className="text-center md:text-left">
                <h4 className="pb-[5px] md:pb-4 font-medium text-[20px] leading-[30px] text-[#333333]">{heading}</h4>
                <p className=" leading-6 pb-2.5 text-[#777777] text-[14px]">{details}</p>
                <a target="_blank" href={ctaLink} className="pt-1.5 text-base text-[#13C5DD] text-[14px]">
                    View Details
                    <FontAwesomeIcon icon={faGreaterThan} fontSize={9} className="ml-1 mb-[1px]"/>
                </a>
            </div>
        </div>
    )
}
