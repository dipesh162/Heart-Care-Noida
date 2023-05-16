import React from "react";

// Components
import BoldedDivider from "../BoldedDivider";

export default function AboutFirstHalf(){
    return(
        <>
            <div className="grow lg:flex-grow-['unset'] basis-0 lg:basis-['unset'] lg:px-[15px] lg:w-[60%]">
                <h4 className="pb-4  font-semibold text-[21px] md:text-[24px] lg:text-[28px] leading-[30px]">About Dr. Birinder Singh Thind</h4>
                <BoldedDivider/>

                <div className="w-full relative lg:w-[388px] mt-[29px] mx-auto lg:mx-0 lg:ml-4 block">
                    <img src='/images/doctor.jpg' height={'auto'} width="100%"></img>
                </div>
            </div>
        </> 
    )
}