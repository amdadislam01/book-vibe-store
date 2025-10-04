import React from 'react'
import bookimg from '/pngwing 1.png'

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-10 py-10">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-green-100 via-white to-green-50 rounded-2xl shadow-lg px-6 md:px-16 py-12 md:py-20">
                {/* Left Content */}
                <div className="text-center md:text-left max-w-xl space-y-6">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-snug">
                        Books to <span className="text-green-600">freshen up</span> your bookshelf
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl">
                        Discover a handpicked collection of books that will inspire, entertain, and expand your horizons.
                    </p>
                    <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-md transition duration-300 active:scale-95">
                        View The List
                    </button>
                </div>

                {/* Right Image */}
                <div className="mb-8 md:mb-0">
                    <img
                        src={bookimg}
                        alt="book-banner"
                        className="w-54 md:w-68 lg:w-76 drop-shadow-xl hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner
