// Components
import ServicesGallery from "../components/Services/ServicesGallery";
import ServicesCover from "../components/ServicesCover";

export default function Service(){

    return(
            <>
                <ServicesCover
                    name="Services"
                    items={[
                        {
                            name: 'Home',
                            link: '/'
                        },
                        {
                            name: 'Services'
                        }
                    ]}
                />
                <ServicesGallery/>
            </>
    )

}