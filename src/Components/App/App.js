import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import { Route, Redirect } from 'react-router-dom';
import MovieContainer from '../MovieContainer/MovieContainer';
import CharacterContainer from '../CharacterContainer/CharacterContainer';
import Loading from '../Loading/Loading';


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
    console.log(newUser);
    this.setState({ isLoading: true });
    setTimeout(() => this.setState({ user: newUser, isLoading: false }), 7000)
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

  updateCharactersState = () => {
    this.checkMovies();
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

    checkMovies = () => {
      let ready = true;
      this.state.movies.forEach(movie => {
        movie.characters.forEach(character => {
          console.log(character.world);
          if (character.world.length === 0) {
            console.log('noooo')
            ready = false
          }
        })
      })
      if (ready) {
        console.log('why');
        this.setState({ selectedCharacters: true});
      } else {
        // this.checkMovies();
        console.log('again');
      }
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
          <Route exact path='/movies' render={() => <MovieContainer updateCharactersState={this.updateCharactersState} logOut={this.userLogOut} movies={this.state.movies} user={this.state.user}
         /> }
        />
       </>
       )
      }

      // if (!this.state.isReady) {
      //   return (
      //     <Loading />
      //   )
      // }
        return (
          <main>
            <Route exact path='/' render={ () => <Form addUser={this.addUser} /> } />

            <Route exact path='/movies' render={() => <MovieContainer logOut={this.userLogOut} movies={this.state.movies} user={this.state.user} updateCharactersState={this.updateCharactersState}/> } />

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
