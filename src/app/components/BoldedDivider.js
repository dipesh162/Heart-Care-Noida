import React from "react";

export default function BoldedDivider({bottomValue}){

    return(
        <div className="w-full h-[1px] relative bg-[#ececec]">
            <div className={`absolute bg-[#13c5dd] h-[2px] w-[18%] bottom-[${bottomValue ?? '0.5px'}]`}>
            </div>
        </div>
    )
}