// React
import React from "react";
import Parser from 'html-react-parser';

// Static
import { Doctor_info } from "@component/app/static/Doctor_info";

export default function AboutInfoContent(){

    return (
        <div className="pt-[35px] px-[15px] text-left font-sans">
            <h2 className="text-[32px] text-[#333333] leading-[35px] pb-2.5 font-bold">About</h2>
            <h6 className="text-[#347cdb] text-[13px] pb-2.5">Dr. Birinder Thind</h6>

            <div className="text-left text-[15px] text-[#777777] ">
                {Parser(Doctor_info)}
            </div>
        </div>
    )
}
