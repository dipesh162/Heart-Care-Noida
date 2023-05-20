// Static
import Services from "@component/app/static/Services";

// Components
import ServiceCard from "../ServiceCard";

export default function ServicesGallery(){
    return(
        <div className="py-[50px] md:py-[70px] mx-auto px-6 md:px-[15px] max-w-[1170px] gap-x-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Services.map((service,i)=>(
                    <ServiceCard
                        key={i}
                        imgPath={service.imgPath}
                        name={service.name}
                        details={service.details}
                        link={service.link}
                        detailslineClamp={service.detailslineClampServicePage}
                    />
            ))}
        </div>
    )
}
