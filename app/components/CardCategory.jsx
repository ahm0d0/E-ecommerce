import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'

export default function CardCategory({icon , title}) {
  return (
    <div className='border-2 md:p-8 p-8 px-20 md:px-16 w-1/4 md:w-1/6 hover:bg-red-600 cursor-pointer group  transition-all'>
        <div className='flex flex-col justify-center items-center gap-5 h-10 md:h-20 group-hover:text-white'>
        <FontAwesomeIcon icon={icon} className='w-20 md:text-6xl' />
        <h1 className='group-hover:text-white'>{title}</h1>
        </div>
    </div>
  )
}
