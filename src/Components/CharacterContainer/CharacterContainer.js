import React from 'react';
import './CharacterContainer.css';
import Character from '../Character/Character';

const CharacterContainer = (props) => {
  console.log(props.movie);
  const characters = props.movie.characters.map(character => {
    console.log(character.species);
    console.log(character.world)
    return <Character
      name={character.name}
      world={character.world.name}
      population={character.world.population}
      species={character.species[0]}
      relatedFilms={character.relatedFilms.join(', ')}
    />
  })

  return (
    console.log(characters)
    <div>
      {characters}
    </div>
  )
}

export default CharacterContainer;
