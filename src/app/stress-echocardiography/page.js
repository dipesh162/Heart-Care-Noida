// React
import React from "react";

// Static
import { Facilities } from "../static/Facilities";
import { FacilitiesMetaDescription } from "../static/FacilitiesMetaDescription";
import { FacilitiesMetaTitle } from "../static/FacilitiesMetaTitle";

// Components
import FacilitiesInfo from "../components/Facilities/FacilitiesInfo";


const [FacilityData] = Facilities.filter(facility=> facility.name == "Stress Echocardiography")

export const metadata = {
    openGraph: {
      type: 'article',
      url: `${process.env.NEXT_APP_URL}${FacilityData.link}`,
      title: `${FacilityData.name} ${FacilitiesMetaTitle}`,
      description: `${FacilityData.name} - ${FacilitiesMetaDescription}`,
    },
    title: `${FacilityData.name} ${FacilitiesMetaTitle}`,
    description: `${FacilityData.name} - ${FacilitiesMetaDescription}`,
}

export default function StressEchoCardiography(){

    return(
        <>
            <FacilitiesInfo FacilityData={FacilityData}/>
        </>
    )
}