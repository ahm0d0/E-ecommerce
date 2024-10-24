import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function LeftMenu() {
  return (
    <div className="flex">
    <div className="text-black md:w-64 h-full p-5 border-r-2 md:ml-16 md:pt-8">
      <ul className="space-y-5">
        <li className='flex justify-between items-center'>
          <a href="#" className="hover:underline">Woman’s Fashion</a>
          <span><FontAwesomeIcon icon={faChevronRight} className='md:w-2'/></span>
        </li>
        <li className='flex justify-between items-center'>
          <a href="#" className="hover:underline">Men’s Fashion</a>
          <span><FontAwesomeIcon icon={faChevronRight} className='md:w-2'/></span>
        </li>
        <li className='flex justify-between items-center'>
          <a href="#" className="hover:underline">Electronics</a>
       
        </li>
        <li className='flex justify-between items-center'>
          <a href="#" className="hover:underline">Home & Lifestyle</a>
       
        </li>
        <li className='flex justify-between items-center'>
          <a href="#" className="hover:underline">Medicine</a>
       
        </li>
        <li className='flex justify-between items-center'>
          <a href="#" className="hover:underline">Sports & Outdoor</a>
       
        </li>
        <li className='flex justify-between items-center'>
          <a href="#" className="hover:underline">Baby’s & Toys</a>
       
        </li>
        <li className='flex justify-between items-center'>
          <a href="#" className="hover:underline">Groceries & Pets</a>
       
        </li>
        <li className='flex justify-between items-center'>
          <a href="#" className="hover:underline">Health & Beauty</a>
       
        </li>
      </ul>
    </div>
  </div>
  )
}
