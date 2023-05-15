import React from "react";

// Components
import FacilityCard from "./FacilityCard";

// Static
import FacilityCardInfo from "@component/app/static/HomePage/FacilityCardInfo";


export default function FacilitiesCards() {
    return(
        <div className="md:grid mg:gap-[30px] md:grid-cols-2 flex lg:flex flex-col lg:flex-row gap-[30px] lg:gap-0 w-full md:max-w-[1170px] font-sans mx-auto pt-[60px] ">
            {
                FacilityCardInfo.map((card,i)=>(
                    <FacilityCard
                        key={i}
                        heading={card.heading}
                        details={card.details}
                        ctaLink={card.ctaLink}
                    /> 
                ))
            }
        </div>
    )
}
