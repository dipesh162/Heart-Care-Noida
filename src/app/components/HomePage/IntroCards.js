// React
import React from "react";

// Components
import IntroCard from "./IntroCard";

// Static
import IntroCardInfo from "@component/app/static/HomePage/IntroCardInfo";


export default function IntroCards() {
    return(
        <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-0 w-full md:max-w-[1170px] font-sans mx-auto px-4 -mt-14 lg:-mt-20 ">
            {
                IntroCardInfo.map((card,i)=>(
                    <IntroCard
                        key={i}
                        bgColor={card.bgColor}
                        heading={card.heading}
                        subHeading={card.subHeading}
                    /> 
                ))
            }
        </div>
    )
}
