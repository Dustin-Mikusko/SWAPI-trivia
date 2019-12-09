import React from 'react';
import './Character.css';

const Character = ({ name, world, population, species, relatedFilms }) => {
  return (
    <section className="character-cards">
      <article className="character-card">
        <h1 className="character-name">{name}</h1>
        <p><span className="bold">World:</span> {world}</p>
        <p><span className="bold">Population:</span> {population}</p>
        <p><span className="bold">Species:</span> {species}</p>
        <p><span className="bold">Related Films:</span> {relatedFilms}</p>
      </article>
    </section>
  )
}

export default Character;
