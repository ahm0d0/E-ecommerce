'use client'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import "../globals.css";
import { faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faDove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Checkout() {
    const cartItems = useSelector((state) => state.cart.items);
    const [quantities, setQuantities] = useState({});
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        address: '',
        apartment: '',
        city: '',
        phone: '',
        email: '',
        paymentMethod: 'bank',
        couponCode: '',
    });

    const total = cartItems.reduce((acc, item) => {
        const quantity = quantities[item.id] || item.quantity; 
        return acc + item.Cardprice * quantity;
    }, 0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="container flex justify-evenly mx-auto my-10">
            <form onSubmit={handleSubmit} className="mb-8 w-1/2 mx-auto">
                <h2 className="text-lg font-bold mb-4">Billing Details</h2>
                {['firstName', 'company', 'address', 'apartment', 'city', 'phone', 'email'].map((field, index) => (
                    <div className="mb-4" key={index}>
                        <label className="block mb-2 opacity-50 font-medium">
                            {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                            {field === 'firstName' || field === 'address' || field === 'city' || field === 'phone' || field === 'email' ? 
                                <span className="text-red-600">*</span> : null}
                        </label>
                        <input
                            type={field === 'email' ? 'email' : 'text'}
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="border border-gray-300 p-4 w-full opacity-50 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required={field === 'firstName' || field === 'address' || field === 'city' || field === 'phone' || field === 'email'}
                        />
                    </div>
                ))}

                <div className="mt-4">
                    <label className="flex items-center">
                        <input 
                            type="checkbox" 
                            className="mr-2 h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500 checked:bg-red-600 checked:border-transparent" 
                        />
                        <span className="text-sm">Save this information for faster check-out next time</span>
                    </label>
                </div>
            </form>

            <div className="flex flex-col w-1/3 mt-36">
                <div className="mb-8">
                    <table className="min-w-full border-collapse">
                        <tbody>
                            {cartItems.map((item) => (
                                <tr className="shadow-sm shadow-gray-300 mt-10" key={item.id}>
                                    <td className="h-fit p-4 flex gap-5 items-center">
                                        <div className="w-7 h-full">
                                            <Image src={item.CardImage} height={0} width={0} layout="responsive" className="object-contain"/>
                                        </div>
                                        <span className="truncate text-wrap line-clamp-1 w-32">{item.Cardtitle}</span>
                                    </td>
                                    <td className="p-4">${item.Cardprice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mb-6">
                    <p className="flex justify-between border-b border-gray-300 py-2">
                        <span>Subtotal:</span>
                        <span>${total.toFixed(2)}</span>
                    </p>
                    <p className="flex justify-between border-b border-gray-300 py-2">
                        <span>Shipping:</span>
                        <span>Free</span>
                    </p>
                    <p className="flex justify-between border-b border-gray-300 py-2 font-bold">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </p>
                </div>

                <div className="mb-8">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="bank"
                            checked={formData.paymentMethod === 'bank'}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <div className="flex justify-between w-full">
                       <p>Bank</p><span ><FontAwesomeIcon icon={faDove} />  <FontAwesomeIcon icon={faCcVisa} /> <FontAwesomeIcon icon={faCcMastercard} /></span>
                     </div> 
                   </label>
                    <label className="flex items-center mt-2">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="cod"
                            checked={formData.paymentMethod === 'cod'}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Cash on Delivery
                    </label>
                </div>

                <div className="mb-8">
                    <div className="flex items-center">
                        <input
                            type="text"
                            name="couponCode"
                            value={formData.couponCode}
                            onChange={handleChange}
                            className="border p-2 flex-1"
                            placeholder="Coupon Code"
                        />
                        <button className="border rounded text-white font-bold p-2 px-4 ml-2 bg-red-600 hover:bg-red-700">
                            Apply Coupon
                        </button>
                    </div>
                </div>

                <div>
                    <button type="submit" className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}
