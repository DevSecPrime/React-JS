import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const { cart } = useSelector((state) => state)
    return (
        <div>

            {/* logo */}
            <nav className='flex flex-row justify-between items-center h-20 max-w-6xl mx-auto'>
                <NavLink to='/'>
                    <div className='ml-5'>
                        <img src="logo.png"
                            height={50}
                            width={120}
                            loading="lazy"
                            alt='' />
                    </div>
                </NavLink>

                {/* links */}
                <div className='flex items-center mr-5 font-medium text-slate-100 space-x-6'>
                    <NavLink to='/'>
                        <p>Home</p>
                    </NavLink>


                    <NavLink to='/cart'>
                        <div className='relative'>
                            <FaShoppingCart className='text-2xl' />

                            {
                                cart.length > 0 &&
                                <span className='absolute -top-1 -right-2 text-xs bg-green-600 w-5 h-5 flex justify-center animate-bounce rounded-full text-white'
                                >{cart.length}</span>
                            }
                        </div>

                    </NavLink>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
