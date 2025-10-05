import React from 'react'
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/Error/ErrorPage';
import Home from '../pages/Home/Home';
import ListedBooks from '../pages/ListedBooks/ListedBooks';
import BookDetails from '../pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch('/booksData.json'), 
        element: <Home />
      },
      {
        path: '/listed',
        loader: () => fetch('/booksData.json'),
        element: <ListedBooks />
      },
      {
        path: '/bookDetails/:id',
        loader: () => fetch('/booksData.json'),
        element: <BookDetails />
      }
    ]
  }
]);
