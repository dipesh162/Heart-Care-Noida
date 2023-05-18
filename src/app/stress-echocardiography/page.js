// React
import React from "react";

// Static
import { Facilities } from "../static/Facilities";

// Components
import FacilitiesInfo from "../components/Facilities/FacilitiesInfo";


export default function StressEchoCardiography(){

    const [FacilityData] = Facilities.filter(facility=> facility.name == "Stress Echocardiography")

    return(
        <>
            <FacilitiesInfo FacilityData={FacilityData}/>
        </>
    )
}