// Components
import ServicesCover from "../ServicesCover";
import ServicesContent from "./ServicesContent";

export default function ServicesInfo({service}){
    
    return(
        <>
            <ServicesCover
                name={service.name}
                items={service.breadCrumb}
            />
            <ServicesContent service={service} />
        </>
    )
}