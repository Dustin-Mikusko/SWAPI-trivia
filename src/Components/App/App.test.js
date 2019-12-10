import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { getData } from '../../apiCalls';

jest.mock('../../apiCalls.js');

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    getData.mockImplementation(() => {
      return Promise.resolve([
        {
          title: "Star Wars",
          episode: "2",
          releaseDate: "1999",
          characters: [{
            name: "Darth Vader",
            world: [{
              name: "Naboo",
              population: "450000000"
            }],
            species: ["Human"],
            relatedFilms: ["The Empire Strikes Back"]
          }],
          image: '../images/movie.jpeg',
          openingCredits: "Welcome to Star Wars"
        }
      ]);
    });
    wrapper = shallow(<App />);
  });
  
  it('should create main App component', () => {
    
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state of user when addUser is called', () => {
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

  it('should parse a date to return the year', () => {
    const date = '2000-1-2';
    expect(wrapper.instance().parseReleaseDate(date)).toEqual('2000')
  });

  it('should update user State when userLogOut is called', () => {
    const mockUserState = {
      name: 'Tom Brady',
      quote: 'Next ring is favorite',
      rank: 'GOAT',
      favoriteCharacters: [],
      loggedIn: true
    };
    const expected = {
      name: '',
      quote: '',
      rank: '',
      favoriteCharacters: [],
      loggedIn: false
    };

    wrapper.setState({ user: mockUserState });
    wrapper.instance().userLogOut();
    expect(wrapper.state('user')).toEqual(expected);
  });

  it('should update the selectedCharacters state when showMovieCharacters is called', () => {
    const expectedState = {
      selectedCharacters: true
    };

    wrapper.instance().showMovieCharacters();
    expect(wrapper.state('selectedCharacters')).toEqual(expectedState.selectedCharacters);
  });

})
