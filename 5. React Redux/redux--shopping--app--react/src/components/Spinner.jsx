import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className=' flex flex-col justify-center items-center mx-auto my-auto mt-[25%]'>
      <div className='spinner'></div>
      <span className='text-slate-800'>Loading...</span>
    </div>
  )
}

export default Spinner
