import React, { useEffect, useState } from "react";
import "./Book.css";
import axios from "axios";
import Book from "./Book";
const URL = "https://simplescript-backend.onrender.com/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  // console.log(books);
  return (
    <div style={{  justifyContent: 'center', alignItems: 'center' }}>
      <ul>
      {/* i in as the index starting from 0 */}
        {books &&
          books.map((book, i) => (
            <li style={{margin:"5rem 4rem 0rem 4rem"}} key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;