import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import { Route, Redirect } from 'react-router-dom';
import MovieContainer from '../MovieContainer/MovieContainer';
import CharacterContainer from '../CharacterContainer/CharacterContainer';


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
      selectedCharacters: []
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
    console.log(newUser)
    this.setState({ user: newUser })

  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(data => {
        return data.results.map(movie => {
          return {
            title: movie.title,
            episode: movie.episode_id,
            releaseDate: this.parseReleaseDate(movie.release_date),
            characters: this.fetchCharacters(movie.characters),
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

  fetchCharacters = (characters) => {
    let promises = [];
    for (let i = 0; i < 10; i++) {
      fetch(characters[i])
        .then(res => res.json())
        .then(character => {
          let world = this.fetchWorld(character.homeworld);
          let char = {
            name: character.name,
            world: world,
            species: this.fetchSpecies(character.species),
            relatedFilms: this.fetchFilms(character.films)
          }
          promises.push(char);
      })
    }
    return promises;
  }

    fetchWorld = (homeworld) => {
      let promises = [];
      fetch(homeworld)
        .then(res => res.json())
        .then(world => promises.push(world))
        .catch(error => console.log(error));

        return promises;
    }

    fetchSpecies = (charSpecies) => {
      let promises = [];
      charSpecies.map(species => {
        return fetch(species)
          .then(response => response.json())
          .then(data => promises.push(data.name))
          .catch(error => console.log(error))
      })
      return promises;
    }

    fetchFilms = (films) => {
      let promises = [];
      films.map(film => {
        return fetch(film)
          .then(response => response.json())
          .then(data => promises.push(data.title))
          .catch(error => console.log(error))
      })
      return promises;
    }

    updatedSelectedCharacters = (characters) => {
      this.setState({selectedCharacters: [...characters]})
    }

    render() {
      if (this.state.user.loggedIn && !this.state.selectedCharacters.length) {
       return (
       <>
          <Redirect to="/movies" />
          <Route exact path='/movies' render={() => <MovieContainer logOut={this.userLogOut} movies={this.state.movies} user={this.state.user}
          updatedSelectedCharacters={this.updatedSelectedCharacters} /> }
        />
       </>
       )
      }
        return (
          <main>
            <Route exact path='/' render={ () => <Form addUser={this.addUser} /> } />

            <Route exact path='/movies' render={() => <MovieContainer logOut={this.userLogOut} movies={this.state.movies} user={this.state.user} updatedSelectedCharacters={this.updatedSelectedCharacters}/> } />

            <Route path='/movies/:movie_id' render={({ match }) => {
              console.log(match);
            const movie = this.state.movies.find(movie => movie.episode === Number(match.params.movie_id))
            return (
             <CharacterContainer
             {...movie} />
            )
          }} />
          </main>
        )
    }
}

export default App;
