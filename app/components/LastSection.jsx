import { faHeadset, faShieldBlank, faTruck, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function LastSection() {
  return (
    <div className='flex flex-col md:flex-row w-full md:justify-evenly items-center my-40'>
        <div className='md:w-1/3 text-center '>
        <FontAwesomeIcon icon={faTruckFast} className='text-4xl text-white bg-black rounded-full p-3 py-4 border-8 border-gray-400 mb-5' />
        <h1 className='text-2xl mb-3'>FREE AND FAST DELIVERY</h1>
        <p className='mb-3'>Free delivery for all orders over $140</p>
        </div>
        <div className='md:w-1/3 text-center '>
        <FontAwesomeIcon icon={faHeadset} className='text-4xl text-white bg-black rounded-full p-3  border-8 border-gray-400 mb-5' />
        <h1 className='text-2xl mb-3'>24/7 CUSTOMER SERVICE</h1>
        <p className='mb-3'>Friendly 24/7 customer support</p>
        </div>
        <div className='md:w-1/3 text-center '>
        <FontAwesomeIcon icon={faShieldBlank} className='text-4xl text-white bg-black rounded-full p-3  border-8 border-gray-400 mb-5' />
        <h1 className='text-2xl mb-3'>MONEY BACK GUARANTEE</h1>
        <p className='mb-3'>We reurn money within 30 days</p>
        </div>
    </div>
  )
}
