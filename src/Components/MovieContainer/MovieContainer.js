import React from 'react';
import './MovieContainer.css';
import Movie from '../Movie/Movie'
import Header from '../Header/Header'

const MovieContainer = (props) => {
  let sortedMovies = props.movies.sort((a, b) => a.episode - b.episode);
  const allMovies = sortedMovies.map((movie, i) => {
    return < Movie
        key = {i}
        title = {movie.title}
        episode = {movie.episode}
        releaseDate = {movie.releaseDate}
        image = {movie.image}
        openingCredits = {movie.openingCredits}
        characters={movie.characters}
        updatedSelectedCharacters = {props.updatedSelectedCharacters}
      />
  })

  return (
    <body>
      <Header
      logOut={props.logOut}
      user={ props.user }/>
      <main>
        {allMovies}
      </main>
    </body>
  )
}

export default MovieContainer;
