import React from 'react';
import './CharacterContainer.css';
import Character from '../Character/Character';
import Header from '../Header/Header'

const CharacterContainer = (props) => {
  console.log(props.movie);
  const characters = props.movie.characters.map(character => {
    let world = character.world[0];
    console.log(world.name);
    return <Character
      name={character.name}
      world= {world.name}
      population={world.population}
      species={character.species[0]}
      relatedFilms={character.relatedFilms.join(', ')}
    />
  })


  return (
    <main>
      <ScrollingText movieText={props.movie.openingCredits}/>
      <Header
      logOut={ props.logOut }
      user={ props.user }
      />
      <div>
        {characters}
      </div>
    </main>
  )
}

export default CharacterContainer;
