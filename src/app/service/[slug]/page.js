// Static
import ServicesInfo from "@component/app/components/Services/ServicesInfo";
import Services from "@component/app/static/Services";

export default function SingleService({params}){

    let slug = params.slug
    let [ServiceData]  = Services.filter(service=> service.slug == slug)

    return(
        <>
            <ServicesInfo service={ServiceData}/>
        </>
    )
}