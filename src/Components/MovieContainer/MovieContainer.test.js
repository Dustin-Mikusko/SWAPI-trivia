import React from 'react';
import { shallow } from 'enzyme';
import MovieContainer from './MovieContainer';

describe('MovieContainer', () => {

  it('should correctly match the snapshot with all the data passed correctly', () => {
    const wrapper = shallow (<MovieContainer
      movies = {
        [{
          key: 4,
          title: 'A Tale of Dustin Mikusko',
          episode: 1000,
          releaseDate: 1000,
          image: 'dustinisthebestpartnerever.com',
          openingCredits: 'still the best'
        }, {
          key: 44,
          title: 'A Tale of Trisha too',
          episode: 10,
          releaseDate: 2000,
          image: 'pants.com',
          openingCredits: 'not shorts'
        }]
      }
    />)
    expect(wrapper).toMatchSnapshot();
  })
})
