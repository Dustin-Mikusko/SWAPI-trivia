import React, { Component } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import poster from '../../images/movie.jpeg';
import { Link } from 'react-router-dom';

class Movie extends Component {
  constructor(props) {
    super(props);
      this.state = {
        characters: []
      }
    }

      updateState = () => {
        console.log(this.props.characters);
        this.setState({ characters: this.props.characters });
        this.submitCharacters();
      }

      submitCharacters = () => {
        console.log(this.state.characters);
        !this.state.characters ? console.log('no') : console.log('yes');
      }


      render() {
        console.log(this.props);
        return (
          <article>
            <div className="image">
            <h1>EPISODE {this.props.episode}</h1>
            </div>
            <h3>Title: <span>{this.props.title}</span></h3>
            <h3>Release Date: <span>{this.props.releaseDate}</span></h3>
            <Link onClick={this.updateState} to={`/movies/${this.props.episode}`} className="characters" >View Characters
            </Link>
          </article>
        )

  }
}





export default Movie;
