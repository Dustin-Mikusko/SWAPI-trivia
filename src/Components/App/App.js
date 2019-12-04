import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'

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
            return fetch(character)
            .then(response => response.json())
            .then(character => {
              let world = this.fetchWorld(character);
              return {
                name: character.name,
                world: world.name,
                population: world.population,
                species: this.fetchSpecies(character),
                relatedFilms: this.fetchFilms(character)
              }
            })
            .catch(error => console.log(error))
          })
          // return {
          //   title: movie.title,
          //   episode: movie.episode_id,
          //   releaseDate: release_date,
          //
          // }
        })
        return Promise.all(moviesAndCharactersPromises);

    })
    .then(data => console.log(data))
  }

    fetchWorld(character) {
      let world =
      fetch(character.homeworld)
        .then(response => response.json())
        .then(data => ({
          name: data.name,
          population: data.population
        }))
        .catch(error => console.log(error))
        // console.log('world', world);
      return world;
    }

    fetchSpecies(character) {
      let species =
      fetch(character.species)
        .then(response => response.json())
        .then(data => data.name)
        .catch(error => console.log(error))
      return species;
    }

    fetchFilms(character) {
      return character.films.map(film => {
        return fetch(film)
          .then(response => response.json())
          .then(data => data.title)
          .catch(error => console.log(error))
      })
    }

  render() {
    return (
     <Form 
      user={this.state.user}
     />
    )
  }
}

export default App;
