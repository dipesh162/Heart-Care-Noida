import React from "react";
import { faLocationDot, faMobile} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour } from "@fortawesome/free-regular-svg-icons";


export default function InfoNavbar(){

    return(
        <div className="hidden font-sans md:block bg-[#fcfcfc] border-b-[1px] border-[#eeeeee]">
            <div className="flex w-[750px] mx-auto lg:w-[970px] pt-4 px-4 pb-5 md:gap-2.5 md:flex-col md:items-center lg:gap-0 lg:pt-1.5 lg:pb-2 lg:flex-row lg:justify-between">
                <div className="flex gap-7">
                    <div className=" flex gap-2 items-center">
                        <FontAwesomeIcon color="#999999" icon={faLocationDot} fontSize={15} />
                        <div className="text-[#999999] text-[13px]"> B-81, Sector 50, Noida </div>
                    </div>
                    <div className=" flex gap-2 items-center">
                        <FontAwesomeIcon color="#999999" icon={faMobile} fontSize={15} className="fa-light"/>
                        <div className="text-[#999999] text-[13px]"> Call: <span className="text-[#0a0a0a]">9810643323</span></div>
                    </div>
                    <div className=" flex gap-2 items-center">
                        <FontAwesomeIcon color="#999999" regular icon={faClockFour} fontSize={15} />
                        <div className="text-[#999999] text-[13px]"> Mon - Sat:<span className="text-[#0a0a0a]"> 9:00am - 7:00pm </span></div>
                    </div>
                    <div className=" flex gap-2 items-center">
                        <div className="text-[#999999] text-[13px]">Sun:By Appointment</div>
                    </div>
                </div>

                <div className="flex flex-row gap-3.5">
                    <a target="_blank" href="https://www.facebook.com/drbirinderthind/?ref=bookmarks">
                        <FontAwesomeIcon color="#c5c5c5" icon={faFacebookSquare} fontSize={22}/>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/company/18918412/admin/">
                        <FontAwesomeIcon color="#c5c5c5" icon={faLinkedin} fontSize={22}/>
                    </a>
                </div>
            </div>
        </div>
    )

}