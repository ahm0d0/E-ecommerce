'use client';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import "../globals.css";
export default function Page() {
    const router = useRouter();
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormValue(prevData => ({
            ...prevData,
            [name]: value 
        }));
    }

    function checkValues(e) {
    if (formValue.email.length >= 2 && formValue.password.length > 0) {
        
        localStorage.setItem("email", formValue.email);
    } else {
        
      return  alert('Please enter valid email and password');
    }
    router.push('/');
    }
    
        
   
      
      

      
    return (
        <div className="flex md:flex-row flex-col gap-10 items-center min-h-screen">
            <div className='md:w-7/12 rounded-sm overflow-hidden'>
                <Image
                    src={"/a1c7dc5b68a42239311e510f54d8cd59.jpeg"}
                    width={500}
                    height={500}
                    alt='pic'
                    className='w-full'
                />
            </div>
            <div className="p-8 rounded-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Log in to Exclusive</h2>
                <p className="mb-6">Enter your details below</p>
                
                <form onSubmit={checkValues}>
                
                    <div className="mb-4">
                        <input
                            type="text"
                            id="email"
                            name='email'
                            onChange={handleChange}
                            value={formValue.email}
                            placeholder='Email or Phone Number'
                            required
                            className="w-full p-2 border-b border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            id="password"
                            name='password'
                            onChange={handleChange}
                            value={formValue.password}
                            placeholder='Password'
                            required
                            className="w-full p-2 border-b border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                <div className='flex justify-between w-full'>
                    <button
                        type="submit"
                        className="w-1/3 bg-red-500 text-white p-2 py-3 font-bold rounded hover:bg-red-600 mb-4"
                    >
                        Log in
                    </button>
                    <Link href="Signup" className="text-red-500 w-1/2 p-2 ">Forget Password?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
