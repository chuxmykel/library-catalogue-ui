import React, { Component } from 'react';
import Filter from './Components/Filter';
import BookDisplay from './Components/BookDisplay';
import './App.css';

class App extends Component {
  state = {
    filterBy: 'title',
    searchTerm: '',
  }

  handleChange = e => {
    const { name, value } = e.target;
    if(name === 'filterBy') {
      this.setState({
        searchTerm: '',
      });
    }

    this.setState({
      [name]: value,
    });
  }

  render = () => {
    const { filterBy, searchTerm } = this.state;
    return (
      <div className="App">
        <Filter handleChange={this.handleChange} searchTerm={searchTerm} />
        <BookDisplay _key={filterBy} value={searchTerm} />
      </div>
    );
  }
}

export default App;
