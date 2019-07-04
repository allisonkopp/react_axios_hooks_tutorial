import React from 'react';

const Gif = ({ gif }) => (
  <li className="gif-wrap">
    <img src={gif.url} alt="" />
  </li>
);
export default Gif;
