import React, { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

function LoginForm({ setISLoggedIn }) {

    const [formData, setFormData] = useState({
        email: "",
        password: ""

    });

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();




    function changeHandler(event) {
        // Destructure properties from event.target
        const { name, value } = event.target;

        // Update thevalue
        setFormData((prevFormData) => {
            // Return a new object with updated property
            return {
                ...prevFormData, // Copy previous form data
                [name]: value    // Update property corresponding to the input element's name
            }
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        setISLoggedIn(true)
        toast.success("Logged In Successfully")
        navigate("/dashboard")

        console.log("Printing Login - Form Data");
        console.log(formData)

    }
    return (
        <form onSubmit={submitHandler}
            className='flex flex-col gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading text-slate-300 font-medium tracking-wide'>
                    Email Address <sup className='text-pink-500'>*</sup>
                </p>

                <input
                    required
                    type='email'
                    value={formData.email}
                    onChange={changeHandler}
                    name='email'
                    placeholder='Enter your email address'
                    className='w-full rounded-[0.5rem] border border-richblack-5 bg-slate-800 py-[10px] px-[12px] text-white outline-none placeholder:text-richblack-40'
                />
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading text-slate-300 font-medium tracking-wide'>
                    Password<sup className='text-pink-500 ml-1'>*</sup>
                </p>

                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    name='password'
                    placeholder='Enter your password'
                    className='w-full rounded-[0.5rem] border border-richblack-5 bg-slate-800 py-[10px] px-[12px] text-white outline-none placeholder:text-richblack-40'
                />

                <span
                    className='absolute top-1/2 right-4 -translate-y-1/2 text-slate-300 cursor-pointer'
                    onClick={() => { setShowPassword((prev) => !prev) }}>
                    {showPassword ?
                        (<IoEyeOffOutline fontSize={24} />) :
                        (<IoEyeOutline fontSize={24} />)
                    }

                </span>

                <NavLink to={"#"}>
                    <p className='text-[0.875rem] mt-1 mb-1 leading text-blue-300 font-medium tracking-wide cursor-pointer max-w-max ml-auto'>Forgot Password</p>
                </NavLink>
            </label>


            {/* sign in btn  */}
            <button className='bg-yellow-400 text-richblack-900 py-[8px] px-[12px] rounded-[8px] hover:bg-yellow-500 transition-all duration-300 mt-7'>
                Sign In
            </button>

        </form>
    )
}

export default LoginForm
