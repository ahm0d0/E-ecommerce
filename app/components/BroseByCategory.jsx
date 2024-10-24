'use client'
import React from 'react'
import HeaderSections from './HeaderSections';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCamera, faClock, faDisplay, faGamepad, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import CardCategory from './CardCategory';

export default function BroseByCategory() {

  return (
    <div className='m-20 mt-32'>
    <HeaderSections title="Categories"/>
    <header className='flex flex-col md:flex-row items-center justify-between font-bold '>
        <div className='flex flex-col md:flex-row items-center gap-16'>
        <h1 className='text-5xl mb-5 md:mb-0'>Browse By Category</h1>
        
        </div>
        <div className='flex gap-5'>
            <button><FontAwesomeIcon icon={faArrowLeft} className='text-2xl bg-gray-200 text-black p-2 rounded-full' /></button>
            <button><FontAwesomeIcon icon={faArrowRight} className='text-2xl bg-gray-200 text-black p-2 rounded-full' /></button>
        </div>
    </header>
    <div className='flex  md:flex-row flex-wrap md:flex-nowrap w-full md:space-x-2 py-4 mt-16 ' style={{ scrollBehavior: 'smooth'}}>
    <CardCategory title={"Iphones"} icon={faMobileScreenButton}/>
    <CardCategory title={"Computer"} icon={faDisplay}/>
    <CardCategory title={"SmartWatch"} icon={faClock}/>
    <CardCategory title={"Camera"} icon={faCamera}/>
    <CardCategory title={"Headphone"} icon={faHeadphones}/>
    <CardCategory title={"Gaming"} icon={faGamepad}/>
</div>

        <hr className='mt-16'/>
    </div>)
}
