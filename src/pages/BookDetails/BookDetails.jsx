import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addToStoreBook } from '../../Utility/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find((book) => book.bookId === bookId)
    const { bookName, image, author, rating, category, tags, review, yearOfPublishing, publisher, totalPages } = singleBook;

    const handleMarksAsRead = id => {
        // Store with Id
        // Were to store 
        // array or collection
        // if book already exist the slow a alart
        // if book not exist then push in the collection or array
        addToStoreBook(id);
    }


    return (
        <div className='mt-10 md:mt-20'>
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Side - Book Image */}
                <div className="bg-gray-100 p-6 rounded-2xl flex justify-center items-center">
                    <img
                        src={image}
                        alt="Book"
                        className="w-66 h-auto object-cover shadow-md drop-shadow-md"
                    />
                </div>

                {/* Right Side - Book Info */}
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold text-gray-800">
                        {bookName}
                    </h2>
                    <p className="text-gray-600 mt-2 font-work">
                        By : <span className="font-semibold font-work">{author}</span>
                    </p>
                    <hr className="my-2 text-gray-400" />
                    <p className="mt-2 text-gray-700 font-medium">{category}</p>
                    <hr className="my-3 text-gray-400" />

                    {/* Review */}
                    <div>
                        <h3 className="font-semibold font-work">Review :</h3>
                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                            {review}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex items-center gap-3">
                        <h3 className="font-semibold font-work">Tag</h3>
                        <div className="flex gap-2 flex-wrap">
                            {
                                tags.map((tag, i) => <span key={i} className="px-3 py-1 text-sm font-bold rounded-full bg-green-50 text-green-700">
                                    #{tag}
                                </span>
                                )
                            }
                        </div>
                    </div>

                    <hr className="my-4 text-gray-400" />

                    {/* Info Table */}
                    <div className="space-y-2 text-gray-700 text-sm">
                        <p>
                            <span className="font-medium font-work">Number of Pages : </span>
                            <span className="ml-5 font-work text-sm font-medium">{totalPages}</span>
                        </p>
                        <p>
                            <span className="font-medium font-work">Publisher : </span>
                            <span className="ml-18 font-work text-sm font-medium">{publisher}</span>
                        </p>
                        <p>
                            <span className="font-medium font-work">Year of Publishing : </span>
                            <span className="ml-3 font-work text-sm font-medium">{yearOfPublishing}</span>
                        </p>
                        <p>
                            <span className="font-medium font-work">Rating : </span>
                            <span className="ml-23 font-work text-sm font-medium">{rating}</span>
                        </p>
                    </div>
                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button onClick={() => handleMarksAsRead(id)} className="px-6 py-2 border rounded-md hover:bg-gray-100 transition">
                            Read
                        </button>
                        <button className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md transition">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails
