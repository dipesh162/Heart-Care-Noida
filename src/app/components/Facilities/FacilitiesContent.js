// React
import Parser from 'html-react-parser';

export default function({facility}){
    return(
        <div className="py-[50px] px-0 md:pt-[80px] md:pb-[100px] md:px-0 ">
            <div className="max-w-[1170px] px-[25px] md:px-[15px] lg:p-0 mx-auto">
                <div className="w-full lg:w-[73%] p-0 md:px-4 lg:pr-[35px] lg:pl-[15px] text-[#777777] font-sans text-[14px] tracking-[0.2px] leading-6">
                    <p className="pb-2.5">
                        {/* <img width='100%' src={facility.imgPath}></img> */}
                    </p>
                    {Parser(facility.details)}
                </div>
            </div>
        </div>
    )
}