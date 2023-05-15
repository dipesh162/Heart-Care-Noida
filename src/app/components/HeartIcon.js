import React from "react";
import Image from "next/image";

export default function HeartIcon() {
    return(
        <div className="w-fit p-3 border-[#e6e7e8] border-2 rounded-[5%] mx-[15px] mb-[18px] flex items-center justify-center">
            <Image
                src="/images/Home/heart.jpg"
                height={56}
                width={53}
                alt="Heart Icon"
            />
        </div>
    )
}
