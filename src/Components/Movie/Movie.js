import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import poster from '../../images/movie.jpeg';

const Movie = ({ title, releaseDate, episode }) => {
  return (
    <article>
      <div className="image">
      <h1>EPISODE {episode}</h1>
      </div>
      <h3>Title: <span>{title}</span></h3>
      <h3>Release Date: <span>{releaseDate}</span></h3>
      <button type="button">View Characters</button>
    </article>
  )
}

export default Movie;
