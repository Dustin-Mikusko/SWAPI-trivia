import React from 'react';
import { shallow } from 'enzyme';
import CharacterContainer from './CharacterContainer';

describe('CharacterContainer', () => {
 const movie = {
   characters: [
     {
      name: "Tom Brady",
      world: "CaliSaturn",
      population: "1",
      species: "GOAT",
      relatedFilms: ["Reeses", "Pieces", "Species"]
     }
   ]
 };
 const user = {
  name: "Tom Brady",
  quote: "My favorite ring is the next one.",
  rank: "beginner" 
}
const mockLogOut = jest.fn();

const wrapper = shallow(<CharacterContainer
    movie={movie}
    user={user}
    logOut={mockLogOut}
  />);

  it('should render CharacterContainer component with props to match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })


})
