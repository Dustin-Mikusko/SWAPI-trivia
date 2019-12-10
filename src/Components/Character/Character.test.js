import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';


describe('Character', () => {
  const mockCharacter = {
    name: 'Tom Brady',
    world: 'CaliSaturn',
    population: '1',
    species: "Reeses Pieces Species",
    relatedFilms: ["One", "Two", "Three"]
  }

  const wrapper = shallow(<Character 
    name={mockCharacter.name}
    world={mockCharacter.world}
    population={mockCharacter.population}
    species={mockCharacter.species}
    relatedFilms={mockCharacter.relatedFilms}
  />);
  
  it('should render component to match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})
