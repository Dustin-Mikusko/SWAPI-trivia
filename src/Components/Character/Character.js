import React from 'react';
import './Character.css';

const Character = ({ name, world, population, species, relatedFilms }) => {
  return (
    <section className="character-cards">
      <article>
        <h1>{name}</h1>
        <h3>World: {world}</h3>
        <h3>Population: {population}</h3>
        <h3>Species: {species}</h3>
        {/* <h3>Related: {world}</h3> */}
      </article>
    </section>
  )
}

export default Character;
