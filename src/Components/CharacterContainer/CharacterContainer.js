import React from 'react';
import './CharacterContainer.css';
import Character from '../Character/Character';

const CharacterContainer = (props) => {
  console.log(props.movie);
  const characters = props.movie.characters.map(character => {
    return <Character
      name={character.name}
      world={character.world}
      population={character.world[0].population}
      species={character.species[0]}
      relatedFilms={character.relatedFilms.join(', ')}
    />
  })

  return (
    <div>
      {console.log(characters)}
      {characters}
    </div>
  )
}

export default CharacterContainer;
