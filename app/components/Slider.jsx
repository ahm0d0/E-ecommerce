'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchProductsData } from '../ReduxToolKit/SliderData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircle, faFireFlameCurved } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Slider() {
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
            const imgArray = data.map(item => ({ id: item.id, img: item.image }));
            setImage(imgArray);
        }
    }, [data]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setImageTarget((prev) => {
                if (prev >= 4) {
                    return 1; 
                }
                return prev + 1; 
            });
        }, 2500);
    
        return () => clearInterval(interval); 
    }, []);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <main className='w-full text-white bg-black md:m-10'>
            <div className='flex flex-col w-full h-full'>
                <div className='flex md:flex-row flex-col items-center justify-around w-full h-full'>
                    <div className='flex flex-col gap-10'>
                        <h1>
                            <FontAwesomeIcon icon={faFireFlameCurved} className='w-10 text-4xl' />
                            Trend Products
                        </h1>
                        <h1 className='md:text-6xl w-80'>Up to 10% off Voucher</h1>
                        <a href="#">Shop Now Font <FontAwesomeIcon icon={faArrowRight} className='w-5' /></a>
                    </div>
                    <div className='shadow-lg  md:h-auto shadow-white rounded-xl overflow-hidden'>
                        {img.length > 0 ? (
                            <Image
                                src={img[imgTarget - 1]?.img || "/fallback-image.jpg"}
                                width={200}
                                height={300}
                                alt="Picture of the author"
                                className="object-cover"
                                priority
                            />
                        ) : (
                            <h1>No Images Available</h1>
                        )}
                    </div>
                </div>
                <div>
                    <ul className='flex w-full justify-center gap-5 m-1'>
                        {img.map((item) => (
                            <li key={item.id} className='' onClick={() => setImageTarget(item.id)}>
                                <FontAwesomeIcon
                                    icon={faCircle}
                                    className={`w-4 border-2  transition-all  border-black rounded-full  cursor-pointer ${item.id === imgTarget ? "text-red-600 border-white" : "text-gray-400 border-black"}  hover:text-red-600 hover:border-white`}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}
