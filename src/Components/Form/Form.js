import React, { Component } from 'react';
import './Form.css';
import App from '../App/App';
import starWarsLogo from '../../images/star-wars-logo.jpeg'

class Form extends Component {
  constructor({ name, quote, rank, favoriteCharacters }) {
    super({ name, quote, rank, favoriteCharacters });
    this.state = {
      name: '',
      quote: '',
      rank: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  clearInputs = () => {
    this.setState({ name: '', quote: '', rank: '' });
  }

  checkInputs = () => {
    Object.keys(this.state).forEach(key => {
      if (!this.state[key]) {
        document.querySelector(`.${key}`).classList.add('error-border')
      } else {
        document.querySelector(`.${key}`).classList.remove('error-border')
      }
    })
  }

  // goToNext() {
  //   this.checkInputs();
  // }

  render() {
    return (
      <form>
      <img src={starWarsLogo} alt='Star Wars logo' />
       <input
          className="name"
          type="text"
          placeholder=" Name"
          name="name"
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          className="quote"
          type="text"
          placeholder=" Favorite Star Wars Quote"
          name="quote"
          value={this.state.quote}
          onChange={event => this.handleChange(event)}
        />
        <select
          className="rank"
          name="rank"
          value={this.state.rank}
          onChange={event => this.handleChange(event)}
          >
            <option value=''>--Choose Level--</option>
            <option value="beginner">What Is Star Wars??</option>
            <option value="intermediate">Padawan</option>
            <option value="expert">The Force is Strong With This One...</option>
        </select>
        <button type="button" onClick={this.checkInputs}>Enter, You Will</button>
      </form>
    )
  }
}

export default Form;
