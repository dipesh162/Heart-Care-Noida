// React
import React from "react";

// Components
import ServicesCover from "../ServicesCover";
import FacilitiesContent from "../Facilities/FacilitiesContent";

export default function FacilitiesInfo({FacilityData}){
    return(
        <>
            <ServicesCover
                name={FacilityData.name}
                items={FacilityData.breadCrumb}
            />
            <FacilitiesContent facility={FacilityData} />
        </>
    )
}