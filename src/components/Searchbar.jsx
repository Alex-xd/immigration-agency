import React from 'react';
import './Searchbar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="dropdown-container">
        <select className="dropdown">
          <option value="undergraduate">Undergraduate</option>
          <option value="graduate">Graduate</option>
        </select>
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Search Area of Study"
      />
      <button className="search-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="#fff">
          <path d="M10 2a8 8 0 105.29 14.71l5.27 5.27a1 1 0 001.41-1.41l-5.27-5.27A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;