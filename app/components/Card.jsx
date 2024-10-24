'use client';
import { faEye, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addWishlist } from '../ReduxToolKit/wishList.js';
import { toast } from 'react-toastify';
import { addCartList } from '../ReduxToolKit/cart.js';
import Link from 'next/link.js';


export default function Card({ image, title, price, id  }) {
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.wishList.items);
    const rating = 4; 
    const [user , setUser]=useState(localStorage.getItem("email"))
    
    
    const sendWichLitData = () => {
        if (!user) {
           return  toast.warn("Please Login First") 
        }
        const myData = { id: Date.now(), CardImage: image, Cardtitle: title, Cardprice: price };
        const exists = wishlistItems.some(item => item.Cardtitle === title);

        if (!exists) {
            dispatch(addWishlist(myData));
            toast.success('Item added to WishList');
        } else {
            toast.info('Item already in WishList');
        }
    
    };

    const sendCartData = () => {
        if (!user) {
            return  toast.warn("Please Login First") 
         }
        const myData = { id: Date.now(), CardImage: image, Cardtitle: title, Cardprice: price,quantity: 1 };
        dispatch(addCartList(myData));
        toast.success('Item added to Cart');
    };

    return (
        <div className="border rounded-lg shadow-md bg-white relative md:w-90 mt-5 p-1 overflow-hidden group cursor-pointer min-w-64">
            <Link href={`/${id}`}>
            <img src={image} alt={title} className="w-full h-56 object-contain rounded-md bg-slate-100" />
            </Link>
            <button onClick={sendCartData} className="bg-black text-white w-full py-2 relative bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b">
                Add to Cart
            </button>
            <h2 className="text-lg font-semibold mt-2 line-clamp-1">{title}</h2>
            <div className='flex gap-4'>
                <p className="text-red-600 font-bold mt-2">${price}</p>
                <p className="text-gray-400 mt-2 line-through">${(price * 3).toFixed(2)}</p>
            </div>

            <div className="flex items-center mt-2 w-full h-6">
                {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon 
                        key={index} 
                        icon={faStar} 
                        className={`text-yellow-500 w-6 ${index < rating ? "text-yellow-500" : "text-gray-400"}`} 
                    />
                ))}
                <span className="ml-2">(44)</span>
            </div>

            <div className="absolute top-4 right-4 flex flex-col space-x-1">
                <button onClick={sendWichLitData} className="p-2 text-gray-500 hover:text-red-500">
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <Link href={`/${id}`} className="p-2 text-gray-500 hover:text-blue-500">
                    <FontAwesomeIcon icon={faEye} />
                </Link>
            </div>
           
        </div>
    );
}
