'use client'
import { faCartShopping, faEye, faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../components/Card';
import { fetchSalesData } from '../ReduxToolKit/SalesProducts';
import HeaderSections from '../components/HeaderSections';
import Btn from '../components/Btn.jsx';
import { removeWishlist } from '../ReduxToolKit/wishList';


export default function Wishlist() {
    const wishlistItems = useSelector((state) => state.wishList.items);
    const dispatch = useDispatch();
    const data = useSelector((select) => select.sales.data);
    const loading = useSelector((select) => select.sales.loading);
    const error = useSelector((select) => select.sales.error);
  
    console.log(wishlistItems);
    
    useEffect(() => {
        dispatch(fetchSalesData());
    }, [dispatch]);

    function removeItemFromWishList(id){
       
    }

    let dataFiltration = data.filter((item) => item.rating.rate >= 4.6).splice(1, 4);

    return (
        <div className="container mx-auto my-10">
            <div className='w-full flex justify-between'>
            <h1 className="text-2xl font-bold mb-6">Wishlist ({wishlistItems.length})</h1>
            <button className='border rounded text-black font-bold p-3 px-5 hover:bg-gray-100'>Move All To Bag</button>

            </div>
            {wishlistItems.length === 0 ? (
                <p className="text-gray-500">Your wishlist is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {wishlistItems.map((item, index) => (
                       <div key={item.id} className="relative border rounded-lg shadow-md bg-white p-4">
                       <img src={item.CardImage} alt={item.Cardtitle} className="w-full h-56 object-contain rounded-md bg-slate-100" />
                       <button className="bg-black text-white w-full py-2 rounded mt-2 hover:bg-gray-800">
                           <FontAwesomeIcon icon={faCartShopping} className="mr-1" /> Add To Cart
                       </button>
                       <h2 className="text-lg font-semibold mt-2 line-clamp-2">{item.Cardtitle}</h2>
                       <p className="text-red-600 font-bold mt-2">${item.Cardprice}</p>
                       <div className="absolute top-4 right-4">
                           <button onClick={() => dispatch(removeWishlist(item.id))} className="p-2 text-gray-500 hover:text-red-500">
                               <FontAwesomeIcon icon={faTrashCan} className='w-4' />
                           </button>
                       </div>
                   </div>
                    ))}
                </div>
            )}
            <div className='mt-20'>
  <header className='flex flex-col md:flex-row items-center justify-between font-bold '>
      <div className='flex flex-col md:flex-row items-center gap-16'>
            <HeaderSections  title="Just For You"/>

      </div>
      <div className="flex justify-center mt-5">

      <button className='border rounded text-black font-bold p-3 px-5 hover:bg-gray-100'>See All</button>

</div>
  </header>
            <div className='flex  md:space-x-3 py-4 flex-wrap md:flex-nowrap' >
  {
      dataFiltration.map((item) => {      
          return (
              <div key={item.id} >
                  <Card image={item.image} title={item.title} price={item.price} />
              </div>
          );
      })
  }
</div>
            </div>
        </div>
    );
};


