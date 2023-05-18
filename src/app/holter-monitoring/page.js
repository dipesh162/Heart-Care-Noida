// React
import React from "react";

// Static
import { Facilities } from "../static/Facilities";

// Components
import FacilitiesInfo from "../components/Facilities/FacilitiesInfo";


export default function HolterMonitoring(){

    const [FacilityData] = Facilities.filter(facility=> facility.name == "Holter Monitoring")

    return(
        <>
            <FacilitiesInfo FacilityData={FacilityData}/>
        </>
    )
}