import React from 'react';
import './CharacterContainer.css';
import Character from '../Character/Character';

const CharacterContainer = ({ movie }) => {
  console.log(movie);
  const characters = movie.characters.map(character => {
    console.log(character.species);
    console.log(character.world)
    return <Character
      name={character.name}
      // world={character.world.name}
      // population={character.world.population}
      // species={character.species[0]}
      // relatedFilms={character.relatedFilms.join(', ')}
    />
  })

  return (
    <>
     {characters}
    </>
  )
}

export default CharacterContainer;
