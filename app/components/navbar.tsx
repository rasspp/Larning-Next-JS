import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white shadow-md py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <p className="text-lg font-bold">Logo Anda</p>
                </Link>
                <ul className="flex items-center space-x-4">
                    <li className="hover:text-gray-400 transition duration-300">
                        <Link href="/about">
                            <p>About</p>
                        </Link>
                    </li>
                    <li className="hover:text-gray-400 transition duration-300">
                        <Link href="/contact">
                            <p>Contact</p>
                        </Link>
                    </li>
                    <li className="hover:text-gray-400 transition duration-300">
                        <Link href="/services">
                            <p>Services</p>
                        </Link>
                    </li>
                </ul>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign In
                </button>
            </div>
        </nav>
    );
}