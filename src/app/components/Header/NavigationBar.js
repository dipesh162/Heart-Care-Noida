'use client';

import Image from "next/image";
import React, { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import { faAngleDown, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FacilitiesSubMenu = () => {
    return (
        <ul role="menu" class="text-[15px] pt-2.5 px-0 pb-3">
            <li className="p-0"><a className="hover:text-[#13c5dd] hover:bg-[#434ea11a] font-sans text-[#666666] pt-1.5 pr-2.5 pb-2 pl-5 block" href="/ecg/">ECG</a></li>
            <li className="p-0"><a className="hover:text-[#13c5dd] hover:bg-[#434ea11a] font-sans text-[#666666] pt-1.5 pr-2.5 pb-2 pl-5 block" href="/echocardiography/">Echocardiography</a></li>
            <li className="p-0"><a className="hover:text-[#13c5dd] hover:bg-[#434ea11a] font-sans text-[#666666] pt-1.5 pr-2.5 pb-2 pl-5 block" href="/tmt/">TMT</a></li>
            <li className="p-0"><a className="hover:text-[#13c5dd] hover:bg-[#434ea11a] font-sans text-[#666666] pt-1.5 pr-2.5 pb-2 pl-5 block" href="/holter-monitoring/">Holter Monitoring</a></li>
            <li className="p-0"><a className="hover:text-[#13c5dd] hover:bg-[#434ea11a] font-sans text-[#666666] pt-1.5 pr-2.5 pb-2 pl-5 block" href="/stress-echocardiography/">Stress Echocardiography</a></li>
            <li className="p-0"><a className="hover:text-[#13c5dd] hover:bg-[#434ea11a] font-sans text-[#666666] pt-1.5 pr-2.5 pb-2 pl-5 block" href="/arterial-doppler/">Arterial Doppler</a></li>
            <li className="p-0"><a className="hover:text-[#13c5dd] hover:bg-[#434ea11a] font-sans text-[#666666] pt-1.5 pr-2.5 pb-2 pl-5 block" href="/venous-doppler/">Venous Doppler</a></li>
        </ul>
    )
}


export default function NavigationBar() {

    const [facilitiesSubMenu, setFacilitiesSubMenu] = useState(false)

    const [mobileNavdropdown, setMobileNavdropdown] = useState(false)
    const toggleMobileNavDropdown = () => {
        setMobileNavdropdown(!mobileNavdropdown)
    }

    return (
        <>
            <header className="bg-white sticky top-0 z-[2]" style={{boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)'}}>
                <div className="mx-auto px-4 lg:px-4 py-8 lg:w-[1170px] flex items-center justify-between">
                    <a href='/'>
                        <div className="relative w-[160px] h-[32px] md:w-[235px] md:h-[48px] lg:w-[292px] lg:h-[60px] ">
                            <Image
                                src="/images/clinic_logo.png"
                                fill={true}
                                alt="Clinic Logo"
                            />
                        </div>
                    </a>

                    <nav className="font-sans">
                        <ul className="hidden md:flex">
                            <li>
                                <a className="hover:text-[#13c5dd] text-[#555555] text-[15px] pt-[35px] px-3 pb-[39px]" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="relative"
                                onMouseEnter={() => setFacilitiesSubMenu(true)}
                                onMouseLeave={() => setFacilitiesSubMenu(false)}
                            >
                                <a
                                    className="hover:text-[#13c5dd] text-[#555555] text-[15px] pt-[35px] px-3 pb-[39px]"
                                    href="/"
                                >
                                    Facilities
                                </a>
                                <CSSTransition
                                    in={facilitiesSubMenu}
                                    timeout={2000}
                                    classNames="transitions"
                                    unmountOnExit
                                >
                                    <div className="absolute top-[50px] -left-1.5 bg-white leading-30] z-[3] rounded-[3px] min-w-[220px]"
                                        style={{
                                            boxShadow: '0 3px 8px rgba(0, 0, 0, 0.15)'
                                        }}>
                                        <FacilitiesSubMenu />
                                    </div>
                                </CSSTransition>
                            </li>
                            <li>
                                <a className="hover:text-[#13c5dd] text-[#555555] text-[15px] pt-[35px] px-3 pb-[39px]" href="/about-us">
                                    Dr. Birinder Thind
                                </a>
                            </li>
                        </ul>

                        <div className="md:hidden">

                            {!mobileNavdropdown && <FontAwesomeIcon icon={faBars} color="#111" fontSize={23} onClick={toggleMobileNavDropdown} />}
                            {mobileNavdropdown && <FontAwesomeIcon icon={faXmark} color="#111" fontSize={23} onClick={toggleMobileNavDropdown} />}

                            <CSSTransition
                                in={mobileNavdropdown}
                                timeout={2000}
                                classNames="transitions"
                                unmountOnExit
                            >
                                <ul className="bg-white overflow-hidden w-full pt-0 px-[25px] pb-[25px] absolute left-0 top-[96px]">
                                    <li className="">
                                        <a className="block text-[15px] text-[#555555] py-2.5 px-0" href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li className="border-[#f2f2f2] border-t relative flex justify-between">
                                        <a className="block text-[15px] text-[#555555] py-2.5 px-0" href="/">
                                            Facilities
                                        </a>
                                        <div className="bg-[#f9f9f9] flex items-center justify-center h-[43px] w-[43px]" onClick={() => setFacilitiesSubMenu(!facilitiesSubMenu)}>
                                            <FontAwesomeIcon icon={faAngleDown} color="#555555" />
                                        </div>
                                    </li>

                                    <CSSTransition
                                        in={facilitiesSubMenu}
                                        timeout={2000}
                                        classNames="transitions"
                                        unmountOnExit
                                    >
                                        <div className="" style={{ display: facilitiesSubMenu ? 'block' : 'none' }}>
                                            <FacilitiesSubMenu />
                                        </div>
                                    </CSSTransition>

                                    <li className="border-[#f2f2f2] border-t">
                                        <a className="block text-[15px] text-[#555555] py-2.5 px-0" href="/about-us">
                                            Dr. Birinder Thind
                                        </a>
                                    </li>
                                </ul>
                            </CSSTransition>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )

}