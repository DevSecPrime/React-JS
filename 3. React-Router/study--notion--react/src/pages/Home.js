import React from 'react'

function Home({isLoggedIn}) {
  return (
    <div className='flex items-center justify-center   text-white text-3xl h-full'>
       <p> This is  <span className='text-pink-500 font-bold'>Home</span>  page</p>
    </div>
  )
}

export default Home
