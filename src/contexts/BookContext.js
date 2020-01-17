import React, { useState, createContext } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks ] = useState([
    { author: 'Neil Gaiman', title: "American Gods", id: 1},
    { author: 'Ken Kesey', title: "One Flew Over the Cuckoos Nest", id: 2},
  ])

  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !==id));
  };
  
  return(
    <BookContext.Provider value={{books, addBook, removeBook}}>
      { props.children }
    </BookContext.Provider>
  )
}

export default BookContextProvider;