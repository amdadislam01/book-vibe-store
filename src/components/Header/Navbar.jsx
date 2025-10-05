import React from 'react'
import { Link } from 'react-router';

const Navbar = () => {
    const links = (
        <>
            <Link to={'/'} className="m-2 font-work">Home</Link>
            <Link to={'/listed'} className="m-2 font-work">Listed Books</Link>
            <Link to={'/read'} className="m-2 font-work">Pages to Read</Link>
        </>
    );

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-base-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-10 navbar">
                {/* Left */}
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {links}
                            {/* Mobile Buttons */}
                            <div className="mt-3 flex flex-col gap-2">
                                <a className=" font-work px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white text-center">
                                    Sign In
                                </a>
                                <a className=" font-work px-4 py-2 bg-sky-600 hover:bg-sky-700 rounded-md text-white text-center">
                                    Sign Up
                                </a>
                            </div>
                        </ul>
                    </div>

                    {/* Brand */}
                    <a className=" font-work text-2xl font-bold text-green-700">
                        Book<span className="text-gray-900 font-work ">Vibe</span>
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{links}</ul>
                </div>

                {/* Right (Desktop Buttons) */}
                <div className="navbar-end gap-4 hidden sm:flex">
                    <a className=" font-work px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white">
                        Sign In
                    </a>
                    <a className=" font-work px-4 py-2 bg-sky-600 hover:bg-sky-700 rounded-md text-white">
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
