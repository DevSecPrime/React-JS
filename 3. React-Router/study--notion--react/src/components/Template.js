import React from 'react'
import frameImage from '../assets/frame.png'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";

// here , this template will show the comman part of the Component
function Template({ title, desc1, desc2, image, formtype, setIsLoggedIn }) {
    return (
        <div className='w-11/12 max-w-[1160px] mx-auto flex flex-col-reverse sm:flex-row lg:flex-row xl:flex-row gap-x-12 gap-y-0 py-12 justify-between'>

            {/* content container */}
            <div className='w-11/12 max-w-[450px] max-h-[450px] mx-0 sm:mx-auto left-[50%] -translate-x-[22%]'>
                <h1 className='text-slate-100 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>

                <p className='text-[1.125rem] leading-[1.625rem] text-white mt-4'>
                    <span className='text-slate-300'>{desc1}</span>
                    <br></br>
                    <span className='text-blue-200 italic'>{desc2}</span>
                </p>

                {/* checking from type ---> if formtype is === to signup then show signupFORM OTHERWISE show LoginFORM*/}

                {
                    formtype === "signup" ?
                        (<SignUpForm setIsLoggedIn={setIsLoggedIn} />) :
                        (<LoginForm setISLoggedIn={setIsLoggedIn} />)
                }

                <div className='flex flex-row items-center w-full my-4 gap-x-2'>
                    <div className='w-full h-[1px] bg-slate-800'></div>
                    <p className='text-slate-800 font-medium leading[1.375rem]'>
                        OR
                    </p>
                    <div className='w-full h-[1px] bg-slate-800'></div>
                </div>

                <button className='w-full flex items-center justify-center font-medium gap-x-2 bg-slate-800 text-slate-200 py-[8px] px-[12px] border border-slate-700 rounded-[8px] mt-2'>
                    <FcGoogle />
                    <p>Sign Up with Google</p>
                </button>
            </div>

            {/* img container- */}

            <div className='relative w-11/12 max-w-[450px]'>
                <img
                    src={frameImage}
                    loading='lazy'
                    alt='frame'
                    width={558}
                    height={504}
                />

                <img
                    src={image}
                    loading='lazy'
                    alt='Students'
                    width={558}
                    height={504}
                    className='absolute -top-4 right-4'
                />
            </div>

            
        </div>
    )
}

export default Template
