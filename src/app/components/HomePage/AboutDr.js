import Image from 'next/image'
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

// Components
import DrReadMoreCard from './DrReadMoreCard'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'


export default function AboutDr(){

    const [showPlusIcon, setShowPlusIcon] = useState(false)
    const togglePlusIcon = () => {
        setShowPlusIcon(!showPlusIcon)
    }

    const [overlayInfoScreenVisible, setOverlayInfoScreenVisible] = useState(false)
    const toggleOverlayScreen = () =>{
        setOverlayInfoScreenVisible(!overlayInfoScreenVisible)
    }


    return(
        <div className='max-w-[1170px] mx-auto py-[52px] md:pt-[96px]  md:pb-[70px] px-[25px]'>

            <div className='relative flex justify-center' onMouseEnter={togglePlusIcon}  onMouseLeave={()=> {togglePlusIcon(); setOverlayInfoScreenVisible(false)}}>
                <Image
                    src={'/images/doctor_2.jpg'}
                    width={300}
                    height={213}
                />

                {overlayInfoScreenVisible &&
                    <div className='absolute top-0 left-0 bg-[rgba(0,0,0,0.35)] w-full h-full text-white flex items-center justify-center'>
                        <ul className='text-center'>
                            <li className='py-[5px]'><FontAwesomeIcon color="#fff" height={16} width={16} icon={faEnvelope}/><a className="hover:cursor-pointer text-[14px] pl-2.5" href="mailto:birthind@hotmail.com">birthind@hotmail.com</a></li>
                            <li className='py-[5px]'><FontAwesomeIcon color="#fff" height={16} width={16} icon={faPhone}/><a className="hover:cursor-pointer text-[14px] pl-2.5" href="tel:9810643323">9810643323</a></li>
                        </ul>
                    </div>
                }

                    <div onClick={toggleOverlayScreen} className={`rotate-${overlayInfoScreenVisible ? 45 : 0} absolute top-[14px] right-[14px] rounded-[50%] font-bold text-lg pb-[3px] bg-[#13c5dd] h-[35px] w-[35px] flex items-center justify-center hover:cursor-pointer`}
                        style={{
                            "-webkit-transition": "-webkit-transform .2s ease-in-out",
                            "-ms-transition": "-ms-transform .2s ease-in-out",
                            "transition": "transform .2s ease-in-out",  
                        }}
                    >
                        +
                    </div>

            </div>
            <DrReadMoreCard/>
        </div>
    )
}