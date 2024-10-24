'use client';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faBox, faCircleXmark, faHeart, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

export default function NavBar() {
  const router = useRouter()
  const [userCheck, setUserCheck] = useState(useState(() => typeof window !== "undefined"? localStorage.getItem("email"):""));
  const [isOpen, setIsOpen] = useState(false);
  const wishlistItems = useSelector((state) => state.wishList.items);
  const CartItems = useSelector((state) => state.cart.items);
  
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };
  
  const handleMenuItemClick = (action) => {
    if (action == 'Logout') {
      localStorage.removeItem("email"); 
    setUserCheck(""); 
    router.push('/login');
    }
    setIsOpen(false); 
  };


  return (
    <div>
      <div className="bg-black h-10 text-white text-sm flex justify-between items-center md:px-4">
        <div className="flex items-center justify-center md:w-full">
          <p className="md:mr-2">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a href="#" className="underline mr-2">Shop Now</a>
        </div>
        <p className="md:mr-5 md:w-20">English ⌄</p>
      </div>

      {/* Nav */}
      <div className="text-black flex justify-around items-center h-16 md:px-4 mt-5">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold md:mr-4"><Link href={"/"}>Exclusive</Link></h1>
        </div>
        <nav className="flex space-x-2 md:space-x-8 md:p-5 text-xs md:text-lg">
          <Link href="/" className="transition-all border-b-2 border-white hover:border-gray-200 hover:border-b-2">Home</Link>
          <Link href="/content" className="transition-all border-b-2 border-white hover:border-gray-200 hover:border-b-2">Content</Link>
          <Link href="/about" className="transition-all border-b-2 border-white hover:border-gray-200 hover:border-b-2">About Us</Link>
          <Link href="/Signup" className="transition-all border-b-2 border-white hover:border-gray-200 hover:border-b-2">Sign Up</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border rounded-md md:p-2 bg-gray-100">
            <input type="text" placeholder="What are you looking for?" className="border-none w-16 md:w-44 outline-none bg-transparent" />
            <button className="p-1">
              <FontAwesomeIcon icon={faSearch} className='w-5' />
            </button>
          </div>
          <Link href="/WishList" className="flex items-center relative hover:underline">
    <FontAwesomeIcon 
        icon={faHeart} 
        className='w-4 hover:bg-red-600 cursor-pointer transition-all rounded-full p-2 hover:text-white' 
    />
<span className={`${wishlistItems.length === 0 ? "hidden" : ""} absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center`}>
{wishlistItems.length}
    </span>
</Link> 
          <div className="relative">
            <Link href="/Cart" className="flex items-center hover:underline">
              <FontAwesomeIcon icon={faShoppingCart} className='w-4 hover:bg-red-600 cursor-pointer transition-all rounded-full p-2 hover:text-white' />
              <span className={`${CartItems.length === 0 ? "hidden" : ""} absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center`}>
              {CartItems.length}
                  </span>
            </Link>
          </div>

          {userCheck && (
            <div className="relative">
              <a href="#" className="flex items-center hover:underline">
                <FontAwesomeIcon 
                  onClick={toggleMenu} 
                  icon={faUser} 
                  className='w-4 hover:bg-red-600 cursor-pointer transition-all rounded-full p-2 hover:text-white'
                />
              </a>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 blur-background text-white rounded shadow-lg">
                  <ul className="list-none p-2">
                    <Link href="/myaccount" className="py-2 px-1 hover:bg-gray-500 rounded-md cursor-pointer w-full" onClick={() => handleMenuItemClick('Manage My Account')}>
                      <FontAwesomeIcon icon={faUser} className='mr-1' /> Manage My Account
                    </Link>
                    <li className="py-2 px-1 hover:bg-gray-500 rounded-md cursor-pointer w-full" onClick={() => handleMenuItemClick('My Order')}>
                      <FontAwesomeIcon icon={faBox} className='mr-1' /> My Order
                    </li>
                    <li className="py-2 px-1 hover:bg-gray-500 rounded-md cursor-pointer w-full" onClick={() => handleMenuItemClick('My Cancellations')}>
                    <FontAwesomeIcon icon={faCircleXmark} className='mr-1'/> My Cancellations
                    </li>
                    <li className="py-2 px-1 hover:bg-gray-500 rounded-md cursor-pointer w-full" onClick={() => handleMenuItemClick('My Reviews')}>
                      <FontAwesomeIcon icon={faCircleXmark} className='mr-1' /> My Reviews
                    </li>
                    <li className="py-2 px-1 hover:bg-gray-500 rounded-md cursor-pointer w-full" onClick={() => handleMenuItemClick('Logout')}>
                      <FontAwesomeIcon icon={faArrowRightToBracket} className='mr-1' /> Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
}
