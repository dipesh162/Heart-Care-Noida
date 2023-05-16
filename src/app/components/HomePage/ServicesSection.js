
import React from "react";

// Components
import FacilitiesMenu from "./FacilitiesMenu";
import ServicesGallery from "./ServicesGallery";


export default function ServicesSection() {
    return(
        <div className="border-b-[#ebebeb] border-[1px] ">
            <div className="md:grid  md:grid-cols-2 flex lg:flex flex-col lg:flex-row lg:gap-0 w-full md:max-w-[1170px] font-sans mx-auto pt-[60px] lg:pt-[48px] pb-12">
                <div className="pt-9 px-[15px]">
                    <div>
                        <h3 className="pb-2.5 mb-9 text-[32px] text-[#333333] font-bold">Medical Services</h3>
                        {/* <ServicesGallery/> */}
                    </div>
                </div>
                
                <div className="pt-9 px-[15px] lg:w-[25%]">
                    <FacilitiesMenu/>
                </div>
            </div>
        </div>
    )
}