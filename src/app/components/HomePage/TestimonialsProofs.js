'use client';

import React from "react";
import CountUp from 'react-countup';

export default function TestimonialsProofs({number, item}) {
    return(
        <div className="text-white m-auto pb-6 md:pb-[50px] text-center font-sans pt-9 px-6">
            <h2 className="text-[38px] md:text-[55px] pb-2.5 leading-[35px]">
                <CountUp
                    end={number} 
                    duration={2}   
                />
            </h2>
            <h5 className="text-[18px] pb-2.5 leading-[1.2]">{item}</h5>
        </div>
    )
}
    