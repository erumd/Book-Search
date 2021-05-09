import React, { useState } from 'react';
import axios from 'axios';

const BookCard = ({ title, authors, image, description, googleLink }) => {
  const [newBook] = useState({
    title: title,
    authors: authors,
    description: description,
    image: image,
    googleLink: googleLink,
  });
  // save function
  const handleSave = (e) => {
    axios
      .post('/api/books', newBook)
      .then((res) => {
        console.log(res);
        // window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container border">
      <div className="row">
        <div className="col-12">
          <h3 className="float-left">{title}</h3>

          <a href={googleLink} target="_blank" rel="noreferrer"></a>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-left">
          <h5>Author: {authors}</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <img style={{ maxWidth: '100%' }} src={image} alt={title} />
        </div>
        <div className="col-10">
          <p>{description}</p>
        </div>
        <button type="button" className="btn btn-primary float-right">
          View
        </button>
        <button
          type="button"
          onClick={handleSave}
          className="btn btn-success float-right"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default BookCard;
