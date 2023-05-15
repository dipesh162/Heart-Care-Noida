import React from "react";


export default function IntroCard({bgColor, heading, subHeading}) {
    return(
        <div className="text-white pt-6 px-[18px] md:px-6 pb-9 lg:pt-[35px] lg:pr-[25px] lg:pb-[48px] lg:pl-[38px] basis-0 grow font-sans" style={{backgroundColor:bgColor}}>
            <h3 className="pb-2.5 md:pb-4 font-medium text-[22px] leading-[30px]">{heading}</h3>
            {subHeading ? <p className="text-base leading-6 pb-2.5">{subHeading}</p>:
                <>
                    <ul>
                        <li className="flex justify-between border-b-[1px] border-[#e1e1e126] pt-1 px-0 pb-[13px] text-base">
                            <div>Monday – Friday</div>
                            <div>9:00am - 7:00pm</div>
                        </li>
                        <li className="flex justify-between border-b-[1px] border-[#e1e1e126] pt-[11px] px-0 pb-[13px] text-base">
                            <div>Saturday</div>
                            <div>9:00am - 7:00pm</div>
                        </li>
                        <li className="flex justify-between border-b-[1px] border-[#e1e1e126] pt-[11px] px-0 pb-[13px] text-base">
                            <div>Sunday</div>
                            <div>By Appointment</div>
                        </li>
                    </ul>
                </>
            }
        </div>
    )
}
