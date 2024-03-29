// Components
import ServicesGallery from "../components/Services/ServicesGallery";
import ServicesCover from "../components/ServicesCover";


export const metadata = {
    openGraph: {
        url: `${process.env.NEXT_APP_URL}/service`,
        title: 'Services Archive |',
    },
    title: 'Services Archive |'
}

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