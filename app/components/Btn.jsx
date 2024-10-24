import React from 'react'

export default function Btn({title}) {
  return (
    <div className='' >
        <button className='bg-red-600 rounded text-white font-bold p-3 px-5 hover:bg-red-700'>{title}</button>
    </div>
  )
}
