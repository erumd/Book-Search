const express = require("express");
const db = require("../models");
const router = express.Router();

//get books
router.get("/api/books", (req, res) => {
  db.Books.find({})
    .then((books) => {
      res.json(books);
    })
    .catch((err) => console.log(err));
});

//add new book
router.post("/api/books", (req, res) => {
  const newBook = {
    title: req.body.title,
    authors: req.body.authors,
    image: req.body.image,
    description: req.body.description,
    googleLink: req.body.googleLink,
  };
  db.Books.create(newBook).then((newBook) => {
    res.json(newBook);
  }).catch((err) => console.log(err));
});
// delete book
router.delete("/api/books/:id", (req, res) => {
    db.Books.findByIdAndDelete(req.params.id).then((deleted) => {
      res.json(deleted);
    });
  });
  
  module.exports = router;