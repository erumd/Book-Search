import axios from "axios";
import React, { useState, useEffect } from "react";
import SavedBook from "../components/SaveBook/SavedBook";

const Saved = () => {

  const loadBooks = () => {
    axios.get("/api/books").then((response) => {
      settotalBooks(response.data);
    });
  };

  const [totalBooks, settotalBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);


  return (
    <div styles= {{textAlign: "center"}}>

      <h1 >Saved Books</h1>
      <div className="col-3"></div>
      {totalBooks ? (
        totalBooks.map((book) => (
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
        <div className="container" >
          <div className="row" styles= {{textAlign: "center"}}>
            <div className="col-12">
              <h4>
                No saved Request
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Saved;
