import React from 'react';
import { shallow } from 'enzyme';
import Movie from './Movie';

describe('Movie', () => {
  const mockMovie = {
    key: 1,
    title: "Revenge of the Sith",
    episode: "4",
    releaseDate: "2002",
    image: "url.to.movie",
    openingCredits: "WeeWooWeeWoo",
    characters: [{name: 'Tom Brady'}],
    showMovieCharacters: jest.fn()
  };

  let wrapper = shallow(<Movie 
    key={mockMovie.key}
    title={mockMovie.title}
    episode={mockMovie.episode}
    releaseDate={mockMovie.releaseDate}
    image={mockMovie.image}
    openingCredits={mockMovie.openingCredits}
    characters={mockMovie.characters}
  />)

  it('should render the component with the correct data to match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call checkMovies when the Link tag is clicked', () => {
    const mockShowMovieCharacters = jest.fn();
    wrapper = shallow(<Movie 
      key={mockMovie.key}
      title={mockMovie.title}
      episode={mockMovie.episode}
      releaseDate={mockMovie.releaseDate}
      image={mockMovie.image}
      openingCredits={mockMovie.openingCredits}
      characters={mockMovie.characters}
      showMovieCharacters={mockShowMovieCharacters}
    />)

    wrapper.find('Link').simulate('click');

    expect(mockShowMovieCharacters).toHaveBeenCalled();
  })
})
