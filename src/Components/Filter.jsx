import React from 'react';

const Filter = ({ handleChange, searchTerm }) => {
  return (
    <div className="filter">
      <h3>Filter By</h3>
      <form>
        <div className="radio-container">
          <div className="radio">
            <input type="radio" name="filterBy" value="title" onChange={handleChange} defaultChecked />
            Title
          </div>
          <div className="radio">
            <input type="radio" name="filterBy" value="author" onChange={handleChange} />
            Author
          </div>
          <div className="radio">
            <input type="radio" name="filterBy" value="year_of_release" onChange={handleChange} />
            Release year
          </div>
          <div className="radio">
            <input type="radio" name="filterBy" value="genre" onChange={handleChange} />
            Genre
          </div>
        </div>
        <div>
          <input className="search-bar" type="text" name="searchTerm" placeholder="Search" onChange={handleChange} value={searchTerm} />
        </div>
      </form>
    </div>
  );
}

export default Filter;
