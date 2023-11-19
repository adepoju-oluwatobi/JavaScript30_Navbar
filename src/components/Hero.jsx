import React from 'react'
import PlayStore from '../assets/Capterra Logo.svg'
import D from '../assets/AlternativeTo Logo.svg'

function Hero() {
  return (
    <div className='p-4'>
      <h1 className='text-[32px] font-bold'>Ondeck is your remote <span className='text-yellow-400'>conference calling tool</span></h1>
      <h6 className='text-[13px] text-gray-500'>Ondeck is a service that allows you to create beautiful, online
        and encrypted video calls for you and your remote team.
      </h6>
      <button className=' bg-green-950 text-white py-2 px-4 mt-2 rounded-[5px] text-sm'>Try for free</button>

      <div className='flex gap-2 items-center mt-4'>
        <p className='text-sm'>5.0 Rating based on reviews from: </p>
        <div className='flex gap-2'>
        <img className='w-4' src={PlayStore} alt="" />
        <img className='w-4' src={D} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
