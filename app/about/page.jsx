import React from 'react'
import Image from 'next/image'
import LastSection from '../components/LastSection'
import CardCategory from '../components/CardCategory'
import { faCircle, faDollar, faGift, faSackDollar, faStore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function page() {
  return (
    <main>
        <div className="w-full flex justify-between items-center">
            <div className="w-1/3 m-24 flex flex-col gap-5">
                <h1 className="text-6xl font-bold">Our Story</h1>
                <p>
                Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
                </p>
                <p className="mt-10">
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                </p>
            </div>
            <div className="w-1/2">
            <Image
            src="/abot.jpeg"
            width={500}
            height={50}
            className="object-contain w-full "
            />
            </div>
        </div>
        <div className="my-40">
    <div className="flex flex-col md:flex-row w-full md:justify-evenly gap-5 items-center">
        {/* First Card */}
        <div className="md:w-1/5 hover:cursor-pointer border hover:bg-red-600 rounded-md p-2 text-center group transition duration-200">
            <FontAwesomeIcon 
                icon={faStore} 
                className="text-4xl text-white bg-black rounded-full p-3 border-8 border-gray-400 mb-5 transition-colors duration-200 group-hover:text-white" 
            />
            <h1 className="text-3xl font-bold mb-3">10.5k</h1>
            <p className="mb-3">Sellers active on our site</p>
        </div>

        {/* Second Card */}
        <div className="md:w-1/5 hover:cursor-pointer border hover:bg-red-600 rounded-md p-2 text-center group transition duration-200">
            <FontAwesomeIcon 
                icon={faDollar} 
                className="text-4xl text-white bg-black rounded-full px-4 p-3 border-8 border-gray-400 mb-5 transition-colors duration-200 group-hover:text-white" 
            />
            <h1 className="text-3xl font-bold mb-3">33k</h1>
            <p className="mb-3">Monthly Product Sales</p>
        </div>

        {/* Third Card */}
        <div className="md:w-1/5 hover:cursor-pointer border hover:bg-red-600 rounded-md p-2 text-center group transition duration-200">
            <FontAwesomeIcon 
                icon={faGift} 
                className="text-4xl text-white bg-black rounded-full p-3 border-8 border-gray-400 mb-5 transition-colors duration-200 group-hover:text-white" 
            />
            <h1 className="text-3xl font-bold mb-3">45.5k</h1>
            <p className="mb-3">Customers active on our site</p>
        </div>

        {/* Fourth Card */}
        <div className="md:w-1/5 hover:cursor-pointer border hover:bg-red-600 rounded-md p-2 text-center group transition duration-200">
            <FontAwesomeIcon 
                icon={faSackDollar} 
                className="text-4xl text-white bg-black rounded-full p-3 border-8 border-gray-400 mb-5 transition-colors duration-200 group-hover:text-white" 
            />
            <h1 className="text-3xl font-bold mb-3">25k</h1>
            <p className="mb-3">Annual gross sales on our site</p>
        </div>
    </div>
</div>

<div className="container mx-auto my-10 p-6 ">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* الشخص الأول */}
        <div className="rounded-md p-4 transition duration-200">
            <div className="bg-gray-200 p-2 flex justify-center items-center mx-auto mb-4">
                <Image
                    src="/tom.png"
                    width={200}
                    height={200} // تغيير الارتفاع ليتناسب مع العرض
                    className="object-contain w-1/2 h-60" // تعديل هنا
                    alt="Tom Cruise"
                />
            </div>
            <h2 className="text-3xl font-semibold">Tom Cruise</h2>
            <p className="text-sm">Founder & Chairman</p>
            <span className="flex gap-4">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
        </div>

        {/* الشخص الثاني */}
        <div className="rounded-md p-4 transition duration-200">
            <div className="bg-gray-200 p-2 flex justify-center items-center mx-auto mb-4">
                <Image
                    src="/emaa.png"
                    width={200}
                    height={200} // تغيير الارتفاع ليتناسب مع العرض
                    className="object-contain w-1/2 h-60" // تعديل هنا
                    alt="Emma Watson"
                />
            </div>
            <h2 className="text-3xl font-semibold">Emma Watson</h2>
            <p className="text-sm">Managing Director</p>
            <span className="flex gap-4">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
        </div>

        {/* الشخص الثالث */}
        <div className="rounded-md p-4 transition duration-200">
            <div className="bg-gray-200 p-2 flex justify-center items-center mx-auto mb-4">
                <Image
                    src="/will.png"
                    width={200}
                    height={200} // تغيير الارتفاع ليتناسب مع العرض
                    className="object-contain w-1/2 h-60" // تعديل هنا
                    alt="Will Smith"
                />
            </div>
            <h2 className="text-3xl font-semibold">Will Smith</h2>
            <p className="text-sm">Product Designer</p>
            <span className="flex gap-4">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
        </div>

    </div>
    <ul className='flex w-full justify-center gap-5 m-1'>
          <li  className='' >
                <FontAwesomeIcon
                   icon={faCircle}
                  className={`w-4 border-2  transition-all  bg-gray-400 rounded-full  cursor-pointer   hover:text-red-600 hover:border-white`}
                    />
                  </li>
                  <li  className='' >
                <FontAwesomeIcon
                   icon={faCircle}
                  className={`w-4 border-2  transition-all  bg-gray-400 rounded-full  cursor-pointer  hover:text-red-600 hover:border-white`}
                    />
                  </li>
                  <li  className='' >
                <FontAwesomeIcon
                   icon={faCircle}
                  className={`w-4 border-2  transition-all  bg-gray-400 rounded-full  cursor-pointer  hover:text-red-600 hover:border-white`}
                    />
                  </li>
                  <li  className='' >
                <FontAwesomeIcon
                   icon={faCircle}
                  className={`w-4 border-2  transition-all  bg-gray-400 rounded-full  cursor-pointer  hover:text-red-600 hover:border-white`}
                    />
                  </li>
                  <li  className='' >
                <FontAwesomeIcon
                   icon={faCircle}
                  className={`w-4 border-2  transition-all  bg-gray-400 rounded-full  cursor-pointer  hover:text-red-600 hover:border-white`}
                    />
                  </li>
                    </ul>
</div>



        <LastSection/>
    </main>
  )
}
