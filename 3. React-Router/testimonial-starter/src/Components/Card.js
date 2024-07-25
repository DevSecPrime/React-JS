import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const Card = (props) => {

    //ek card ma ek j testimonial na data hse..

    let review = props.review;
    return (
        <div className='flex flex-col md:relative bg-white'>

            <div className='absolute top-[-7rem] z-[10] mx-auto'>
                <img
                    className='aspect-square rounded-full w-[140px] h-[140px] z-[25]'
                        src={review.image} alt='' loading='lazy' ></img>

                {/* back circle */}

                <div className='w-[140px] h-[140px] rounded-full bg-violet-600 absolute top-[-6px] z-[-10] left-[10px]'></div>
            </div>

            <div className='text-center mt-7'>
                <p className='font-bold text-2xl capitalize tracking-wider'>{review.name}</p>
                <p className='text-violet-400 uppercase text-sm font-bold'>{review.job}</p>
            </div>

            {/* <div className='text-center mt-7'>
             
            </div> */}

            {/* Quotes! */}

            <div className='text-violet-600 mx-auto mt-7'>
                <FaQuoteLeft />
            </div>

            <div className='text-center  mx-auto mt-5'>
                <p>{review.text}</p>
            </div>

            <div className='text-violet-600 mx-auto mt-7'>
                <FaQuoteRight />
            </div>
            {/* all buttons are required in Testimonials Component */}

        </div>
    )
}

export default Card; 
