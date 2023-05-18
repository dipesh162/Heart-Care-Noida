// React
import React from "react";

// Static
import { Facilities } from "../static/Facilities";

// Components
import FacilitiesInfo from "../components/Facilities/FacilitiesInfo";


export default function Tmt(){
    
    const [FacilityData] = Facilities.filter(facility=> facility.name == "TMT")

    return(
        <>
            <FacilitiesInfo FacilityData={FacilityData}/>
        </>
    )
}