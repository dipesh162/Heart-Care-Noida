import React from "react";

// Components
import { Facilities } from "@component/app/static/HomePage/Facilities";
import FacilityCta from "./FacilityCta";

export default function FacilitiesMenu() {
    
    return(
        <div className="border-[1px] border-[#eaeaea] rounded-[5px]"> 
            <h4 className="text-[20px] leading-[30px] px-[30px] py-[15px] bg-[#13c5dd] rounded-t-[5px] font-bold text-white">Facilities</h4>
            {Facilities.map((facility, i)=>(
                <FacilityCta
                    key={i}
                    name={facility.name}
                    link={facility.link}
                />
            ))}
        </div>
    )
}

