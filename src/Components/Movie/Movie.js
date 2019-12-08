import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import poster from '../../images/movie.jpeg';
import { Link } from 'react-router-dom';

const Movie = ({ title, episode, releaseDate, image, openingCredits, updateCharactersState }) => {
  return (
    <article>
      <div className="image">
      <h1>EPISODE {episode}</h1>
      </div>
      <h3>Title: <span>{title}</span></h3>
      <h3>Release Date: <span>{releaseDate}</span></h3>
      <Link onClick={updateCharactersState} to={`/movies/${episode}`} className="characters" >View Characters
      </Link>
    </article>
  )

  }





export default Movie;
