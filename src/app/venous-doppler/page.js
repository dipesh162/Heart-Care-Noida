// React
import React from "react";

// Static
import { Facilities } from "../static/Facilities";

// Components
import FacilitiesInfo from "../components/Facilities/FacilitiesInfo";


export default function VenousDoppler(){

    const [FacilityData] = Facilities.filter(facility=> facility.name == "Venous Doppler")

    return(
        <>
            <FacilitiesInfo FacilityData={FacilityData}/>
        </>
    )
}