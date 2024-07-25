import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { toast } from 'react-toastify';

function Navbar(props) {

  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '>
      {/* top level Navbar */}

      <NavLink to="/">
        <img src={logo} alt='logo' loading='lazy' width={160} height={32} />

      </NavLink>

      {/* links */}

      <nav>

        <ul className='flex gap-6 text-white'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>

          <li>
            <NavLink to='/about'>About</NavLink>
          </li>

          <li>
            <NavLink to='/Contact'>Contact</NavLink>
          </li>

        </ul>

      </nav>

      {/* login -- signUp -- LogOut -- Dashboard button */}
      {/* first we are needed to check that user has loged in or not-- */}
      <div className='flex items-center gap-4'>

        {/* Here, The user is not Logged In  */}
        {!isLoggedIn &&
          <NavLink to="/login">
            <button className='bg-slate-600 text-white  py-[8px] px-[12px] border border-slate-700 rounded-[8px]'>Log In</button>
          </NavLink>
        }

        {/* Here, The user is not Logged In  */}
        {!isLoggedIn &&
          <NavLink to="/signup">
            <button className='bg-slate-600 text-white  py-[8px] px-[12px] border border-slate-700 rounded-[8px]'>Sign Up</button>
          </NavLink>
        }

        {/* Here, The user is Logged In  */}
        {isLoggedIn &&
          <NavLink to="/">
            <button className='bg-slate-600 text-white  py-[8px] px-[12px] border border-slate-700 rounded-[8px]'
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out Successfully......");
              }}>Log Out</button>
          </NavLink>
        }

        {/* Here, The user is Logged In  */}
        {isLoggedIn &&
          <NavLink to="/dashboard">
            <button className='bg-slate-600 text-white  py-[8px] px-[12px] border border-slate-700 rounded-[8px]'>Dashboard</button>
          </NavLink>
        }
      </div>

    </div>
  )
}

export default Navbar
