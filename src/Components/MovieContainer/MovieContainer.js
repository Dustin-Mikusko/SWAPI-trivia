import React from 'react';
import './MovieContainer.css';
import Movie from '../Movie/Movie'

const MovieContainer = ({ movies }) => {
  const allMovies = movies.map((movie, i) => {
    return (
      < Movie
        key = {i}
        title = {movie.title}
        episode = {movie.episode}
        releaseDate = {movie.releaseDate}
        image = {movie.image}
        openingCredits = {movie.openingCredits}
      />
    )
  })

  return (
    <main>
      {allMovies}
    </main>
  )
}

export default MovieContainer;
