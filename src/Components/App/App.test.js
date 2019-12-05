import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import ReactDOM from 'react-dom';

describe('App', () => {
  it('should create main App component', () => {
    const wrapper = shallow( <App /> );
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when addUser is called', () => {
    const wrapper = shallow(< )
  })
})
