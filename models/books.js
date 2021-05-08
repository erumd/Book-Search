const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// change
const BooksSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required",
  },
  authors: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  googleLink: {
    type: String,
    required: true,
  },
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;
