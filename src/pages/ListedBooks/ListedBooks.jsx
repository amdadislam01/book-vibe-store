import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, removeFromStoreBook } from '../../Utility/addToDB';
import { FaBook, FaMapMarkerAlt, FaUser, FaTrash } from 'react-icons/fa';

const ListedBooks = () => {
    const [bookReadList, setBookReadList] = useState([]);
    const [sort, setSort] = useState("");
    const data = useLoaderData();

    useEffect(() => {
        const storedBook = getStoredBook();
        const convertedStoreBook = storedBook.map(id => parseInt(id));
        const readList = data.filter(book => convertedStoreBook.includes(book.bookId));
        setBookReadList(readList);
    }, [data]);

    // Sort function
    const handleSort = (type) => {
        setSort(type);
        if (type === "pages") {
            const sortedByPage = [...bookReadList].sort((a, b) => a.totalPages - b.totalPages);
            setBookReadList(sortedByPage);
        }
        if (type === "rating") {
            const sortedByRating = [...bookReadList].sort((a, b) => a.rating - b.rating);
            setBookReadList(sortedByRating);
        }
    };

    // Delete function
    const handleDelete = (id) => {
        const updatedList = bookReadList.filter(book => book.bookId !== id);
        setBookReadList(updatedList);
        removeFromStoreBook(id);
    };

    return (
        <div className='max-w-7xl mx-auto px-10 py-10'>
            <div className="bg-green-50 mt-10 md:mt-12 p-5 rounded-xl">
                <h1 className='font-bold text-2xl text-center font-work'>Books</h1>
            </div>

            {/* Sort Dropdown */}
            <div className="flex justify-center items-center mt-6">
                <div className="dropdown dropdown-bottom dropdown-center">
                    <div tabIndex={0} role="button" className="bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-5 py-2 rounded-md ml-1 cursor-pointer">Sort By {sort ? sort : ""} ⬇️</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("pages")}>Pages</a></li>
                        <li><a onClick={() => handleSort("rating")}>Rating</a></li>
                    </ul>
                </div>
            </div>

            {/* Tabs */}
            <div className="mt-12">
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    {/* Read Books Tab */}
                    <TabPanel>
                        <div className="grid gap-6">
                            {
                                bookReadList.map((rbook) => (
                                    <div key={rbook.bookId} className="flex flex-col md:flex-row gap-6 bg-white border border-gray-300 rounded-xl shadow-sm p-5 hover:shadow-md transition">
                                        {/* Left Side: Book Image */}
                                        <div className="flex-shrink-0 flex justify-center md:justify-start bg-green-50 p-6 rounded-xl ">
                                            <img
                                                src={rbook.image}
                                                alt={rbook.bookName}
                                                className="w-30 h-40 object-cover rounded-md"
                                            />
                                        </div>

                                        {/* Right Side: Book Info */}
                                        <div className="flex-1 space-y-3">
                                            <h2 className="text-xl font-bold font-playfair">{rbook.bookName}</h2>
                                            <p className="text-sm text-gray-600">
                                                By : <span className="font-medium">{rbook.author}</span>
                                            </p>

                                            {/* Tags */}
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span className="font-semibold">Tag</span>
                                                {rbook.tags.map((tag, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-1 text-xs rounded-md bg-green-100 text-green-700 font-medium"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                                <span className="flex items-center gap-2">
                                                    <FaMapMarkerAlt /> Year of Publishing: {rbook.yearOfPublishing}
                                                </span>
                                            </div>

                                            {/* Publisher, Year, Pages */}
                                            <div className="flex flex-wrap gap-6 text-sm text-gray-700 border-b border-dashed border-gray-400 pb-3">
                                                <span className="flex items-center gap-2">
                                                    <FaUser /> Publisher: {rbook.publisher}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <FaBook /> Page {rbook.totalPages}
                                                </span>
                                            </div>

                                            {/* Bottom Section */}
                                            <div className="flex flex-wrap items-center gap-4 pt-2">
                                                <span className="text-blue-600 font-medium">
                                                    Category: {rbook.category}
                                                </span>
                                                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                                                    Rating: {rbook.rating}
                                                </span>

                                                <button className="ml-auto bg-green-600 hover:bg-green-700 text-white text-sm px-5 py-2 rounded-full font-medium transition">
                                                    View Details
                                                </button>

                                                {/* Delete Button */}
                                                <button
                                                    onClick={() => handleDelete(rbook.bookId)}
                                                    className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-full font-medium flex items-center gap-2 transition"
                                                >
                                                    <FaTrash /> Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>

                    {/* Wishlist Books Tab */}
                    <TabPanel>
                        <h2 className='text-center text-2xl font-semibold font-work'>No Wishlist Books</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default ListedBooks
