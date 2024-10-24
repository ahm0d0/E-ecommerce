  'use client'
  import { faFlipboard } from "@fortawesome/free-brands-svg-icons";
  import { faCarAlt, faHeart, faRotate, faStar, faTruckFast } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React ,{useState,useEffect} from 'react'
  import { toast } from "react-toastify";




  export default function Page({params}) {

    const { id } = params; // احصل على قيمة id من query
    const [data, setData]=useState({})
    const [count, setCount] = useState(1); // بدء العداد من 1
    const rating =4 
    useEffect(()=>{
        const fetchData = async()=>{
          try{
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            if (!response.ok) {
              throw new Error("cant get data");
            }
            const findProduct = await response.json()
            setData(findProduct) 
          }catch(Error){
            throw new Error(`err:${Error}`);  
          }
        }
        fetchData()
    },[id])
  console.log(data);


    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
      <div className="container mx-auto my-10 p-6 bg-white shadow-md rounded-md">
          <div className="flex flex-col md:flex-row">
          <div className="md:w-1/6  ">
                  <img src={data.image} alt="Havic HV G-92 Gamepad" className="w-1/2 rounded-md object-contain bg-gray-300 mb-8" />
                  <img src={data.image} alt="Havic HV G-92 Gamepad" className="w-1/2 rounded-md object-contain bg-gray-300 mb-8" />
                  <img src={data.image} alt="Havic HV G-92 Gamepad" className="w-1/2 rounded-md object-contain bg-gray-300 mb-8" />
                  <img src={data.image} alt="Havic HV G-92 Gamepad" className="w-1/2 rounded-md object-contain bg-gray-300 mb-8" />
              </div>
              <div className="md:w-1/2 flex justify-center">
                  <img src={data.image} alt="Havic HV G-92 Gamepad" className="w-1/2  rounded-md object-contain " />
              </div>
              <div className="md:w-1/2 md:pl-6">
                  <h1 className="text-2xl font-bold mb-4 ">{data.title}</h1>
                  <div className="flex items-center gap-6">
                      <p className="text-lg font-semibold mb-2"><span> {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon 
                          key={index} 
                          icon={faStar} 
                          className={`text-yellow-500 w-6 ${index < rating ? "text-yellow-500" : "text-gray-400"}`} 
                      />
                  ))}</span>(150 Reviews)</p>
                      <p className="text-green-600 mb-2">In Stock</p>
                  </div>
                  <p className="text-xl font-bold mb-4">{data.price+"$"}</p>
                  <p className="mb-4">
                  {data.description} </p>
                  <hr className="m-5" />
                  <div className="mb-4 flex gap-4">
                      <h2 className="font-semibold">Colours:</h2>
                      <ul className="p-2 rounded flex gap-4">
                          <li className="bg-red-600 rounded-full w-4 h-4 border p-2 hover:border-black"></li>
                          <li className="bg-blue-600 rounded-full w-4 h-4 border p-2 hover:border-black"></li>
                          <li className="bg-black rounded-full w-4 h-4 border p-2 hover:border-black"></li>
                      </ul>
                  </div>
                  <div className="mb-4 flex gap-4">
                      <h2 className="font-semibold">Size:</h2>
                      <ul className="rounded flex gap-4">
                          {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                              <li key={size} className="border py-1 px-3 rounded-md border-black hover:text-white hover:bg-red-600 cursor-pointer">
                                  {size}
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="flex items-center gap-5 mb-5">
                      <div className="flex items-center border rounded-md">
                          <button onClick={decrement} className="text-black border border-black px-4 py-2 rounded-l-md hover:bg-red-100 transition duration-200">-</button>
                          <span className="text-xl p-2 rounded-md">{count}</span>
                          <button onClick={increment} className="bg-red-600 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition duration-200">+</button>
                      </div>
                      <button className="bg-red-600 text-white py-2 px-4 rounded">Buy Now</button>
                      <FontAwesomeIcon icon={faHeart} className="text-black border border-black py-3 px-4 rounded-md" />
                  </div>
                  <div className="border border-black p-2 rounded-md w-10/12">
                      <div className="mt-4">
                          <div className="text-sm flex items-center gap-5">
                              <span><FontAwesomeIcon className="text-2xl" icon={faTruckFast} /></span>
                              <div className="flex flex-col">
                                  <p>Free Delivery</p>
                                  <h2 className="font-semibold">Enter your postal code for Delivery Availability</h2>
                              </div>
                          </div>
                      </div>
                      <hr className="m-10" />
                      <div className="mt-4">
                          <div className="text-sm flex items-center gap-5">
                              <span><FontAwesomeIcon className="text-2xl" icon={faRotate} /></span>
                              <div className="flex flex-col">
                                  <p>Return Delivery</p>
                                  <p className="text-sm">Free 30 Days Delivery Returns. Details</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );

  }

