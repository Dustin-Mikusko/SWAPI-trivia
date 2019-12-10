import React from 'react';
import './MovieContainer.css';
import Movie from '../Movie/Movie'
import Header from '../Header/Header';
import PropTypes from 'prop-types';


const MovieContainer = ({ movies, logOut, user, showMovieCharacters }) => {
  let sortedMovies = movies.sort((a, b) => a.episode - b.episode);
  const allMovies = sortedMovies.map((movie, i) => {
    return < Movie
        key = {i}
        title = {movie.title}
        episode = {movie.episode}
        releaseDate = {movie.releaseDate}
        image = {movie.image}
        openingCredits = {movie.openingCredits}
        characters={movie.characters}
        showMovieCharacters={showMovieCharacters}
      />
  });

  return (
    <body>
      <Header
      logOut={logOut}
      user={ user }/>
      <main className="movieContainer">
        {allMovies}
      </main>
    </body>
  )
};

export default MovieContainer;

MovieContainer.propTypes = {
  movies: PropTypes.array,
  logOut: PropTypes.func,
  user: PropTypes.object,
  showMovieCharacters: PropTypes.func
}
