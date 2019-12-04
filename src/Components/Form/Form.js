import React, { Component } from 'react';
import './Form.css';
import App from '../App/App';

class Form extends Component {
  constructor({ name, quote, rank, favoriteCharacters }) {
    super({ name, quote, rank, favoriteCharacters });
    this.state = {
      name: '',
      quote: '',
      rank: ''
    }
  }

  render() {
    return (
      <form>
       <h1>STAR WARS</h1>
       <input
          type="text"
          placeholder=" Name"
          name="name"
          value={this.state.name}
          onChange={event => this.handeChange(event)}
        />
        <input
          type="text"
          placeholder=" Favorite Star Wars Quote"
          name="quote"
          value={this.state.quote}
          onChange={event => this.handeChange(event)}
        />
        <select
          name="rank"
          value={this.state.rank}
          onChange={event => this.handleChange(event)}
          >
            <option value=''>--Choose Level--</option>
            <option value="beginner">What Is Star Wars??</option>
            <option value="intermediate">Padawan</option>
            <option value="expert">The Force is Strong With This One...</option>
        </select>
        <button type="button" onClick={this.goToNext}>Enter, You Will</button>
      </form>
    )
  }
}

export default Form;
