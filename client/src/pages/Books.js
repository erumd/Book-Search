import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


// class Books extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       books: [],
//       searchField:''
//     }
//   }
// }

function Books() {
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // searchBook = () => {
  //   request.get('https://www.googleapis.com/books/v1/volumes?q=search+terms')
  //   .query({q:this.searchField})
  //   .then(data) => {}
  // }

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container >
        {/* <Row> */}
          <div>
          <div className="jumbotron text-center">
            {/* <Jumbotron> */}
              <h1>Search For A Book 📚</h1>
            {/* </Jumbotron> */}
            </div>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Book Title"
              />
              {/* <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              /> */}
              {/* <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>

            <form className="form mt-5" fluid>
                <input
                className="form-control w-25 mx-auto"
                type="search"
                placeholder="Search for Book"
                name="search"
                onChange=""
                value=""
                />
            </form>
            <br></br>
          </div>
          <div >
            {/* <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron> */}
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        {/* </Row> */}
      </Container>
    );
  }


export default Books;
