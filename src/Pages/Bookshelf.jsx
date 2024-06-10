import React, { useState, useEffect } from 'react';
import BookList from '../Components/BookList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBooks);
  }, [refresh]);
  
  const handleClearLocalStorage = () => {
    localStorage.removeItem('bookshelf');
    alert('Local storage cleared successfully!');
    setRefresh(!refresh); 
  };

  const removeFromBookshelf = (key) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== key);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    setBookshelf(updatedBookshelf);
  };

  return (
    <div className="p-8 w-full">
      <div className='flex justify-between align-top'>
      <h1 className="text-3xl font-bold mb-6">My Bookshelf</h1>
      <div className="flex items-center mt-4">
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleClearLocalStorage}
        >
          <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
          Clear Local Storage
        </button>
      </div>
      </div>
      <BookList books={bookshelf}  />
    </div>
  );
};

export default Bookshelf;
