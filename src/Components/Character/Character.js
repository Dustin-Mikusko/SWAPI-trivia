import React from 'react';
import './Character.css';
import characterImage from '../../images/character-picture.jpeg'

const Character = ({ name, world, population, species, relatedFilms }) => {
  return (
    <section className="character-cards">
      <article className="character-card">
        <img src={characterImage} alt="image of two star wars silhouettes battling" height="30" width="30">
        <h4 className="character-name">{name}</h1>
        <p><span className="bold">World:</span> {world}</p>
        <p><span className="bold">Population:</span> {population}</p>
        <p><span className="bold">Species:</span> {species}</p>
        <p><span className="bold">Related Films:</span> {relatedFilms}</p>
      </article>
    </section>
  )
}

export default Character;
