import React, { useState, useEffect } from 'react';
import { Gifs, Search } from './components';
import axios from 'axios';
import { get } from 'lodash';

const App = _ => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGifs = async (search = 'cats') => {
    const { data: { data = [] } = {} } = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${search}&limit=24&api_key=dc6zaTOxFJmzC`
    );
    const parsedData =
      data.length &&
      data.map(gifs => ({
        // url: x.images.fixed_height.url,
        url: get(gifs, 'images.fixed_height.url', ''),
        id: gifs.id
      }));
    setGifs(parsedData);
    setLoading(true);
  };

  useEffect(_ => {
    fetchGifs();
  }, []);

  return (
    <div className="App">
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">Gif Search</h1>
          <Search fetchGifs={fetchGifs} />
        </div>
      </div>
      <div className="main-content">{loading ? <Gifs gifs={gifs} /> : <p>Loading...</p>}</div>
    </div>
  );
};

export default App;
