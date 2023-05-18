'use client';

// React
import React, { useState } from "react";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FacilityCta({name, link}) {

    const [showIcon, setShowIcon] = useState(false)

    const toggleIcon = () =>{
        setShowIcon(!showIcon)
    }

    return(
        <>
            <a className="pl-[25px] pr-[18px] py-4 text-[#333333] hover:text-[#13C5dd] text-[15px] hover:bg-[#eaf2fb] font-sans flex items-center justify-between border-t-[1px] border-[#eaeaea]" onMouseEnter={toggleIcon} onMouseLeave={toggleIcon} href={link}>
                {name}
                {showIcon && <FontAwesomeIcon icon={faAngleRight} fontSize={11} color="#13C5dd" className=""/>}
            </a>
        </>
    )

}