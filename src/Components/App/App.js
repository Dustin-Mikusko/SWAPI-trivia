import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import { Route, Redirect } from 'react-router-dom';
import MovieContainer from '../MovieContainer/MovieContainer';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import Loading from '../Loading/Loading';
import { getData, getFilm, getSpecies, getWorld, getCharacter } from '../../apiCalls';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: '',
        quote: '',
        rank: '',
        favoriteCharacters: [],
        loggedIn: false,
      },
      movies: [],
      selectedCharacters: false,
      isLoading: false
    }

  }

  userLogOut = () => {
    this.setState({ user: {
        name: '',
        quote: '',
        rank: '',
        favoriteCharacters: [],
        loggedIn: false,
    }});
  }

  addUser = newUser => {
    this.setState({ isLoading: true });
    setTimeout(() => this.setState({ user: newUser, isLoading: false }), 7000)
  }

  componentDidMount() {
    getData('https://swapi.co/api/films/')
      .then(data => {
        return data.results.map(movie => {
          return {
            title: movie.title,
            episode: movie.episode_id,
            releaseDate: this.parseReleaseDate(movie.release_date),
            characters: this.buildCharacterData(movie.characters),
            image: '../images/movie.jpeg',
            openingCredits: movie.opening_crawl
          }
       })
      })
      .then(movies => this.setState({ movies }))
      .catch(err => this.setState(err))
  }

  parseReleaseDate = date => {
    return date.split('-')[0];
  }

  buildCharacterData = (characters) => {
    let promises = [];
    for (let i = 0; i < 10; i++) {
      getCharacter(characters[i])
        .then(character => {
          let world = this.buildWorldData(character.homeworld);
          let char = {
            name: character.name,
            world: world,
            species: this.buildSpeciesData(character.species),
            relatedFilms: this.buildFilmData(character.films)
          }
          promises.push(char);
      })
    }
    return promises;
  }

    buildWorldData = (homeworld) => {
      let promises = [];
      getWorld(homeworld)
        .then(world => promises.push(world))
        .catch(error => console.log(error));
        return promises;
    }

    buildSpeciesData = (charSpecies) => {
      let promises = [];
      charSpecies.map(species => {
        return getSpecies(species)
          .then(data => promises.push(data.name))
          .catch(error => console.log(error))
      })
      return promises;
    }

    buildFilmData = (films) => {
      let promises = [];
      films.map(film => {
        getFilm(film)
          .then(data => promises.push(data.title))
          .catch(error => console.log(error))
      })
      return promises;
    }

    showMovieCharacters = () => {
      this.setState({ selectedCharacters: true} )
    }

    render() {
      if (this.state.isLoading) {
        return (
          <Loading />
        )
      }
      if (this.state.user.loggedIn && !this.state.selectedCharacters) {
       return (
       <>
          <Redirect to="/movies" />
          <Route exact path='/movies' render={() => <MovieContainer showMovieCharacters={this.showMovieCharacters} logOut={this.userLogOut} movies={this.state.movies} user={this.state.user}
         /> }
        />
       </>
       )
      }

        return (
          <main>
            <Route exact path='/' render={ () => <Form addUser={this.addUser} /> } />

            <Route exact path='/movies' render={() => <MovieContainer logOut={this.userLogOut} movies={this.state.movies} user={this.state.user} showMovieCharacters={this.showMovieCharacters}/> } />

            <Route path='/movies/:movie_id' render={({ match }) => {
            const movie = this.state.movies.find(movie => movie.episode == parseInt(match.params.movie_id))
            return (
             <CharacterContainer
             user={this.state.user}
             logOut={this.userLogOut}
             movie={movie} />
            )
          }} />
          </main>
        )
    }
}

export default App;
