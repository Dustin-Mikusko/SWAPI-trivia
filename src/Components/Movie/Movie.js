import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import poster from '../../images/movie.jpeg';

const Movie = ({ title, releaseDate, episodeId }) => {
  return (
    <article>
      <div className="image">
      <h1>EPISODE I</h1>
      </div>
      <h3>Title: <span>Revenge of the Sith</span></h3>
      <h3>Release Date: <span>2005</span></h3>
      <button type="button">View Characters</button>
    </article>
  )
}

export default Movie;
