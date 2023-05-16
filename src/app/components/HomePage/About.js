import React from "react";

// Components
import AboutFirstHalf from "./AboutFirstHalf";
import AboutSecondHalf from "./AboutSecondHalf";

export default function About(){
    return(
        <>
            <div className="max-w-[1170px] px-[25px] mx-auto pt-5 md:pb-[52px] pb-[18px] lg:pt-14 font-sans flex flex-col md:flex-row justify-between text-[#333333]">
                <AboutFirstHalf/>
                <AboutSecondHalf/>
            </div>
        </>
    )
}