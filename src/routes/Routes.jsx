import React from 'react'
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/Error/ErrorPage';
import Home from '../pages/Home/Home';
import ListedBooks from '../pages/ListedBooks/ListedBooks';
import BookDetails from '../pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/", Component: Root, errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        loader: () => fetch('booksData.json'), 
        path: '/', 
        Component: Home
      },
      {
        path: '/listed', 
        Component: ListedBooks
      },
      {
        path: '/bookDetails/:id',
        loader: () => fetch('booksData.json'), 
        Component: BookDetails
      }
    ]
  },
]);