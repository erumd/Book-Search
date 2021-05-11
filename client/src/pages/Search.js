//  used YouTube resources
import { React, useState } from 'react';
import Book from '../components/card/Book';
import API from '../utils/API';
import 'bootstrap/dist/css/bootstrap.css';

const Search = () => {
  const [searchResults, setsearchResults] = useState([]);
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    API.getBooks(search)
      .then((response) => {
        setsearchResults(response.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
        <form className="form mt-5">
          <div className="form-group row">
            <label htmlFor="inputSearch" className=" col-form-label"></label>
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
                Search for Book
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-3 mt-5"></div>
      {searchResults ? (
        searchResults.map((book, index) => (
          <Book
            // Google API. Got help from Youtube resources. I was getting errors.
            // Terinary 
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={
              book.volumeInfo.description
                ? book.volumeInfo.description
                : 'No Desciption. Click View Button'
            }
            image={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : ''
            }
            googleLink={book.volumeInfo.infoLink}
            key={index}
          />
        ))
      ) : (
        //git help from Youtube resources
        <div className="container">
          <div className="row">
            <h3>No results</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
