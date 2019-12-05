import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import ReactDOM from 'react-dom';

describe('App', () => {
  it('should create main App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state of user when addUser is called', () => {
    const wrapper = shallow(<App />);
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

  
})
