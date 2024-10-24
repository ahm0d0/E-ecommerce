'use client'
import React,{useState} from 'react';

export default function MyAccount() {
    const [user,setUser]=useState(localStorage.getItem("email"))
    const [formData, setFormData] = useState({
        firstName: `${user}`,
        lastName: 'Rimel',
        email: `${user}@gmail.com`,
        address: 'Kingston, 5236, United States',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Profile Updated:', formData);
    };
    return (
        <>
        {user ?(
        <div className="container mx-auto my-10 p-6 bg-white shadow-md rounded-md">
            <h1 className="text-right font-bold mb-6">Welcome! <span className="text-red-600">{user}</span></h1>
            
            <div className="flex justify-between mb-8">
                {/* Manage My Account Section */}
                <div className="w-1/3 mr-4">
                    <h2 className="text-lg font-semibold mb-4 ">Manage My Account</h2>
                    <ul className="pl-5 flex flex-col gap-3">
                        <li><a href="#" className="text-black opacity-50 hover:text-red-600">My Profile</a></li>
                        <li><a href="#" className="text-black opacity-50 hover:text-red-600">Address Book</a></li>
                        <li><a href="#" className="text-black opacity-50 hover:text-red-600">My Payment Options</a></li>
                        <h2 className="text-lg font-semibold mb-4">My Orders</h2>
                        <li><a href="#" className="text-black opacity-50 hover:text-red-600">My Returns</a></li>
                        <li><a href="#" className="text-black opacity-50 hover:text-red-600">My Cancellations</a></li>
                        <h2 className="text-lg font-semibold mb-4">My WishList</h2>
                    </ul>
                </div>

                {/* My Profile Section */}
                <div className="w-2/3">
                    <h2 className="text-lg font-semibold mb-4 text-red-600">Edit your Profile</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="flex gap-20">
                        <div className="mb-4 w-1/3">
                            <label className="block mb-2">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="border p-2 w-full bg-gray-200 opacity-50 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4 w-1/3">
                            <label className="block mb-2">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="border p-2 w-full bg-gray-200 opacity-50 rounded"
                                required
                            />
                        </div>
                        </div>
                        <div className="flex gap-20">
                        <div className="mb-4 w-1/3">
                            <label className="block mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border p-2 w-full bg-gray-200 opacity-50 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4 w-1/3">
                            <label className="block mb-2">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="border p-2 w-full bg-gray-200 opacity-50 rounded"
                                required
                            />
                        </div>
                        </div>

                        <h2 className="text-lg font-semibold mb-4">Password Changes</h2>
                        <div className="mb-4 w-9/12">
                           
                            <input
                                type="password"
                                name="currentPassword"
                                value={formData.currentPassword}
                                onChange={handleChange}
                                className="border p-2 w-full bg-gray-200 opacity-50 rounded"
                                placeholder="Current Password"
                                required
                            />
                        </div>
                        <div className="mb-4 w-9/12">
                     
                            <input
                                type="password"
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                                className="border p-2 w-full bg-gray-200 opacity-50 rounded"
                                placeholder="New Password"
                                required
                            />
                        </div>
                        <div className="mb-4 w-9/12">
                        
                            <input
                                type="password"
                                name="confirmNewPassword"
                                value={formData.confirmNewPassword}
                                onChange={handleChange}
                                className="border p-2 w-full bg-gray-200 opacity-50 rounded"
                                placeholder="Confirm New Password"
                                required
                            />
                        </div>
                        <div className="flex justify-end gap-2">
                            <button type="button" className="text-gray-600">Cancel</button>
                            <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>

           
        </div>) :(<p>Please login</p>)}
        </>
    );
}
