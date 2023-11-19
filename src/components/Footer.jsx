import React from 'react'
import Netflix from '../assets/Netflix Logo.svg'
import Shopify from '../assets/Shopify Logo.svg'
import Spotify from '../assets/Spotify Logo.svg'
import Walmart from '../assets/Walmart Logo.svg'

function Footer() {
  return (
    <div className='p-4 flex flex-col justify-center text-center'>
      <p className='text-xs mb-2'>Trusted by 3+ million people at companies like</p>
      <div className='flex flex-wrap justify-between gap-4 pb-4'>
        <img className='w-[130px]' src={Netflix} alt="" />
        <img className='w-[130px]' src={Shopify} alt="" />
        <img className='w-[130px]' src={Spotify} alt="" />
        <img className='w-[130px]' src={Walmart} alt="" />
      </div>
    </div>
  )
}

export default Footer
