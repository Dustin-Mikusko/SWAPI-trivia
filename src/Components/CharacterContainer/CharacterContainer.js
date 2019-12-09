import React from 'react';
import './CharacterContainer.css';
import Character from '../Character/Character';
import Header from '../Header/Header'

const CharacterContainer = (props) => {
  console.log(props.movie);
  const characters = props.movie.characters.map(character => {
    let world = character.world[0];
    return <Character
      name={character.name}
      world= {world.name}
      population={world.population}
      species={character.species[0]}
      relatedFilms={character.relatedFilms.join(', ')}
    />
  })
  

  return (
    <section>
      <Header 
      logOut={ props.logOut }
      user={ props.user }
      />
      <div>
        {characters}
      </div>
    </section>
  )
}

export default CharacterContainer;
