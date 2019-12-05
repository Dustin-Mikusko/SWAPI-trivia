import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import ReactDOM from 'react-dom';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should create main App component', () => {
    // const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state of user when addUser is called', () => {
    // const wrapper = shallow(<App />);
    const mockState = {
      name: '',
      quote: '',
      rank: '',
      favoriteCharacters: []
    }
    const newUser = {
      name: 'John Adams',
      quote: 'Do or do not.  There is no try.',
      rank: 'intermediate',
      favoriteCharacters: []
    }
    wrapper.setState({user: mockState});
    expect(wrapper.state('user')).toEqual(mockState);
    wrapper.instance().addUser(newUser)
  })

  // it('should call componentDidMount after rendering', () => {
  //   const mockComponentDidMount = jest.fn();
  //   expect(wrapper.instance().mockComponentDidMount).toHaveBeenCalled();
  // })

  it('should parse a date to return the year', () => {
    const date = '2000-1-2';
    expect(wrapper.instance().parseReleaseDate(date)).toEqual('2000')
  })

  // it('should fetch data for homeworld', () => {
  //   const fetchWorld = jest.fn();
  //   expect(wrapper.instance().fetchWorld).toHaveBeenCalled();
  // })

  // it('should fetch data for character species', () => {
  //   const fetchSpecies = jest.fn();
  //   expect(wrapper.instance().fetchSpecies).toHaveBeenCalled();
  // })

  // it('should fetch data for character's films', () => {
  //   const fetchFilms = jest.fn();
  //   expect(wrapper.instance().fetchFilms).toHaveBeenCalled();
  // })

  


})
