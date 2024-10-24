import React from 'react'
import HeaderSections from './HeaderSections'
import Image from 'next/image'

export default function NewArrival() {
  return (
    <div className='m-20 mt-32'>
      <HeaderSections title="Featured" />
      <h1 className='text-4xl font-bold'>New Arrival</h1>
      
      <div className='w-full md:h-96 flex md:flex-row flex-col gap-10 mt-10 overflow-hidden'>
        <div className="bg-black md:w-1/2 h-full flex relative">
          <Image 
            width={500}
            height={200}
            src="/0c1817d3afa266b3c9f8c81ff0ed4428.png" 
            alt="pic" 
            className="h-full object-contain" 
          />
          <div className="text-white flex flex-col justify-end gap-2 h-full absolute bottom-0 p-4">
            <h1 className="text-lg font-bold">PlayStation 5</h1>
            <p className='w-44'>Black and White version of the PS5 coming out on sale.</p>
            <a href="#" className="underline">Shop Now</a>
          </div>
        </div>

        <div className='md:w-1/2 h-full flex flex-col gap-5'>
          <div className='bg-black md:h-1/2 w-full flex relative'>
            <div className='text-white flex flex-col h-full justify-end gap-2 md:p-4 absolute md:relative bottom-0'>
              <h1 className='text-lg font-bold'>Women’s Collections</h1>
              <p>Featured woman collections that give you another vibe.</p>
              <a href="#" className='underline'>Shop Now</a>
            </div>
            <Image 
              width={300}
              height={150}
              src="/08463f7e8f57dd3048a2444dbfa0cb90.jpeg" 
              alt="pic" 
              className="h-full object-cover  md:object-contain " 
            />
          </div>

          <div className='h-1/2 w-full flex md:flex-row flex-col gap-5'>
            <div className="bg-black h-44 md:w-1/2 relative flex">
              <Image 
                width={300}
                height={150}
                src="/2977438364a41d7e8c9d1e9a794d43ed.png" 
                alt="pic" 
                className="h-full object-contain" 
              />
              <div className="text-white flex flex-col h-full justify-end gap-2 p-4 absolute bottom-0">
                <h1 className="text-lg font-bold">Speakers</h1>
                <p>Amazon wireless speakers</p>
                <a href="#" className="underline">Shop Now</a>
              </div>
            </div>

            <div className='bg-black h-44 md:w-1/2 relative flex'>
              <Image 
                width={300}
                height={150}
                src="/5102562cf220504d288fa568eaa816dd.png" 
                alt="pic" 
                className="h-full object-contain" 
              />
              <div className="text-white flex flex-col h-full justify-end gap-2 p-4 absolute bottom-0">
                <h1 className="text-lg font-bold">Perfume</h1>
                <p>GUCCI INTENSE OUD EDP</p>
                <a href="#" className="underline">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
