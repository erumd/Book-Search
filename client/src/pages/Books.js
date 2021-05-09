import React, { useState, useEffect, Component } from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Card } from 'react-bootstrap';
import { Col, Row, Container } from "../components/Grid";
import { List} from "../components/List";
import Book from '../components/Book';
import API from "../utils/API";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField:''
    }
  }
}

function Books ()  {
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
      

      <Container>
					<div className="main-container">
						<Row>
							<Col size="md-12">
								<Jumbotron>
									<h1 className="text-center">
										<strong style={{color:'white'}}>
											Google Books Search
										</strong>
									</h1>
									<h5 className="text-center" style={{color:'white'}}>
										Search Books
									</h5>
								</Jumbotron>
							</Col>
							<Col size="md-12">
								<Card
									title=" Book Search"
									icon="far fa-book"
								>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col size="md-12">
							
								<Card title="Search Results">
									{this.state.books.length ? (
										<List>
											{this.state.books.map(
												(book) => (
													<Book
														key={ book.id }
														title={	book.volumeInfo.title }
                                                        authors={book.volumeInfo.authors.join(', ')}
                                                        description={ book.volumeInfo.description }
														// subtitle={ book.volumeInfo.subtitle }
														link={ book.volumeInfo.infoLink }
														image={ book.volumeInfo.imageLinks.thumbnail }
														Button={() => (
															<button
																onClick={() => this.handleBookSave( book.id )}
																className="btn btn-primary ml-2" >
																Save
															</button>
														)}
													/>
												)
											)}
										</List>
									) : (
										<h5 className="text-center">
											{this.state.message}
										</h5>
									)}
								</Card>
							</Col>
						</Row>
						<br />
					</div>
					<br />
				</Container>
    );
  }


export default Books;
