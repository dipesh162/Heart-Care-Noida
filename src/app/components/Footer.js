import React from "react";
import { faArrowRightLong, faEarthAmericas, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Footer(){

    return(
        <footer className="bg-[#2a303b] font-sans">
            <div className="mx-auto lg:w-[1170px] pt-[65px] sm:px-4 md:px-6 lg:px-0 pb-[25px] text-[#c7c7c7] flex md:grid lg:flex flex-col md:flex-row items-start gap-[42px] md:gap-[50px] lg:gap-0 md:grid-cols-2 justify-between">
        
                <div className="w-full px-4 lg:w-1/4 basis-0 grow text-[#c8c8c8] text-[15px] leading-[22px]">
                    <h4 className="pb-6 font-normal text-white text-[18px]">About Dr. Birinder Singh Thind</h4>
                    <div>Dr. Birinder Singh Thind is a consultant cardiologist at the Thind`s Heart Clinic in Noida having a rich experience in the management and treatment of heart diseases. He completed his PhD in cardiology after doing his M.D and has been in practice ever since gaining a good exposure from his career. He has given care to the patients previously at various hospitals at Noida</div>
                </div>
                <div className="w-full px-4 lg:w-1/4 basis-0 grow text-[#c8c8c8] text-[15px] leading-[22px]">
                    <h4 className="pb-6 font-normal text-white text-[18px]">Facilities</h4>
                    <div>
                        <ul>
                            <li className="pt-0 px-0 pb-3"><a className="hover:text-[#13c5dd]" href="/ecg/">ECG</a></li>
                            <li className="pt-0 px-0 pb-3"><a className="hover:text-[#13c5dd]" href="/echocardiography/">Echocardiography</a></li>
                            <li className="pt-0 px-0 pb-3"><a className="hover:text-[#13c5dd]" href="/tmt/">TMT</a></li>
                            <li className="pt-0 px-0 pb-3"><a className="hover:text-[#13c5dd]" href="/holter-monitoring/">Holter Monitoring</a></li>
                            <li className="pt-0 px-0 pb-3"><a className="hover:text-[#13c5dd]" href="/stress-echocardiography/">Stress Echocardiography</a></li>
                            <li className="pt-0 px-0 pb-3"><a className="hover:text-[#13c5dd]" href="/arterial-doppler/">Arterial Doppler</a></li>
                            <li className="pt-0 px-0 pb-3"><a className="hover:text-[#13c5dd]" href="/venous-doppler/">Venous Doppler</a></li>
                        </ul>
                    </div>
                </div>

                <div className="w-full px-4 lg:w-1/4 basis-0 grow text-[#c8c8c8] text-[15px] leading-[22px]">
                    <h4 className="pb-6 font-normal text-white text-[18px]">Information</h4>
                    <p>
                        <a className="hover:text-[#13c5dd]" href="/">Best Heart Specialist in Noida</a><br></br>
                        <a className="hover:text-[#13c5dd]" href="/">Best Cardiologist In Noida</a><br></br>
                        <a className="hover:text-[#13c5dd]" href="/">Best Cardiologist Near me</a><br></br>
                        <a className="hover:text-[#13c5dd]" href="/">Top Cardiologist In Noida</a><br></br>
                        <a className="hover:text-[#13c5dd]" href="/">Best Echocardiography Consultant In Noida</a>
                    </p>    
                </div>
                <div className="w-full px-4 lg:w-1/4 basis-0 grow text-[#c8c8c8] text-[15px] leading-[22px]">
                    <h4 className="pb-6 font-normal text-white text-[18px]">Contact Details</h4>
                    <p className="pb-2.5">B-81, Sector 50, Noida</p>  
                    <ul>
                        <li className="pb-3 flex flex-wrap leading-6 items-center">
                            <FontAwesomeIcon color="#13c5dd" height={15} width={15} icon={faPhone}/> <span className="text-[#b4b4b4] ml-2 mr-1">Tell </span><a className="hover:text-[#13c5dd]" href="tel:9810643323">9810643323</a>
                        </li>
                        <li className="pb-3 flex flex-wrap leading-6 items-center">
                            <FontAwesomeIcon color="#13c5dd" height={15} width={15} icon={faEnvelope}/> <span className="text-[#b4b4b4] ml-2 mr-1">Email </span><a className="hover:text-[#13c5dd]" href="mailto:birthind@hotmail.com">birthind@hotmail.com</a>
                        </li>
                        <li className="pb-3 flex flex-wrap leading-6 items-center">
                            <FontAwesomeIcon color="#13c5dd" height={15} width={15} icon={faEarthAmericas}/> <span className="text-[#b4b4b4] ml-2 mr-1">Website </span><a className="hover:text-[#13c5dd]" href="http://heartcarenoida.com/" target="_blank">http://heartcarenoida.com/</a>
                        </li>

                        <a href="https://goo.gl/maps/ytkHcWEn13H2" className="flex items-center hover:text-[#13c5dd] hover:cursor-pointer py-[4px] px-3.5 mt-3 text-[#6e7582] rounded-[100px] border-[#6e7582] hover:border-[#13c5dd] border-2 w-fit">
                            <span className="text-[14px]">Get Map Direction</span> <FontAwesomeIcon icon={faArrowRightLong} height={15} width={28}  className="text-white hover:text-[#13c5dd] px-1.5"/>
                        </a>
                    </ul>
                </div>
            </div>
        </footer>
    )
}