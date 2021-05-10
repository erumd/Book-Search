import axios from "axios";
import React, { useState, useEffect } from "react";
import SavedBook from "../components/SaveBook/SavedBook";

const Saved = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
    axios.get("/api/books").then((response) => {
      setAllBooks(response.data);
    });
  };

 

  return (
    <div styles= {{textAlign: "center"}}>

      <h1 >Saved Books</h1>
      <div className="col-3"></div>
      {allBooks ? (
        allBooks.map((book) => (
          <SavedBook
            title={book.title}
            authors={book.authors}
            description={book.description}
            image={book.image}
            googleLink={book.googleLink}
            key={book._id}
            id={book._id}
            loadBooks={loadBooks}
          />
        ))
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>
                No saved Request
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Saved;
