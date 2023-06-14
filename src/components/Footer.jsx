import React from 'react'
import Vector from '../assets/images/vector.png'

const Footer = () => {
  return (
    <div
    className='w-full flex justify-around items-center'
    style={{height: "18.188rem"}}
    >
        <div className='-mt-8'>
        <div className='flex items-center mb-4'>
              <img src={Vector} className="h-7 w-7" alt="Elecar Logo" />
              <h3 className="self-center ml-2 text-xl font-semibold text-white">Elecar</h3>
     </div>
     <div>
        <p className='text-sm font-normal' style={{color: "#BABEC4"}}>We offer the best electric cars of</p>
        <p className='text-sm font-normal' style={{color: "#BABEC4"}}>the most recognized brands in</p>
        <p className='text-sm font-normal' style={{color: "#BABEC4"}}>the world.</p>
     </div>
        </div>

        <div>
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


        <div>
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