'use client'
import React, { useEffect } from 'react'
import HeaderSections from './HeaderSections'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSalesData } from '../ReduxToolKit/SalesProducts.js'
import Btn from './Btn'

export default function FlashSales() {


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

  let dataFiltration = data.filter((item) => item.rating.rate >= 4.6).splice(1, 4);





return (
  <div className='m-20 mt-32'>
  <HeaderSections title="This Month"/>
  <header className='flex flex-col md:flex-row items-center justify-between font-bold '>
      <div className='flex flex-col md:flex-row items-center gap-16'>
      <h1 className='text-5xl'>Best Selling Products</h1>

      </div>
      <div className="flex justify-center mt-5">

<Btn title={"View All"} c/>
</div>
  </header>
  <div className='flex  md:space-x-3 py-4 flex-wrap md:flex-nowrap' >
  {
      dataFiltration.map((item) => {      
          return (
              <div key={item.id} >
                  <Card image={item.image} title={item.title} price={item.price} id={item.id} />
              </div>
          );
      })
  }
</div>
  </div>
)
}

