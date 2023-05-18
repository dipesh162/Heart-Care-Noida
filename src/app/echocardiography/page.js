// React
import React from "react";

// Static
import { Facilities } from "../static/Facilities";

// Components
import FacilitiesInfo from "../components/Facilities/FacilitiesInfo";


export default function EchoCardiography(){

    const [FacilityData] = Facilities.filter(facility=> facility.name == "Echocardiography")

    return(
        <>
            <FacilitiesInfo FacilityData={FacilityData}/>
        </>
    )
}