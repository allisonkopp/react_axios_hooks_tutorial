import React from 'react';
import { Gif, NoGifs } from '..';

const Gifs = ({ gifs }) => (
  <ul className="gif-list">{!!gifs.length ? gifs.map(gif => <Gif gif={gif} key={gif.id} />) : <NoGifs />}</ul>
);

export default Gifs;
