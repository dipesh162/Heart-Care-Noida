// React
import React from "react";

// Components
import FacilityCard from "./FacilityCard";

// Static
import {Facilities} from "@component/app/static/Facilities";


export default function FacilitiesCards() {
    return(
        <div className="py-[60px] md:grid mg:gap-[30px] md:grid-cols-2 flex lg:flex flex-col lg:flex-row gap-[30px] lg:gap-0 w-full md:max-w-[1170px] font-sans mx-auto pt-[60px] lg:pt-[48px] pb-12">
            {
                Facilities.map((card,i)=>(
                    card.cardInfo &&
                    <FacilityCard
                        key={i}
                        heading={card.name}
                        details={card.cardDetails}
                        ctaLink={card.link}
                    /> 
                ))
            }
        </div>
    )
}
