import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = ({ course, likedCourses, setLikedCourses }) => {

    // const Card =({props})=>{
    //     let course = props.course
    //     let likedCourses = props.likedCourses
    //     let setLikedCourses = props.setLikedCourses
    // }

    //upper way is the another way to define 

    function clickHandler() {
        //logic...

        if (likedCourses.includes(course.id)) {
            //The course is already liked
            // Course oahea thi liked chhhe....---> Apne course ne remove krvno chhe j liked chhhe

            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));

            toast.warning("Like is removed...");
        }
        else {
            //The course is not liked
            // Course pahela thi liked nathi....---> to apne ene liked krvnu chhe...
            // Apne course ne add krvno chhe j liked course chhhe
            //So, we are to insert the course in the liked course...

            if (likedCourses.length === 0) {
                //jo likedCourses khli hoi to .... mara bhai aner Add kari de...

                setLikedCourses([course.id]);
            } else {
                //jo course non-empty hoi ....
                /// etle k khli naa hoi ....

                //add the course in the liked course --> 
                //array ma ek course add thy chhe etle k 1 + 1 = 2 courses...

                setLikedCourses((prev) => [...prev, course.id])
            }
            toast.success("Liked Successfully...");

        }
    }


    return (
        <div className='w-[300px] bg-bgDark bg-opacity-80 overflow-hidden rounded-sm'>
            {/* img container  */}
            <div className='relative'>
                <img src={course.image.url} alt="" loading='lazy'></img>

                {/* for like icon btn */}
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            !likedCourses.includes(course.id) ?
                                (<FcLikePlaceholder fontSize="1.75rem" />) :
                                (<FcLike fontSize="1.75rem" />)
                        }
                    </button>
                </div>


            </div>

            {/* text container  */}
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        course.description.length > 100 ?
                            (course.description.substr(0, 100)) + "..." :
                            (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;
