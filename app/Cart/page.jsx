'use client'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCartItem } from '../ReduxToolKit/cart.js'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import "../globals.css";
import Link from 'next/link';


export default function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const [quantities, setQuantities] = useState({}); 

    const handleQuantityChange = (id, value) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max(1, value),
        }));
    };

    const total = cartItems.reduce((acc, item) => {
        const quantity = quantities[item.id] || item.quantity; 
        return acc + item.Cardprice * quantity;
    }, 0);

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-2xl font-bold mb-6">Cart</h1>
            {cartItems.length === 0 ? (
                <div className="text-center">
                    <p className="text-gray-500">Your cart is empty.</p>
                    <button className="mt-4 border rounded text-black font-bold p-2 px-4 hover:bg-gray-100">
                        Return To Shop
                    </button>
                </div>
            ) : (
                <>
                    <table className="min-w-full  ">
                        <thead className="shadow-sm shadow-gray-300 mb-5">
                            <tr>
                                <th className="  p-4">Product</th>
                                <th className="  p-4">Price</th>
                                <th className="  p-4">Quantity</th>
                                <th className="  p-4">Subtotal</th>
                                <th className="  p-4">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr className="shadow-sm shadow-gray-300 mt-10" key={item.id}>
                                    <td className=" h-fit  p-4 flex gap-5 items-center">
                                        <div className="w-7 h-full">
                                            <Image src={item.CardImage} height={0} width={0} layout="responsive" className="object-contain"/>
                                        </div>
                                        <span className="truncate text-wrap line-clamp-1 w-32">{item.Cardtitle}</span>
                                    </td>
                                    <td className=" p-4">${item.Cardprice}</td>
                                    <td className="  p-4 flex justify-center items-center">
                                        <input 
                                            type="number" 
                                            value={quantities[item.id] || item.quantity} 
                                            onChange={(e) => {
                                                const value = Number(e.target.value);
                                                handleQuantityChange(item.id, value > 0 ? value : 1);
                                            }} 
                                            className='w-1/3 p-2 border text-center' 
                                            min="1"
                                        />
                                    </td>
                                    <td className="  p-4">
                                        ${(item.Cardprice * (quantities[item.id] || item.quantity)).toFixed(2)}
                                    </td>
                                    <td className="  p-4 text-center">
                                        <button onClick={() => dispatch(removeCartItem(item.id))} className="text-red-500">
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-between my-6">
                        <Link href="/">
                            <button className="border rounded text-black font-bold p-3 px-5 hover:bg-gray-100">Return To Shop</button>
                        </Link>
                        <Link href="/">
                            <button className="border rounded text-black font-bold p-3 px-5 hover:bg-gray-100">Update Cart</button>
                        </Link>
                            </div>
                            <div className="flex justify-between">
                                <div className="w-1/2">
                                <div className="mt-6">
                            <div className="flex items-center">
                                <input type="text" className="border w-1/4 p-4 flex-1" placeholder="Coupon Code" />
                                <button className="border bg-red-600 rounded text-white font-bold p-4 px-4 ml-2 hover:bg-red-700">Apply Coupon</button>
                            </div>
                        </div>
                                </div>
                        <div className=" w-1/4 p-5 border border-black rounded-sm">
                            <h2 className="font-bold">Cart Total</h2>
                            <p className="border-b border-gray-400 p-5">Subtotal: ${total.toFixed(2)}</p>
                            <p className="border-b border-gray-400 p-5">Shipping: Free</p>
                            <p className="p-5">Total: ${total.toFixed(2)}</p>
                            <Link 
                            href="/cheakout"
                                className={`bg-red-600 text-white m-auto py-2 px-4 rounded ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`} 
                                disabled={cartItems.length === 0}
                            >
                                Proceed to Checkout
                            </Link>
                        </div>
                        </div>
                </>
            )}
        </div>
    );
}
