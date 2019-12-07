import React, { Component } from 'react';
import './Form.css';
import starWarsLogo from '../../images/star-wars-logo.jpeg';
import { Link, Redirect } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quote: '',
      rank: '',
      error: {
          name: false,
          quote: false,
          rank: false,
        }
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  clearInputs = () => {
    this.setState({ name: '', quote: '', rank: '' });
  }

  submitUser = () => {
      const { addUser } = this.props;
      let user = {
        name: this.state.name,
        quote: this.state.quote,
        rank: this.state.rank,
        favoriteCharacters: [],
        loggedIn: true
      }
      addUser(user);
    }

  checkInputs = () => {
      let errorProperty = this.state.error;
      // console.log(1, errorProperty);
      Object.keys(errorProperty).forEach(key => {
        if (!this.state[key]) {
          errorProperty[key] = true;
          this.setState({error: errorProperty});
        } else {
          errorProperty[key] = false;
          this.setState({error: errorProperty})
        }
      });
      // console.log(3, {...errorProperty});
      this.checkReady();
    }

  checkReady = () => {
    let error = this.state.error;
    return !error.name && !error.quote && !error.rank ? this.submitUser() : console.log('nope, cann\'t do it');
  }


  render() {
    const nameErrorClass = this.state.error.name ? 'error-border' : '';
    const quoteErrorClass = this.state.error.quote ? 'error-border' : '';
    const rankErrorClass = this.state.error.rank ? 'error-border' : '';
    return (
      <form>
      <img src={starWarsLogo} alt='Star Wars logo' />
       <input
          className={nameErrorClass}
          type="text"
          placeholder=" Name"
          name="name"
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          className={quoteErrorClass}
          type="text"
          placeholder=" Favorite Star Wars Quote"
          name="quote"
          value={this.state.quote}
          onChange={event => this.handleChange(event)}
        />
        <select
          className={rankErrorClass}
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
