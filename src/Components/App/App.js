import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import { Route, Redirect } from 'react-router-dom';
import MovieContainer from '../MovieContainer/MovieContainer'


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
      movies: []
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
            characters: [this.fetchCharacters(movie.characters)],
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
          let char = {
            name: character.name,
            world: this.fetchWorld(character.homeworld).name,
            population: this.fetchWorld(character.homeworld).population,
            species: this.fetchSpecies(character.species),
            relatedFilms: this.fetchFilms(character.films)
          }
          promises.push(char);
      })
    }
    return promises;
  }

    fetchWorld = (homeworld) => {
      let charWorld = {
        name: null,
        population: null
       };
      return fetch(homeworld)
        .then(res => res.json())
        .then(world => {
          charWorld = {
            name: world.name,
            population: world.population
        }
        console.log(charWorld)
        })
        .catch(error => console.log(error));
    }

    fetchSpecies = (species) => {
      let charSpecies =
      fetch(species)
        .then(response => response.json())
        .then(data => data.name)
        .catch(error => console.log(error))
      return charSpecies;
    }

    fetchFilms = (films) => {
      let promises = [];
      films.map(film => {
        return fetch(film)
          .then(response => response.json())
          .then(data => promises.push(data.title))
          .catch(error => console.log(error))
      })
      // console.log(promises);
    }

    render() {
      console.log(this.state.movies)
      if (this.state.user.loggedIn) {
        
        return (
          <main>
            <Redirect to="/movies" />
            <Route exact path='/movies' render={() => <MovieContainer logOut={this.userLogOut} movies={this.state.movies} user={this.state.user}/> } />
          </main>
        )
      } else {
          return (
            <main>
              <Route exact path='/' render={ () => <Form addUser={this.addUser} /> } />
            </main>
         )
      }
    }
}

export default App;
