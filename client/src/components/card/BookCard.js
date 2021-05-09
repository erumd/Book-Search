import React, { useState } from 'react';
import axios from 'axios';

const BookCard = ({ title, authors,description, image, googleLink }) => {
  const [newBook] = useState({
    title: title,
    authors: authors,
    description: description,
    image: image,
    googleLink: googleLink,
  });
  const handleSave = (e) => {
    axios
      .post('/api/books', newBook)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container border" style={{backgroundColor: "LavenderBlush"}}>
      <p style={{ color: 'navy' }}> 
        <div className="row">
          <div className="col-12">
            <h3 className="float">{title}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text">
            <h5>Author: {authors}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <img style={{ maxWidth: '100%' }} alt={title} src={image}  />
          </div>
          <div className="col-10">
            <p>{description}</p>
          </div>
        </div>

        <div className="col-2">
          <br></br>
          <button
            type="button"
            onClick={handleSave}
            className="btn btn-info float-left"
          >
            Save
          </button>
          <a href={googleLink} target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-warning float-left">
              View
            </button>
          </a>
        </div>
        </p>
    </div>
    
  );
};

export default BookCard;
