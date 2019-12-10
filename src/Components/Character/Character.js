import React from 'react';
import './Character.css';
import characterImage from '../../images/character-picture.jpeg'
import PropTypes from 'prop-types';


const Character = ({ name, world, population, species, relatedFilms }) => {
  return (
    <section className="character-cards">
      <article className="character-card">
      <div className="image-name-container">
        <img className="character-image" src={characterImage} alt="two star wars silhouettes battling" height="100" width="100" />
        <p className="character-name">{name}</p>
      </div>    
        <p className="character-card-font"><span className="bold">World:</span> {world}</p>
        <p className="character-card-font"><span className="bold">Population:</span> {population}</p>
        <p className="character-card-font"><span className="bold">Species:</span> {species}</p>
        <p className="character-card-font"><span className="bold">Related Films:</span> {relatedFilms}</p>
      </article>
    </section>
  )
};

export default Character;

Character.propTypes = {
  name: PropTypes.string,
  world: PropTypes.string,
  population: PropTypes.string,
  species: PropTypes.string,
  relatedFilms: PropTypes.string,
};
