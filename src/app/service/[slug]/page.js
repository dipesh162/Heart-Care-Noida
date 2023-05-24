
// Static
import ServicesInfo from "@component/app/components/Services/ServicesInfo";
import Services from "@component/app/static/Services";

export async function generateMetadata({params, searchParams}) {
 
    let slug = params.slug
    let [ServiceData]  = Services.filter(service=> service.slug == slug)

    return {
        openGraph: {
            type: 'article',
            url: `${process.env.NEXT_APP_URL}/service/${slug}`,
            title: `${ServiceData.name} |`,
            description: ServiceData.details.replace(/<[^>]*>/g, '')
        },
        title: `${ServiceData.name} |`,
    }
}

export default function SingleService({params}){

    let slug = params.slug
    let [ServiceData]  = Services.filter(service=> service.slug == slug)

    return(
        <>
            <ServicesInfo service={ServiceData}/>
        </>
    )
}