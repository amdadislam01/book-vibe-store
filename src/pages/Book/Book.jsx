import { StarIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Book = ({ book }) => {

    const { bookName, author, image, rating, category, tags, bookId } = book
    return (
        <Link to={`/BookDetails/${bookId}`}>
            <div className="max-w-md bg-white rounded-2xl shadow-md border border-gray-200 p-4">
                {/* Book Image with Background */}
                <div className="bg-green-50 rounded-lg p-6 flex justify-center">
                    <img
                        src={image}
                        alt="Book"
                        className="w-32 h-40 object-cover"
                    />
                </div>

                {/* Tags */}
                <div className="flex justify-center gap-2 mt-4 flex-wrap">
                    {
                        tags.map((tag, i) => <span key={i} className="px-3 py-1 text-sm font-bold rounded-full bg-green-50 text-green-700">
                            {tag}
                        </span>
                        )
                    }
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-center mt-4">
                    {bookName}
                </h3>

                {/* Author */}
                <p className="text-sm text-gray-600 text-center mt-1">
                    By : <span className="font-medium">{author}</span>
                </p>

                {/* Bottom Row */}
                <div className="flex justify-between items-center mt-4 border-t border-dashed pt-3 text-sm text-gray-600">
                    <span>{category}</span>
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-gray-800">{rating}</span>
                        <StarIcon size={16} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Book
