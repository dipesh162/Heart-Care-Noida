// React
import React from 'react'

export default function ServicesCover({name,items}){
    return(
        <div className='py-[50px] md:py-[60px] relative bg-center bg-auto bg-no-repeat overflow-hidden' style={{
            backgroundImage: `url("/images/services_cover.jpg")`,
        }}>
            <div className="absolute bg-[rgba(52,129,219,0.5)] top-0 left-0 h-full w-full z-0"></div>
            <div className='max-w-[1170px] text-center mx-auto flex flex-col md:flex-row justify-between md:items-center z-[2] relative font-sans text-white'>
                <h2 className='text-[26px] leading-[30px] mb-[5px] md:mb-[15px] lg:mb-0 md:text-[30px] md:leading-[34px] lg:text-[35px] lg:leading-[38px] px-[15px] font-bold'>{name}</h2>
                <h3 className='px-[15px] pt-[7px]'>{
                    items.map((item,i)=>(
                        <>
                        {i!==0 && <span className='px-1'>/</span>}
                        {item.link ? 
                            <a href='/' className='hover:opacity-[0.8] hover:cursor-pointer'><span>{item.name}</span></a>
                        
                        :
                            <span>{item.name}</span>
                        }
                        </>
                    ))
                }</h3>
            </div>
        </div>
    )
}

ServicesCover.defaultProps = {
    items: [
        {
            name: 'abc',
            link: '/'
        },
        {
            name: 'dev abc',
            // link: '/'
        },
        {
            name: 'a asd ad bsdc',
            link: '/'
        },
    ]
  }