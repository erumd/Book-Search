import axios from 'axios';
import React, { useState } from 'react';
// import {Jumbotron} from 'react-bootstrap';

const Book = ({ title, authors, description, image, googleLink }) => {
  const Save = (e) => {
    axios
      .post('/api/books', addBook)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const [addBook] = useState({
    title: title,
    authors: authors,
    description: description,
    image: image,
    googleLink: googleLink,
  });

  return (
    // <Jumbotron>
    <div
      className="container border"
      style={{ backgroundColor: 'LavenderBlush' }}
    >
      <p style={{ color: 'navy' }}>
        <div className="row">
          <h3 className="text">{title}</h3>
        </div>
        <div className="row">
          <h5>Author: {authors}</h5>
        </div>
        <div className="row">
          <div className="col-2">
            <img style={{ maxWidth: '100%' }} alt={title} src={image} />
          </div>
          <div className="col-10">
            <p>{description}</p>
          </div>
        </div>

        <div className="col-2">
          <br></br>
          <button
            type="button"
            onClick={Save}
            className="btn btn-info float-left"
          >
            Save
          </button>
          <a href={googleLink} target="_blank">
            <button type="button" className="btn btn-warning float-left">
              View
            </button>
          </a>
        </div>
      </p>
    </div>
    // </Jumbotron>
  );
};

export default Book;
