import React from 'react';
import './Character.css';
import characterImage from '../../images/character-picture.jpeg'
import PropTypes from 'prop-types';


const Character = ({ name, world, population, species, relatedFilms }) => {
  return (
    <section className="character-cards">
      <article className="character-card">
        <img src={characterImage} alt="image of two star wars silhouettes battling" height="50" width="50" />
        <h4 className="character-name">{name}</h4>
        <p><span className="bold">World:</span> {world}</p>
        <p><span className="bold">Population:</span> {population}</p>
        <p><span className="bold">Species:</span> {species}</p>
        <p><span className="bold">Related Films:</span> {relatedFilms}</p>
      </article>
    </section>
  )
}

export default Character;

Character.propTypes = {
  name: PropTypes.string.isRequired,
  world: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  relatedFilms: PropTypes.string.isRequired,
}
