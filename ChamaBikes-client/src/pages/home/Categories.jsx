import React from 'react'

const categoryItems = [
  {id: 1 , title:"Bikes", des: "(28 available)", image: "/images/home/category/img1.png"},
  {id: 2 , title:"Scooters", des: "(13 available)", image: "/images/home/category/img2.png"},
  {id: 2 , title:"Electric Bikes", des: "(13 available)", image: "/images/home/category/img3.png"},
  {id: 3 , title:"Bicycle", des: "(8 available)", image: "/images/home/category/img4.png"},
  
]

const Categories = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16'>
      <div className='text-center'>
         
         <h2 className='title'>Main Catagories</h2>
      </div>

      {/*category cards */}
      <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12'>
        {
          categoryItems.map ((item, i) => (
            <div key={i} className='shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer 
            hover:-translate-y-4 duration-300 transition-all'>
              <div className='flex w-full mx-auto items-center justify-center'>
                <img src={item.image} alt="" className = 'bg-[#FF3300] p-5 rounded-full w-28 h-28'/>
              </div>
              <div className= 'mt-5 space-y-1'>
                <h5 className='font-semibold'>{item.title}</h5>
                <p>{item.des}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Categories