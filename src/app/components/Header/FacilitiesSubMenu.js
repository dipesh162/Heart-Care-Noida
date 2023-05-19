// React
import React from "react";

// Static
import { Facilities } from "@component/app/static/Facilities";


export default function FacilitiesSubMenu(){

    return(
        <ul role="menu" class="text-[15px] pt-2.5 px-0 pb-3">
            {Facilities.map((facility,i)=>(
                <li className="p-0" key={i}>
                    <a className="hover:text-[#13c5dd] hover:bg-[#434ea11a] font-sans text-[#666666] pt-1.5 pr-2.5 pb-2 pl-5 block" href={facility.link}>
                        {facility.name}
                    </a>
                </li>
            ))
            }
        </ul>
    )
}