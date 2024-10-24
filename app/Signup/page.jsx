'use client';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Page() {
    const router = useRouter();
    const [formValue, setFormValue] = useState({
        name: '',
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
        e.preventDefault();
        if (formValue.name.length >= 2 && formValue.email.length >= 2 && formValue.password.length > 0) {
            router.push('/login');
        }
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
                <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
                <p className="mb-6">Enter your details below</p>
                
                <form onSubmit={checkValues}>
                    <div className="mb-4">
                        <input
                            type="text"
                            id="name"
                            name='name'
                            placeholder='Name'
                            onChange={handleChange}
                            value={formValue.name}
                            required
                            className="w-full p-2 border-b border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

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

                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 mb-4"
                    >
                        Create Account
                    </button>
                </form>

                <button className="w-full text-black p-2 rounded hover:bg-stone-400 border-2">
                    <FontAwesomeIcon icon={faGoogle} className='mr-2' /> Sign up with Google
                </button>

                <p onClick={checkValues} className="text-center m-5">
                    Already have an account? <Link href="/login" className="text-black p-2 underline hover:text-red-600">Log in</Link>
                </p>
            </div>
        </div>
    );
}
