import React from "react";
import axios from "axios";

const SavedCard = ({ title, authors, image, description, googleLink, id, loadBooks }) => {
  

  const handleDelete = (e) => {
      console.log(e.target)
    axios.delete(`api/books/${e.target.id}`).then((res) => {
      console.log(res);
      loadBooks();
    }).catch((err) => console.log(err));
  };
  return (
    <div className="container border">
      <div className="row">
        <div className="col-12">
          <h3 className="float-left">{title}</h3>
          <button type="button" id={id} onClick={handleDelete} className="btn btn-danger float-right">
            Delete
          </button>
          <a href={googleLink} target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-primary float-right">
              View
            </button>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-left">
          <h6>Written by {authors}</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <img style={{"maxWidth": "100%"}}src={image} alt={title} />
        </div>
        <div className="col-10">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SavedCard;
