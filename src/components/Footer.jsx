import React from 'react'
import Vector from '../assets/images/vector.png'

const Footer = () => {
  return (
    <div
    className='w-full flex justify-around lg:flex-row flex-col items-start lg:items-center ml-4 lg:ml-0 lg:mt-0 mt-40'
    style={{height: "18.188rem"}}
    >
        <div className='lg:-mt-8 mb-12'>
        <div className='flex items-center mb-4'>
              <img src={Vector} className="h-7 w-7" alt="Elecar Logo" />
              <h3 className="self-center ml-2 text-xl font-semibold text-white">CarConnect</h3>
     </div>
     <div>
        <p className='text-sm font-normal' style={{color: "#BABEC4"}}>Experience Excellence in Electric Mobility</p>
        <p className='text-sm font-normal' style={{color: "#BABEC4"}}>Discover the Finest Electric Cars from</p>
        <p className='text-sm font-normal' style={{color: "#BABEC4"}}>Renowned Global Brands.</p>
     </div>
        </div>

        <div className='mb-12'>
        <div className='flex items-center mb-4'>
            <h3 className='text-xl font-semibold text-white'>Company</h3>
     </div>
     <div>
        <p className='text-sm font-normal mb-1' style={{color: "#BABEC4"}}>About</p>
        <p className='text-sm font-normal mb-1' style={{color: "#BABEC4"}}>Cars</p>
        <p className='text-sm font-normal mb-1' style={{color: "#BABEC4"}}>History</p>
        <p className='text-sm font-normal mb-1' style={{color: "#BABEC4"}}>Shop</p>
     </div>
        </div>


        <div className='mb-12'>
        <div className='flex items-center mb-4'>
            <h3 className='text-xl font-semibold text-white'>Information</h3>
     </div>
     <div>
        <p className='text-sm font-normal mb-1' style={{color: "#BABEC4"}}>Request a Quote</p>
        <p className='text-sm font-normal mb-1' style={{color: "#BABEC4"}}>Find a Dealer</p>
        <p className='text-sm font-normal mb-1' style={{color: "#BABEC4"}}>Contact us</p>
        <p className='text-sm font-normal mb-1' style={{color: "#BABEC4"}}>Services</p>
     </div>
        </div>

     <div>

     </div>
    </div>
  )
}

export default Footer