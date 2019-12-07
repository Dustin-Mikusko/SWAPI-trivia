import React from 'react';
import './MovieContainer.css';
import Movie from '../Movie/Movie'
import Header from '../Header/Header'

const MovieContainer = ({ movies, user }) => {
  const allMovies = movies.map((movie, i) => {
    return < Movie
        key = {i}
        title = {movie.title}
        episode = {movie.episode}
        releaseDate = {movie.releaseDate}
        image = {movie.image}
        openingCredits = {movie.openingCredits}
      />
  })

  return (
      <main>
        <header>
          <Header user={ user }/>
        </header>
            {allMovies}
      </main>
  )
}

export default MovieContainer;
