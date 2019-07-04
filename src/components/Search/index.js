import React, { useState } from 'react';

const Search = ({ fetchGifs }) => {
  const [name, setName] = useState(String());

  const handleSubmit = e => {
    e.preventDefault();
    fetchGifs(name);
    setName(String());
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="is-hidden" htmlFor="search">
        Search
      </label>
      <input type="search" name="search" placeholder="Search..." onChange={e => setName(e.target.value)} />
      <button type="submit" id="submit" className="search-button">
        <i className="material-icons icn-search" />
      </button>
    </form>
  );
};

export default Search;
