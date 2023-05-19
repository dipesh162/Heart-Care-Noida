// Components
import ClinicInfo from "./ClinicInfo";
import DoctorsContentInfo from "./DoctorsContentInfo";
import DoctorsTableInfo from "./DoctorsTableInfo";

export default function DoctorsInfo(){
    return(
        <div className="pt-[42px] md:pt-[80px] pb-[70px]">
            <div className="max-w-[1170px] mx-auto px-6 md:px-[15px] lg:p-0 font-sans">
                <div className="flex flex-col md:flex-row">
                    
                    <div className="px-0 lg:px-[15px] mb-9 w-full md:w-[25%]">
                        <ClinicInfo
                            bgColor='#3498db'
                            heading='Working Hours'  
                        />
                    </div>

                    <div className="w-full md:w-[75%]  pl-0 md:pl-[35px]">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2">
                                <DoctorsContentInfo />
                            </div>
                            <div className="md:w-1/2">
                                <img src='/images/doctor_patient.jpg' className="h-auto px-[15px] pt-[35px] md:pt-0 mb-[25px]"></img>
                            </div>
                        </div>
                        <div className="mt-[25px]">
                            <DoctorsTableInfo/>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}