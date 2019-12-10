import React from 'react';
import { shallow } from 'enzyme';
import ScrollingText from './ScrollingText';


describe('ScrollingText', () => {
  const mockMovieText = "Hello";
  const mockMovieTitle = "Revenge of the Sith";
  const mockEpisodeNumber = "4";

  const wrapper = shallow(<ScrollingText 
    movieText={mockMovieText}
    movieTitle={mockMovieTitle}
    episodeNumber={mockEpisodeNumber}
  />);

  it('should render component to match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
