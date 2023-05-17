import React from 'react'
import {TestimonialsData}  from "@component/app/static/HomePage/TestimonialsData";
import TestimonialsProofs from './TestimonialsProofs';

export default function Testimonials(){
    return(

        <div className="bg-cover bg-no-repeat bg-center box-border pt-[40px] lg:pt-[70px] pb-[35px] lg:pb-[55px] px-2.5 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-4"
            style={{
                backgroundImage: `url("/images/Home/banner-slide-two.png")`,
            }}
        >
            {TestimonialsData.map((testimonial,i)=>(
                <TestimonialsProofs
                    key={i}
                    number={testimonial.number}
                    item={testimonial.item}
                />
            ))
            }
        </div>
    )
}