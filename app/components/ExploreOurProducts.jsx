'use client'
import React, { useEffect } from 'react'
import HeaderSections from './HeaderSections'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSalesData } from '../ReduxToolKit/SalesProducts.js'
import Btn from './Btn'


export default function ExploreOurProducts() {



    const dispatch = useDispatch();
    const data = useSelector((select) => select.sales.data);
    const loading = useSelector((select) => select.sales.loading);
    const error = useSelector((select) => select.sales.error);


    useEffect(() => {
        dispatch(fetchSalesData());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data || data.length === 0) return <div>No sales data available</div>;

    let dataFiltration = data.filter((item) => item.price >= 80).splice(0);

  return (
    <div className='m-20 mt-32'>
    <HeaderSections title="Our Products"/>
    <header className='flex flex-col md:flex-row items-center justify-between font-bold '>
        <div className='flex flex-col md:flex-row items-center gap-16'>
        <h1 className='text-5xl'>Explore Our Products</h1>
      
        </div>
        <div className='flex gap-5'>
            <button><FontAwesomeIcon icon={faArrowLeft} className='text-2xl bg-gray-200 text-black p-2 rounded-full' /></button>
            <button><FontAwesomeIcon icon={faArrowRight} className='text-2xl bg-gray-200 text-black p-2 rounded-full' /></button>
        </div>
    </header>
    <div className='flex flex-wrap space-x-4 py-4 ' style={{ scrollBehavior: 'smooth'}}>
    {
        dataFiltration.map((item) => {      
            return (
                <div key={item.id} className='md:w-1/5 flex-grow'>
                    <Card image={item.image} title={item.title} price={item.price} id={item.id}/>
                </div>
            );
        })
    }
</div>
<div className="flex justify-center mt-5">

        <Btn title={"View All Products"} c/>
</div>
    </div>
  )
}
