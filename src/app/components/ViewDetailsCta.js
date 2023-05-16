import React from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function ViewDetailsCta({ctaLink}){
    return(
            <a href={`${ctaLink}`} target="_blank"  className="pt-1.5 text-base text-[#13C5DD] text-[14px]">
                View Details
                <FontAwesomeIcon icon={faAngleRight} fontSize={9} className="ml-1 mb-[1px]"/>
            </a>
    )
}