// React
import React from "react";

// Static
import { Facilities } from "../static/Facilities";

// Components
import FacilitiesInfo from "../components/Facilities/FacilitiesInfo";


export default function ArterialDoppler(){

    const [FacilityData] = Facilities.filter(facility=> facility.name == "Arterial Doppler")

    return(
        <>
            <FacilitiesInfo FacilityData={FacilityData}/>
        </>
    )
}