import React from 'react'

// Components
import ReadMoreBtn from '../ReadMoreBtn'

export default function DrReadMoreCard (){

    return(
        <div className='px-6 pt-6 pb-4 bg-[#435ba1] text-center font-sans'>
            <a href="/doctor/dr-birinder-singh-thind/" className='text-[18px] text-white'>Dr. Birinder Singh Thind</a>
            <h5 class="-mt-[3px] pb-[15px] text-[15px] text-[#13C5DD]">Cardiologist</h5>
            <ReadMoreBtn/>
        </div>
    )

}