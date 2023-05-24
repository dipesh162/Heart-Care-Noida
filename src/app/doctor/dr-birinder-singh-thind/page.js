// Components
import DoctorsInfo from "@component/app/components/DoctorsMain/DoctorsInfo";
import ServicesCover from "@component/app/components/ServicesCover";

export const metadata = {
    openGraph: {
        url: `${process.env.NEXT_APP_URL}/doctor/dr-birinder-singh-thind/`,
        title: 'Dr. Birinder Singh Thind |',
    },
    title: 'Dr. Birinder Singh Thind |'
};

export default function DoctorsMainPage(){

    return(
        <>
            <ServicesCover 
                name='Dr. Birinder Singh Thind'
                items={[
                    {
                        name: 'Home',
                        link: '/'
                    },
                    {
                        name: 'Dr. Birinder Singh Thind'
                    }
                ]}
            />
            <DoctorsInfo/>
        </>
    )
}