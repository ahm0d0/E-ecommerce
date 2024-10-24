'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchProductsData } from '../ReduxToolKit/SliderData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircle, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';


export default function MusicExpeineScttion() {
    const dispatch = useDispatch();
    const data = useSelector((select) => select.products.data);
    const loading = useSelector((select) => select.products.loading);
    const error = useSelector((select) => select.products.error);
    const [img, setImage] = useState([]);
    const [imgTarget,setImageTarget ] = useState(2);
    
    useEffect(() => {
        dispatch(fetchProductsData());
    }, [dispatch]);

    useEffect(() => {
        if (data && data.length > 0) {
            const imgArray = data.map(item => ({id: item.id, img: item.image }));
            setImage(imgArray);
        }
    }, [data]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <main className='md:w-10/12 text-white bg-black md:m-auto overflow-hidden mb-20'>
        <div className='flex flex-col h-full'>
            <div className='flex md:flex-row flex-col md:m-20 items-center justify-between '>
                <div className='flex flex-col items-center md:items-start  gap-10'>
                    <h1 className='text-green-400'>Categories</h1>
                    <h1 className='md:text-5xl text-2xl w-full md:w-96'>Enhance Your Music Experience</h1>
                    <div className="flex flex-col items-center font-bold w-10/12">
            <div className="flex space-x-5">
            <div className="flex flex-col items-center bg-white rounded-full w-16 h-16 text-black ">
                    <span className="text-xl font-bold">03</span>
                    <span className="">Days</span>
                </div>
                <div className="flex flex-col items-center bg-white rounded-full w-16 h-16 text-black  ">
                    <span className="text-xl font-bold">23</span>
                    <span className="">Hours</span>
                </div>
                <div className="flex flex-col items-center bg-white rounded-full w-16 h-16 text-black ">
                    <span className="text-xl font-bold">19</span>
                    <span className="">Minutes</span>
                </div>
                <div className="flex flex-col items-center bg-white rounded-full w-16 h-16 text-black ">
                    <span className="text-xl font-bold">56</span>
                    <span className="">Second</span>
                </div>
            </div>
        </div>
                    <a href="#">
                        <div>
                            <button className='bg-green-500 hover:bg-green-700 rounded text-white font-bold p-3 px-5 mb-5 md:mb-0'>Buy Now!</button>
                        </div>
                    </a>
                </div>
                <div className='shadow-2xl md:h-auto shadow-gray-700 rounded-xl overflow-hidden  mb-5 md:mb-0'>
                    {img.length > 0 ? (
                        <Image
                            src={img[imgTarget - 1]?.img || "/fallback-image.jpg"}
                            width={200}
                            height={300}
                            alt="Picture of the author"
                            className="object-cover md:w-full md:h-full"
                            priority
                        />
                    ) : (
                        <h1>No Images Available</h1>
                    )}
                </div>
            </div>
        </div>
    </main>
    
        )
}
