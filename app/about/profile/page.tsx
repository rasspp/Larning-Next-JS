
"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Profile() {
    const [user, setUser] = useState({});

    useEffect(() => {
        // Simulasi pengambilan data profil dari API
        // Anda dapat menggantinya dengan pengambilan data dari API yang sebenarnya
        const userData = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            avatar: '/avatar.jpg', // Ganti dengan URL foto profil yang sebenarnya
        };
        setUser(userData);
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Profile</h1>

            {user && (
                <div className="bg-white rounded shadow-md p-4">
                    <div className="flex items-center mb-4">
                        <img src={user.avatar} alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
                        <div>
                            <h2 className="text-lg font-bold">{user.name}</h2>
                            <p className="text-gray-600">{user.email}</p>
                        </div>
                    </div>

                    {/* Form untuk mengubah profil */}
                    <form className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <label className="text-gray-600">Name:</label>
                            <input type="text" value={user.name} disabled className="bg-gray-100 border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-blue-500" />
                        </div>

                        <div className="flex items-center space-x-2">
                            <label className="text-gray-600">Email:</label>
                            <input type="email" value={user.email} disabled className="bg-gray-100 border border-gray-300 rounded w-full p-2 focus:outline-none focus:border-blue-500" />
                        </div>

                        {/* Tombol untuk mengubah profil */}
                        {/* Anda dapat menggantikan tombol ini dengan fungsi untuk mengubah profil */}
                        {/* <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Profile</button> */}
                    </form>
                </div>
            )}
        </div>
    );
}