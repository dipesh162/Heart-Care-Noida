// Components
import DoctorsInfo from "@component/app/components/DoctorsMain/DoctorsInfo";
import ServicesCover from "@component/app/components/ServicesCover";

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