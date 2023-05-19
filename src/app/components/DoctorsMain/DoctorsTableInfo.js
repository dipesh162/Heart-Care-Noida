// Icons
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DoctorsTableInfo(){
    return(
        <div className="overflow-x-auto whitespace-nowrap text-[14px] w-full">
            <table className="w-full text-[15px] b-0 mb-5 tracking-[0.3px] text-center border-spacing-0 border-collapse whitespace-nowrap">
                <tbody>
                    <tr class="bg-[#f8f8f8] border-b-[#ececec] border-b-[1px]">
                        <td className="text-[#333333] p-4 text-left border-r-0">Speciality</td>
                        <td className="text-[#777777] p-4 text-left ">Cardiologist</td>
                    </tr>
                    <tr class="bg-[#ffffff] border-b-[#ececec] border-b-[1px]">
                        <td className="text-[#333333] p-4 text-left border-r-0">Degrees</td>
                        <td className="text-[#777777] p-4 text-left ">PhD - Cardiology - Tver State Medical University, 2001</td>
                    </tr>
                    <tr class="bg-[#f8f8f8] border-b-[#ececec] border-b-[1px]">
                        <td className="text-[#333333] p-4 text-left border-r-0">Areas of Expertise</td>
                        <td className="text-[#777777] p-4 text-left ">
                            <div class="bullet-list contact-details-wrap  csgve-list-61e2eb5258813">
                                <ul>
                                    <li className="pt-5 pb-[9px] text-base">
                                        <FontAwesomeIcon icon={faCheck} fontSize={14} color="#3498db" className="pr-[7px] font-bold stroke-[4px]" /> ECG 
                                    </li>
                                    <li className="pt-5 pb-[9px] text-base">
                                        <FontAwesomeIcon icon={faCheck} fontSize={14} color="#3498db" className="pr-[7px] font-bold stroke-[4px]" /> Stress Echocardiography
                                    </li>
                                    <li className="pt-5 pb-[9px] text-base">
                                        <FontAwesomeIcon icon={faCheck} fontSize={14} color="#3498db" className="pr-[7px] font-bold stroke-[4px]" /> TMT 
                                    </li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr class="bg-[#ffffff] border-b-[#ececec] border-b-[1px]">
                        <td className="text-[#333333] p-4 text-left border-r-0">Address</td>
                        <td className="text-[#777777] p-4 text-left ">B-81, Sector 50, Noida</td>
                    </tr>
                    <tr class="bg-[#f8f8f8] border-b-[#ececec] border-b-[1px]">
                        <td className="text-[#333333] p-4 text-left border-r-0">Gender</td>
                        <td className="text-[#777777] p-4 text-left ">Male</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}