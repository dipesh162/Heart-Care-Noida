import React from "react";
import Parser from 'html-react-parser';
import Image from "next/image";

// Components
import ViewDetailsCta from "./ViewDetailsCta";


export default function ServiceCard({imgPath, name, details, link, detailslineClamp}){

    return(
        <div className="border-[1px] border-[#e8e8e8] rounded-[5px] font-sans max-w-[270px]">
            <Image
                src={`/images${imgPath}`}
                height={170}
                width={270}
                alt="Service Image"
                className="rounded-t-[inherit]"
            />
            <div className="pt-6 px-6 pb-9">
                <h4 className="pb-1.5 text-[20px] text-[#333333]">{name}</h4>
                <p className="mb-2.5 text-[#777777] text-[14px] tracking-[0.2px] leading-6"
                    style={{
                        overflow: 'hidden',
                        display: '-webkit-box',
                        webkitBoxOrient: 'vertical',
                        webkitLineClamp: detailslineClamp,
                    }}  
                >{Parser(details)}</p>
                <ViewDetailsCta ctaLink={link}/>
            </div>
        </div>
    )
}