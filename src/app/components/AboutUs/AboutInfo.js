import React from "react";

// Components
import AboutInfoImage from "./AboutInfoImage";
import AboutInfoContent from "./AboutInfoContent";

export default function AboutInfo(){
    return (
        <div className="mx-auto max-w-[1200px] py-[20px] md:py-[65px] grid grid-cols-1 md:grid-cols-2">
            <AboutInfoImage/>
            <AboutInfoContent/>
        </div>
    )
}
