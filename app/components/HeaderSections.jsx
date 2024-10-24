import React from 'react'

export default function HeaderSections({title="enter your title"}) {
  return (
    <div className=" rounded-md pr-10 flex items-center gap-5 mb-5 ">
    <span className='w-5 h-10 rounded-md bg-red-600'></span>
    <h1 className='text-red-600 font-bold '>{title}</h1>
    </div>
  )
}
