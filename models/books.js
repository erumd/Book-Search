const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// change
const BooksSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  authors: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
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
