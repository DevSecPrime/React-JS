import React from 'react'
import { useState } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function SignUpForm({ setIsLoggedIn }) {

    const [formData, setFormData] = useState({

        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); //for toggle the password

    const navigate = useNavigate();

    const [accountType, setAccountType] = useState("student");//to toggle the button

    function changeHandler(event) {

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match.......")
            return;
        }
        setIsLoggedIn(true)
        toast.success("Account Created Successfully...")
        const accountData = {
            ...formData
        }

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("Printing Sign Up - Form Data---> Final Data :-");
        console.log(finalData);

        navigate("/dashboard")
    }
    return (
        <div>
            {/* student -- instructor button  */}

            <div className='flex flex-row gap-x-2 bg-slate-800 rounded-full p-1 my-6 max-w-max mt-1 mb-1'>
                <button
                    className={`${accountType === "student"
                        ? "bg-black text-white "
                        : "bg-transparent text-slate-200 "} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => { setAccountType("student") }}>
                    Student
                </button>

                <button
                    className={`${accountType === "instructor"
                        ? "bg-black text-white "
                        : "bg-transparent text-slate-200 "} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => { setAccountType("instructor") }}>
                    Instructor
                </button>
            </div>

            {/* form */}

            <form onSubmit={submitHandler}>
                <div className='w-full flex flex-row gap-x-4 mt-2'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading text-slate-300 font-medium tracking-wide'>First Name<sup className='text-pink-500 ml-1 '>*</sup></p>

                        <input
                            required
                            type='text'
                            placeholder='Enter your first name'
                            name='firstName'
                            value={formData.firstName}
                            onChange={changeHandler}
                            className='w-full rounded-[0.5rem] border border-richblack-5 bg-slate-800 py-[10px] px-[12px] text-white outline-none placeholder:text-richblack-40'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading text-slate-300 font-medium tracking-wide'>Last Name<sup className='text-pink-500 ml-1'>*</sup></p>

                        <input
                            required
                            type='text'
                            placeholder='Enter your lasrt name'
                            name='lastName'
                            value={formData.lastName}
                            onChange={changeHandler}
                            className='w-full rounded-[0.5rem] border border-richblack-5 bg-slate-800 py-[10px] px-[12px] text-white outline-none placeholder:text-richblack-40'
                        />
                    </label>

                </div>

                {/* email */}
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading text-slate-300 font-medium tracking-wide mt-3'>Email Address<sup className='text-pink-500 ml-1'>*</sup></p>
                    <input
                        required
                        type='email'
                        placeholder='Enter your email address'
                        name='email'
                        value={formData.email}
                        onChange={changeHandler}
                        className='w-full rounded-[0.5rem] border border-richblack-5 bg-slate-800 py-[10px] px-[12px] text-white outline-none placeholder:text-richblack-40'
                    />
                </label>

                {/* create password and confirmPassword */}

                <div className='w-full flex flex-row gap-x-4 '>

                    {/* password */}

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading text-slate-300 font-medium tracking-wide mt-3'>Create Password<sup className='text-pink-500 ml-1'>*</sup></p>
                        <input
                            required
                            type={showPassword ? ('text') : ('password')}
                            placeholder='Enter your password'
                            name='password'
                            value={formData.password}
                            onChange={changeHandler}
                            className='w-full rounded-[0.5rem] border border-richblack-5 bg-slate-800 py-[10px] px-[12px] text-white outline-none placeholder:text-richblack-40'
                        />

                        <span
                            className='absolute top-[3.6rem] right-4 -translate-y-1/2 text-slate-300 cursor-pointer'
                            onClick={() => { setShowPassword((prev) => !prev) }}>
                            {
                                showPassword ? (<IoEyeOffOutline fontSize={24} />) : (<IoEyeOutline fontSize={24} />)
                            }
                        </span>
                    </label>

                    {/* confirmPassword */}
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading text-slate-300 font-medium tracking-wide mt-3'>Confirm Password<sup className='text-pink-500 ml-1'>*</sup></p>
                        <input
                            required
                            type={showConfirmPassword ? ('text') : ('password')}
                            placeholder='Confirm password'
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            className='w-full rounded-[0.5rem] border border-richblack-5 bg-slate-800 py-[10px] px-[12px] text-white outline-none placeholder:text-richblack-40'
                        />

                        <span
                            className='absolute top-[3.6rem] right-4 -translate-y-1/2 text-slate-300 cursor-pointer '
                            onClick={() => { setShowConfirmPassword((prev) => !prev) }}>
                            {
                                showConfirmPassword ? (<IoEyeOffOutline fontSize={24} />) : (<IoEyeOutline fontSize={24} />)
                            }
                        </span>
                    </label>
                </div>

                <button className='w-full rounded-[0.5rem] bg-yellow-400 py-[10px] px-[12px] text-slate-900 font-medium mx-auto mt-5 hover:bg-yellow-500 transition-all duration-300'>
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignUpForm
// student -- instructor button 