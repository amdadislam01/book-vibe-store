import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-green-50 text-gray-700 py-12 px-6 md:px-20 mt-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Brand */}
                <div>
                    <h2 className="font-work text-2xl font-bold text-green-700">
                        Book<span className="font-work text-gray-900">Vibe</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                        Explore a world of books that inspire, entertain, and help you grow.
                        Freshen up your bookshelf with new adventures today!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 font-work">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-green-600 transition">Home</a></li>
                        <li><a href="#" className="hover:text-green-600 transition">Books</a></li>
                        <li><a href="#" className="hover:text-green-600 transition">Categories</a></li>
                        <li><a href="#" className="hover:text-green-600 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 font-work">Stay Updated</h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Subscribe to get the latest book updates and reading tips.
                    </p>
                    <form className="flex items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 w-full rounded-l-md border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
                        />
                        <button className="px-4 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 transition">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-200 mt-10 pt-6 text-center font-work text-gray-500 text-sm">
                © {new Date().getFullYear()} BookVibe. All rights reserved.
            </div>
        </footer>

    )
}

export default Footer
