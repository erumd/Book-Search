import { React, useState } from "react";
import API from "../utils/API";
import "bootstrap/dist/css/bootstrap.css";
import BookCard from "../components/card/BookCard";


const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.getBooks(search)
      .then((response) => {
        setResults(response.data.items);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
        <form>
          <div className="form-group row">
            <label htmlFor="inputSearch" className=" col-form-label">
              Search:
            </label>
            <div className="col-sm-10">
              <input
                type="search"
                name="search"
                className="form-control"
                id="inputSearch"
                placeholder="Search"
                value={search}
                onChange={handleInputChange}
              />
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary mt-2"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-3"></div>
      {results ? (
        results.map((book, index) => (
          <BookCard
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={
              book.volumeInfo.description
                ? book.volumeInfo.description
                : "This book does not contain a description. If you would like to learn more, please click on the view button to navigate to the Google Books website page for this book."
            }
            image={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : "https://image.flaticon.com/icons/png/512/130/130304.png"
            }
            googleLink={book.volumeInfo.infoLink}
            key={index}
          />
        ))
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>This search contains no results. Please try again.</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
