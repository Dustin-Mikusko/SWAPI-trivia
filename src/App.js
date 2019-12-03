import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: '',
        quote: '',
        rank: '',
        favoriteCharacters: []
      },
      movies: []
      // {
      //   title: '',
      //   episode: null,
      //   releaseDate: null,
      //   characters: [],
      //   image: '../images/movie.jpeg',
      //   openingCredits: ''
      // }
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(data => {
        let moviesAndCharactersPromises = data.results.map(movie => {

          return movie.characters.map(character => {
            let world = fetchWorld(character);
            return fetch(character)
            .then(response => response.json())
            .then(character => ({
              name: character.name,
              world: world.name,
              population: world.population,
              species: //fetch,
              relatedFilms: //fetch
            }))
          }
          ))

          return {
            title: movie.title,
            episode: movie.episode_id,
            releaseDate: release_date,

          }
        })
      })
    }

    fetchWorld(character) {
      let homeworld =
      fetch(character.homeworld)
        .then(response => response.json())
        .then(data => data)
      return {
        name: homeworld.name,
        population: homeworld.population
      }
    }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
      Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      >
      Learn React
      </a>
      </header>
      </div>
    )
  }
}

export default App;
