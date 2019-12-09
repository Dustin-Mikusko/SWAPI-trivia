import React from 'react';
import './ScrollingText.css';

const ScrollingText = (props) => {
  console.log(props);
  return (
    <div>
      <h2>sup d00dz</h2>
      <p>{props.movieText.replace("\r\n", "<br>")}</p>
    </div>
  )
}

export default ScrollingText;
