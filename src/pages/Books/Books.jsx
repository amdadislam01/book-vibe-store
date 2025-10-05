import React, {  useState } from 'react'
import bookimg from '/pngwing 1.png'
import Book from '../Book/Book';

const Books = ({ data }) => {
    const [allBooks, setAllBooks] = useState([]);

    // useEffect(() => {
    //     fetch('/booksData.json')
    //     .then((res) => res.json())
    //     .then((data) => setAllBooks(data))
    // },[])

    // const bookPromise = fetch('/booksData.json')
    //     .then(res => res.json())
    return (
        <div className="max-w-7xl mx-auto px-10">
            <h1 className='text-4xl text-center py-10 font-bold'>Books</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data.map((book) => <Book key={book.bookId} book={book} />)
                }
            </div>
        </div>

    )
}

export default Books
