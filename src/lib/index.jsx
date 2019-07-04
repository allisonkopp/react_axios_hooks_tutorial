import React from "react";

const App = _ => (
  <div className="App">
    <div className="main-header">
      <div className="inner">
        <h1 className="main-title">Gif Search</h1>
        <div component="Search" />
      </div>
    </div>
    <div className="main-content">
      <p>Loading...</p>
    </div>
  </div>
);

const Gif = _ => (
  <li className="gif-wrap">
    <img src="" alt="" />
  </li>
);

const Gifs = _ => (
  <ul className="gif-list">
    <div component="Content" />
  </ul>
);

const NoGifs = _ => (
  <li className="no-gifs">
    <i className="material-icons icon-gif">sentiment_very_dissatisfied</i>
    <h3>Sorry, no GIFs match your search</h3>
  </li>
);

const Search = _ => (
  <form className="search-form">
    <label className="is-hidden" htmlFor="search">
      Search
    </label>
    <input type="search" name="search" placeholder="Search..." />
    <button type="submit" id="submit" className="search-button">
      <i className="material-icons icn-search" />
    </button>
  </form>
);

const url = "http://api.giphy.com/v1/gifs/search?q=cats&limit=24&api_key=dc6zaTOxFJmzC";
// hint: q=cats means you'll be searching for cat gifs
