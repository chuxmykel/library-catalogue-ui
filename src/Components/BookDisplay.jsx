import React, { Component } from 'react';

class BookDisplay extends Component {
  state = {
    books: [],
    url: 'https://spring-library-catalogue.herokuapp.com/api/v1/books',
  }

  componentDidMount = async () => {
    const { url } = this.state;
    const response = await fetch(url);
    const books = await response.json();
    this.setState({
      books,
    });
  }

  componentDidUpdate = async (prevProps) => {
    const { _key, value } = this.props;
    if(prevProps._key !== _key || prevProps.value !== value) {
      const response = await fetch(this.buildUrl({ [_key]: value }));
      const books = await response.json();
      
      this.setState({
        books,
      });
    }
  }

  buildUrl = object => {
    const { url } = this.state;
    const key = Object.keys(object)[0];
    const value = object[key];
    if(key.length < 1 || value.length < 1) {
      return url;
    }
    
    return `${url}?${key}=${value}`;
  }

  render = () => {
    const { books } = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year of Release</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map(book => (
            <tr key={book.id}>
              <td>{`LD${book.id}`}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year_of_release}</td>
              <td>{book.genre}</td>
            </tr>))
          }
        </tbody>
      </table>
    );
  }
}

export default BookDisplay;
