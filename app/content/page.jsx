import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function page() {
  return (
    <div className="container mx-auto my-10 p-6 bg-white shadow-md rounded-md">
    
    
    <div className="flex justify-between mb-8">
        {/* Manage My Account Section */}
        <div className="w-1/3 mr-4">
            <h2 className="text-lg font-semibold mb-4 flex gap-5 ml-5"><span><FontAwesomeIcon icon={faPhone}className='text-white bg-red-600 p-2 rounded-full'/></span><p>Call To Us</p></h2>
            <ul className="pl-5 flex flex-col gap-3">
                <li><a href="#" className="text-black  hover:text-red-600">We are available 24/7, 7 days a week.</a></li>
                <li><a href="#" className="text-black  hover:text-red-600">Phone: +8801611112222</a></li>
                <hr className="w-1/2"/>
                <h2 className="text-lg font-semibold mb-4 flex gap-5"><span><FontAwesomeIcon icon={faEnvelope} className='text-white bg-red-600 p-2 rounded-full'/></span><p>Write To US</p></h2>
                <li><a href="#" className="text-black  hover:text-red-600">Fill out our form and we will contact you within 24 hours.</a></li>
                <li><a href="#" className="text-black  hover:text-red-600">Emails: customer@exclusive.com</a></li>
                <li><a href="#" className="text-black  hover:text-red-600">Emails: support@exclusive.com</a></li>
            </ul>
        </div>

        {/* My Profile Section */}
        <div className="w-2/3">
         
            <form >
                <div className="flex gap-20">
                <div className="mb-4 w-1/3">
                  
                    <input
                        type="text"
                        name="firstName"
                       placeholder="Your Name *"
                        className="border p-2 w-full bg-gray-200 opacity-50 rounded"
                        required
                    />
                </div>
                <div className="mb-4 w-1/3">
                   
                    <input
                        type="text"
                        name="lastName"
                       placeholder="Your Email*"
                        className="border p-2 w-full bg-gray-200 opacity-50 rounded"
                        required
                    />
                </div>
                <div className="mb-4 w-1/3">
                   
                    <input
                        type="number"
                        name="email"
                    placeholder="Your Phone *"
                        className="border p-2 w-full bg-gray-200 opacity-50 rounded"
                        required
                    />
                </div>
                </div>
                <div className="flex gap-20">
                <div className="mb-4 w-full">
                <textarea
                name="address"
                className="border p-2 w-full bg-gray-200 opacity-50 h-60 rounded"
                rows="4" 
                placeholder="Your Massage"
                required
            ></textarea>
                </div>
                </div>

               
                <div className="flex justify-end gap-2">
                    <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded">Send Massage</button>
                </div>
            </form>
        </div>
    </div>

   
</div>
  )
}
