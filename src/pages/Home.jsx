import React from 'react'
import SpeedIcon from '../assets/images/speedicon.png'
import Car from '../assets/images/car.png'
import TempIcon from '../assets/images/temp-icon.png'
import KmIcon from '../assets/images/km-icon.png'
import Speed2Icon from '../assets/images/speed2icon.png'
import StartIcon from '../assets/images/start-icon.png'
import AboutCar from '../assets/images/about_car.png'
import Brand1 from '../assets/images/brand1.png'
import TimeIcon from '../assets/images/time-icon.png'
import Box from '../assets/images/box.png'
import ChargingIcon from '../assets/images/charging-icon.png'
import BookMarkIcon from '../assets/images/bookmark-icon.png'
import Car2 from '../assets/images/car2.png'
import Brand3 from '../assets/images/brand3.png'
import CarFeatured from '../assets/images/car-featured.png'
import Subscribe1 from '../assets/images/subscribe1.png'

function Home() {
  return (
    <>
    <section id="hero" className="h-auto mt-20">
    <h1 className="text-4xl font-semibold text-white text-center mb-8">Discover your perfect ride</h1>
    <h1 className="text-2xl font-semibold text-white text-center mb-4">Electric and Hybrid Cars</h1>
    <div className="flex align-center justify-center mb-20">
      <img src={SpeedIcon} alt="speed icon" />
      <p style={{color: "#BABEC4"}} className="font-normal">Electric car</p>
    </div>
    <div className="flex justify-center mb-20">
      <img src={Car} alt="car img" />
    </div>

    <div className="flex justify-center align-center mb-20">
      <div className="mx-4 flex flex-col justify-center items-center">
        <img className="text-center mb-2" src={TempIcon} alt="temp icon" />
        <p className="text-center mb-2 text-2xl text-white font-semibold">24*</p>
        <p className="text-center mb-2 text-sm font-normal" style={{color: "#888B91"}}>TEMPERATURE</p>
      </div>
      <div className="mx-4 flex flex-col justify-center items-center">
        <img src={KmIcon} alt="km icon" className="text-center mb-2" />
        <p className="text-center text-2xl text-white mb-2 font-semibold" >873</p>
        <p className="text-center text-sm font-normal mb-2" style={{color: "#888B91"}}>MILEAGE</p>
      </div>
      <div className="mx-4 flex flex-col justify-center items-center">
        <img src={Speed2Icon} alt="speed icon" className="text-center mb-2" />
        <p className="text-center text-2xl font-semibold text-white mb-2" >94%</p>
        <p className="text-center text-sm font-normal mb-2" style={{color: "#888B91"}}>BATTERY</p>
      </div>
    </div>

    <div className="flex justify-center mb-20">
      <img src={StartIcon} alt="start icon" />
    </div>
  </section>

  <section id="about" className="text-center mb-40">
    <div className="flex justify-center items-center mr-24">
      <div>
        <img src={AboutCar} alt="about car" />
    </div>
    <div style={{width: "25rem", height: "18rem"}} className="ml-24 text-left">
      <h2 className="text-2xl font-semibold mb-2" style={{color: "#F1F2F3"}}>
      Electric Luxury
      </h2>
      <h2 className="text-2xl font-semibold mb-8" style={{color: "#F1F2F3"}}>
       at Your Fingertips
      </h2>
      <p className="font-normal text-base mb-8" style={{color: "#BABEC4"}}>Discover electric luxury like never before with our car rental platform. Rent top-of-the-line electric vehicles with futuristic designs and innovative technologies from renowned brands, indulging in a truly exceptional driving experience.</p>
      <button className="rounded-sm text-white font-normal text-base px-8 py-4" style={{background: "#4177DC"}}>Know more</button>
    </div>
    </div>
  </section>

  <section id="popular" className="mb-20">
       <h2 style={{color: "#F1F2F3"}} className="font-semibold text-2xl text-center mb-1">Discover Electrifying Performance</h2>
       <h2 style={{color: "#F1F2F3"}} className="font-semibold text-2xl text-center mb-12">with Our Premium Electric Cars</h2>
       <div className="flex justify-center items-center">
        <div id="card" className="px-8 py-4 relative mx-8 rounded-md" style={{width: "16rem", height: "20rem", backgroundColor: "#2D3042"}}>
            <h2 style={{color: "#F1F2F3"}} className="font-semibold text-2xl mb-1">Porshe</h2>
            <p className="text-base font-normal mb-4" style={{color: "#BABEC4"}}>Turbo 5 Cross</p>
            <img src={Brand1} alt="brand" className="text-center mb-4" />
            <div className="flex justify-left mb-2">
              <div className="mr-4">
                <img src={TimeIcon} alt="icon" />
                <p className="text-sm font-normal text-white">3.7sec</p>
              </div>
              <div className="mx-4">
                <img src={Box} alt="icon" />
                <p className="text-sm font-normal text-white">356 km/hr</p>
              </div>
            </div>
            
            <div className="mb-4">
              <img src={ChargingIcon} alt="icon" />
              <p className="text-sm font-normal text-white">Electric</p>
            </div>
           
            <h3 className="text-white text-xl font-semibold">$175,900</h3>
            <div className="absolute bottom-0 right-0">
              <img src={BookMarkIcon} alt="icon" />
            </div>
        </div>
        

        <div id="card" className="px-8 py-4 relative mx-8 rounded-md" style={{width: "16rem", height: "20rem", backgroundColor: "#2D3042"}}>
          <h2 style={{color: "#F1F2F3"}} className="font-semibold text-2xl mb-1">Porshe</h2>
          <p className="text-base font-normal mb-4" style={{color: "#BABEC4"}}>Turbo 5 Cross</p>
          <img src={Car2} alt="brand" className="text-center mb-4" />
          <div className="flex justify-left mb-2">
            <div className="mr-4">
              <img src={TimeIcon} alt="icon" />
              <p className="text-sm font-normal text-white">3.7sec</p>
            </div>
            <div className="mx-4">
              <img src={Box} alt="icon" />
              <p className="text-sm font-normal text-white">356 km/hr</p>
            </div>
          </div>
          
          <div className="mb-4">
            <img src={ChargingIcon} alt="icon" />
            <p className="text-sm font-normal text-white">Electric</p>
          </div>
         
          <h3 className="text-white text-xl font-semibold">$175,900</h3>
          <div className="absolute bottom-0 right-0">
            <img src={BookMarkIcon} alt="icon" />
          </div>
      </div>

      <div id="card" className="px-8 py-4 relative mx-8 rounded-md" style={{width: "16rem", height: "20rem", backgroundColor: "#2D3042"}}>
        <h2 style={{color: "#F1F2F3"}} className="font-semibold text-2xl mb-1">Porshe</h2>
        <p className="text-base font-normal mb-4" style={{color: "#BABEC4"}}>Turbo 5 Cross</p>
        <img src={Brand3} alt="brand" className="text-center mb-4" />
        <div className="flex justify-left mb-2">
          <div className="mr-4">
            <img src={TimeIcon} alt="icon" />
            <p className="text-sm font-normal text-white">3.7sec</p>
          </div>
          <div className="mx-4">
            <img src={Box} alt="icon" />
            <p className="text-sm font-normal text-white">356 km/hr</p>
          </div>
        </div>
        
        <div className="mb-4">
          <img src={ChargingIcon} alt="icon" />
          <p className="text-sm font-normal text-white">Electric</p>
        </div>
       
        <h3 className="text-white text-xl font-semibold">$175,900</h3>
        <div className="absolute bottom-0 right-0">
          <img src={BookMarkIcon} alt="icon" />
        </div>
    </div>

       </div>
  </section>

  <section className="flex justify-center items-center flex-col mb-20">
    <h2 className="font-semibold text-2xl text-white text-center mb-12">More Features</h2>
    <div className="text-center">
      <img src={CarFeatured} alt="car icon" className="text-center"/>
    </div>
  </section>

  <section className="relative py-12" id="subscribe">
    <div className='flex justify-center items-center mr-8'>
      <div style={{height: '16.5rem'}}>
         <h2 className="text-2xl text-white font-semibold mb-1">Do You Want To Receive</h2>
         <h2 className="text-2xl text-white font-semibold mb-8">Special Offers?</h2>
         <p className="text-base font-normal" style={{color: "#BABEC4"}}>Get Plugged into CarConnect's Network</p>
         <p className="text-base font-normal" style={{color: "#BABEC4"}}>Join Our Mailing List for Exclusive Car Rental Insights</p>
         <p className="text-base font-normal mb-8" style={{color: "#BABEC4"}}>and New Car Notifications.</p>
         <button style={{borderRadius: "4px", backgroundColor: "#4177DC"}} className="text-white py-4 px-8 text-base">Subscribe Now</button>
      </div>
      <div className='ml-8'>
         <img src={Subscribe1} alt="subscribe image" />
      </div>
    </div>
  </section>
  </>
  )
}

export default Home