// React
import Parser from 'html-react-parser';

export default function ServicesContent({service}){
    return(
        <div className="py-[50px] px-0 md:pt-[80px] md:pb-[100px] md:px-0 ">
            <div className="max-w-[1170px] px-[25px] md:px-[15px] lg:p-0 mx-auto">
                <div className="w-full lg:w-[73%] p-0 md:px-4 lg:pr-[35px] lg:pl-[15px] text-[#777777] font-sans text-[14px] tracking-[0.2px] leading-6">
                    <div className='pb-[17px] font-semibold text-[28px] leading-[30px] text-[#333333]'>{service.name}</div>
                    <p className="pb-2.5">
                        {/* <img width='100%' src={service.imgPath}></img> */}
                    </p>
                    {Parser(service.details)}
                </div>
            </div>
        </div>
    )
}