import React from 'react'
// import reviews from '../data';
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from 'react';


function Testimonials(props) {

    let reviews = props.reviews;

    const [cardIndex, setCardIndex] = useState(0);

    function leftShiftHandler() {
        // jo index 0 thi nani thy jay etlete k 1 - 1 < 0 to ene last index pr mokli de ---> last index - 1  here, array.length-1

        if (cardIndex - 1 < 0) {
            setCardIndex(reviews.length - 1);
        }

        else {
            setCardIndex(cardIndex - 1);
        }
    }


    function rightShiftHandler() {
        if (cardIndex + 1 >= reviews.length) {
            setCardIndex(0);
        }
        else {
            setCardIndex(cardIndex + 1);
        }
    }


    function surpriseMeHandler() {
        let randomCardIndex = Math.floor(Math.random() * reviews.length);
        setCardIndex(randomCardIndex);
    }


    return (
        <div className='w-[85vw] md:w-[700px] flex flex-col items-center justify-center bg-white mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>


            <Card review={reviews[cardIndex]} />

            <div className='flex items-center justify-center text-3xl mt-8 gap-3 text-violet-500 font-bold '>

                <button onClick={leftShiftHandler}
                    className='cursor-pointer hover:text-violet-600 transition-all duration-250'>

                    <FiChevronLeft />

                </button>



                <button onClick={rightShiftHandler}
                    className='cursor-pointer hover:text-violet-600 transition-all duration-250'>

                    <FiChevronRight />

                </button>

            </div>

            <div className='mt-7'>
                <button onClick={surpriseMeHandler} className='bg-violet-500 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>Surprise Me</button>
            </div>
        </div>
    )
}

export default Testimonials
