// React
import React from 'react'

export default function BreadCrumb({item,i}){
    return(
        <>
            {i!==0 && <span className='pl-1 pr-2'>/</span>}
            {item.link ? 
                <a href={item.link} className='hover:opacity-[0.8] hover:cursor-pointer'><span>{item.name}</span></a>
            
            :
                <span>{item.name}</span>
            }
        </>
    )
}