// React
import React from "react";

// Static
import { Facilities } from "../static/Facilities";

// Components
import FacilitiesInfo from "../components/Facilities/FacilitiesInfo";


export default function Ecg(){

    const [FacilityData] = Facilities.filter(facility=> facility.name == "ECG")

    return(
        <>
            <FacilitiesInfo FacilityData={FacilityData}/>
        </>
    )
}