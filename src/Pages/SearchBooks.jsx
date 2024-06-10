import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from '../Components/BookList';

const defaultBooks = [
  { key: 'OL1M', title: 'The Great Gatsby', author_name: ['F. Scott Fitzgerald'], first_publish_year: 1925 },
  { key: 'OL2M', title: '1984', author_name: ['George Orwell'], first_publish_year: 1949 },
  { key: 'OL3M', title: 'To Kill a Mockingbird', author_name: ['Harper Lee'], first_publish_year: 1960 },
];

const SearchBooks = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState(defaultBooks);
  const [loading, setLoading] = useState(false);
  const [bookshelfCount, setBookshelfCount] = useState(0);
  const [addedToBookshelf, setAddedToBookshelf] = useState(false);

  useEffect(() => {
    if (query.length > 0) {
      setLoading(true);
      axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => {
          setBooks(response.data.docs);
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
          setLoading(false);
        });
    } else {
      setBooks(defaultBooks);
    }
  }, [query]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelfCount(storedBooks.length);
  }, []);

  const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    localStorage.setItem('bookshelf', JSON.stringify([...bookshelf, book]));
    setBookshelfCount(bookshelf.length + 1);
    setAddedToBookshelf(true);
  };

  return (
    <div className="p-8 w-full">
      <div className='w-full flex flex-col justify-center items-center'>
      <h1 className="text-3xl font-bold mb-6">Search Books</h1>
      <input
        type="text"
        className="w-full md:w-1/2 p-2 border border-gray-300 rounded mb-4 "
        placeholder="Search for books..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      ) : (
        <BookList books={books} addToBookshelf={addToBookshelf} />
      )}
      
    </div>
  );
};

export default SearchBooks;
