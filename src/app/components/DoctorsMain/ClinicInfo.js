export default function ClinicInfo({bgColor, heading}){
        return(
            <div className="text-white p-6 md:px-6 basis-0 grow font-sans" style={{backgroundColor:bgColor}}>
                <h3 className="pb-2.5 md:pb-4 font-medium text-[20px] leading-[30px]">{heading}</h3>
                    <ul>
                        <li className="flex justify-between border-b-[1px] border-[#e1e1e126] pt-1 px-0 pb-[13px] text-base">
                            <div>Mon – Fri</div>
                            <div>9:00am - 7:00pm</div>
                        </li>
                        <li className="flex justify-between border-b-[1px] border-[#e1e1e126] pt-[11px] px-0 pb-[13px] text-base">
                            <div>Saturday</div>
                            <div>9:00am - 7:00pm</div>
                        </li>
                        <li className="flex justify-between pt-[11px] px-0 pb-[13px] text-base">
                            <div>Sunday</div>
                            <div>By Appointment</div>
                        </li>
                    </ul>
            </div>
        )
}