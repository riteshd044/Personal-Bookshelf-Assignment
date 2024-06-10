import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, addToBookshelf}) => {
  return (
    <div className="flex flex-col items-center">
      {books.map(book => (
        <BookCard 
          key={book.key} 
          book={book} 
          addToBookshelf={addToBookshelf} 
        />
      ))}
    </div>
  );
};

export default BookList;
