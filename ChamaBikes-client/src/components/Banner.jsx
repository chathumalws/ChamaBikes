import React from 'react'

function Banner() {
  return (
    <div className ='section-container bg-gradient-to-r from-[#0D0300] from-0% to-[#0D0300]'>
         <div className ='py-24 flex flex-col md:flex-row justify-between items-center gap-8'>

             {/*texts */}
            <div className='md:w-1/2 space-y-7 px-4'>
            <h2 className='md:text-5xl text-4xl font-bold md:leading-sung leading-sung '>Explore the City With Our Top Quality Bikes</h2>
            <p className='text-xl text-[#FFF5F2]'>Affordable bike rentals in Sri Lanka. Secure your ride today with our transparent pricing.</p>
            <button className='btn bg-orange px-8 py-3 font-semibold text-white rounded-full'>Booking now</button>
            </div>
           
            {/*images */}
            <div className='md:w-1/2'>
                <img src="banner.png" alt=""/>
            </div>
          </div>
    
    </div>
      
  )
}

export default Banner
