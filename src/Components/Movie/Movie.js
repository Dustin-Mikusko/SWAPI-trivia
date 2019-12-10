import React, { Component } from 'react';
import './Movie.css';
import poster from '../../images/movie.jpeg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movie = ({ title, episode, releaseDate, showMovieCharacters }) => {
  return (
    <article>
      <div className="image">
      <h1>EPISODE {episode}</h1>
      </div>
      <h3>Title: <span>{title}</span></h3>
      <h3>Release Date: <span>{releaseDate}</span></h3>
      <div className="characters-button-container">
        <Link onClick={showMovieCharacters} to={`/movies/${episode}`} className="characters" >View Characters
        </Link>
      </div>
    </article>
  )

  }





export default Movie;

Movie.propTypes = {
  title: PropTypes.string,
  episode: PropTypes.string,
  releaseDate: PropTypes.string,
  showMovieCharacters: PropTypes.func
}
