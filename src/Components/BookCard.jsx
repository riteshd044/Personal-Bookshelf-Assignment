import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BookCard = ({ book, addToBookshelf }) => {
  const { key, title, author_name, first_publish_year } = book;
  const [isInBookshelf, setIsInBookshelf] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    const foundBook = storedBooks.find(item => item.key === key);
    setIsInBookshelf(!!foundBook); // Update state based on whether the book is found in the bookshelf
  }, [key]);

  const handleAddToBookshelf = () => {
    if (addToBookshelf) {
      addToBookshelf(book);
      setIsInBookshelf(true);
    }
  };

  const isInBookshelfRoute = location.pathname === '/bookshelf';

  console.log(isInBookshelfRoute);
  return (
    <div className="border rounded-lg p-4 shadow-md mb-4 w-full md:w-3/4 lg:w-1/2 bg-white">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700">{author_name && author_name.join(', ')}</p>
      <p className="text-gray-500">{first_publish_year}</p>
      {!isInBookshelfRoute && (
        isInBookshelf ? (
          <button
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            disabled
          >
            Added to Bookshelf
          </button>
        ) : (
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleAddToBookshelf}
          >
            Add to Bookshelf
          </button>
        )
      )}
    </div>
  );
};

export default BookCard;
