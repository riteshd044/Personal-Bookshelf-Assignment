import React from 'react';

const BookCard_BookSelf = ({ book, removeFromBookshelf }) => {
  const { key, title, author_name, first_publish_year } = book;

  const handleRemoveFromBookshelf = () => {
    if (removeFromBookshelf) {
      removeFromBookshelf(key);
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-md mb-4 w-full md:w-3/4 lg:w-1/2 bg-white">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700">{author_name && author_name.join(', ')}</p>
      <p className="text-gray-500">{first_publish_year}</p>
      {removeFromBookshelf && (
        <button 
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleRemoveFromBookshelf}
        >
          Remove from Bookshelf
        </button>
      )}
    </div>
  );
};

export default BookCard_BookSelf;
