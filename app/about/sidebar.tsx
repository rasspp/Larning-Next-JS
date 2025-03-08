"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`absolute left-0 bg-gray-900 text-white h-screen ${isOpen ? 'w-64' : 'w-16'} shadow-lg transition-all duration-300`}>
            <div className="flex flex-col h-screen">
                <button onClick={toggleSidebar} className={`absolute top-4 right-4 text-white focus:outline-none`}>  
                    ☰
                </button>

                {isOpen && (
                    <div className="p-4">
                        <h1 className="text-xl font-bold">Documentation Next JS</h1>
                    </div>
                )}

                {isOpen && (
                    <ul className="mt-6 space-y-2">
                        <li>
                            <Link href="/dashboard">
                                <p className="block px-4 py-2 hover:bg-gray-700 transition duration-300 cursor-pointer">
                                    Dashboard
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile">
                                <p className="block px-4 py-2 hover:bg-gray-700 transition duration-300 cursor-pointer">
                                    Profile
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/settings">
                                <p className="block px-4 py-2 hover:bg-gray-700 transition duration-300 cursor-pointer">
                                    Settings
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/messages">
                                <p className="block px-4 py-2 hover:bg-gray-700 transition duration-300 cursor-pointer">
                                    Messages
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/logout">
                                <p className="block px-4 py-2 hover:bg-gray-700 transition duration-300 cursor-pointer">
                                    Logout
                                </p>
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}