import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // استيراد الأيقونات من free-brands-svg-icons
import { faAppleAlt, faPaperPlane, faQrcode, faSearch } from '@fortawesome/free-solid-svg-icons'; // استيراد أيقونة Apple من free-solid-svg-icons
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'; // يجب إضافة أيقونة Google Play هنا

export default function Footer() {
  return (
    <div className="bg-black text-white p-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        

        <div>
          <h3 className="font-bold mb-4 text-lg">Exclusive</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Subscribe</a></li>
            <li><a href="#" className="hover:underline">Get 10% off your first order</a></li>
            <div className="flex items-center border mt-5 rounded-md md:p-2 bg-black border-1" >
            
            <input type="text" placeholder="Enter your Email" className="border-none w-16 md:w-44 outline-none bg-transparent " />
            <button className="p-1">
              <FontAwesomeIcon icon={faPaperPlane} className='w-5' />

            </button>
          </div>
          </ul>
        </div>
        
    
   
        <div>
          <h3 className="font-bold mb-4 text-lg">Support</h3>
          <p className="mb-1">My Account</p>
          <p className="mb-1">Email: <a href="mailto:exclusive@gmail.com" className="hover:underline">exclusive@gmail.com</a></p>
          <p>Phone: <a href="tel:+88015888889999" className="hover:underline">+88015-88888-9999</a></p>
        </div>


        <div>
          <h3 className="font-bold mb-4 text-lg">Account</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Login / Register</a></li>
            <li><a href="#" className="hover:underline">Cart</a></li>
            <li><a href="#" className="hover:underline">Wishlist</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
          </ul>
        </div>


        <div>
          <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms Of Use</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

   
        <div>
          <h3 className="font-bold mb-4 text-lg">Download App</h3>
          <p ><a href="#" className='text-sm'>Save $3 with App New User Only</a></p>
          <div className="flex space-x-4">
          <a href="#" className="transition transform hover:scale-110">
            <FontAwesomeIcon icon={faQrcode} size="lg" className="w-12"/>
        </a>
        <div className='flex flex-col'>
            <a href="#" className="flex items-center">
              <FontAwesomeIcon icon={faAppleAlt} className="w-6 m-1"/>
              App Store
            </a>
            <a href="#" className="flex items-center">
              <FontAwesomeIcon icon={faGooglePlay} className="w-6 " />
              Google Play
            </a>
          </div>
          </div>
          <div className="flex space-x-6 mt-3">
       
      
        <a href="#" className="transition transform hover:scale-110">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="w-5"/>
        </a>
        <a href="#" className="transition transform hover:scale-110">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="w-5" />
        </a>
        <a href="#" className="transition transform hover:scale-110">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="w-5" />
        </a>
        <a href="#" className="transition transform hover:scale-110">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="w-5" />
        </a>
        </div>
        </div>
        
        <div className="mt-8">


</div>
      </div>

    
  

      <div className="border-t text-gray-500 border-gray-600 mt-8 pt-5 text-center">
        <p>Copyright &copy; Rimel 2022. All rights reserved.</p>
      </div>
    </div>
  );
}
