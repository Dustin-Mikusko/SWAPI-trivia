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

    fetchWorld = (character) => {
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

    fetchSpecies = (character) => {
      let species =
      fetch(character.species)
        .then(response => response.json())
        .then(data => data.name)
        .catch(error => console.log(error))
      return species;
    }

    fetchFilms = (character) => {
      return character.films.map(film => {
        return fetch(film)
          .then(response => response.json())
          .then(data => data.title)
          .catch(error => console.log(error))
      })
    }

    render() {
      if (this.state.user.loggedIn) {
        console.log(this.state.movies)
        return (
          <main>
            <Redirect to="/movies" />
            <Route exact path='/movies' render={() => <MovieContainer movies={this.state.movies} user={this.state.user}/> } />
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

    // if (this.state.user.loggedIn) {
    //   return (
    //     <main>
    //       <Redirect to='/movies' />
    //       <Route exact path='/movies' render={() => <MovieContainer movies={this.state.movies}/> } />
    //     </main>
    //   )
    // } else {
    //   return (<Form addUser={this.addUser} userLogin={this.userLogin} />)
    // }




    // return (
    //   <body>
    //     <Route exact path='/' render={() => this.state.user.loggedIn ? <Redirect to='/movies' /> : <Form addUser={this.addUser} userLogin={this.userLogin}/> } />
    //   </body>
    //
    // )



export default App;






// return movie.characters.map(character => {
//   return fetch(character)
//   .then(response => response.json())
//   .then(character => {
//     let world = this.fetchWorld(character);
//     return {
//       name: character.name,
//       world: world.name,
//       population: world.population,
//       species: this.fetchSpecies(character),
//       relatedFilms: this.fetchFilms(character)
//     }
//   })
//   .catch(error => console.log(error))
// })

// return Promise.all(moviesAndCharactersPromises)
//           .then(data => console.log('line 59:', data))
//           .catch(err => console.log(err))
