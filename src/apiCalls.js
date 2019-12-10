export const getData = (url) => {
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw Error('Error fetching data');
      }
      return res.json();
  })
}


export const getFilm = (film) => {
  return fetch(film)
  .then(res => {
    if (!res.ok) {
      throw Error('Error fetching film data');
    }
    return res.json();
  })
};

export const getSpecies = (species) => {
  return fetch(species)
    .then(res => {
      if (!res.ok) {
        throw Error('Error fetching species data');
      }
      return res.json();
    })
}

export const getWorld = (world) => {
  return fetch(world)
  .then(res => {
    if (!res.ok) {
      throw Error('Error fetching world data');
    }
    return res.json();
  })
}

export const getCharacter = (character) => {
  return fetch(character)
  .then(res => {
    if (!res.ok) {
      throw Error('Error fetching character data');
    }
    return res.json();
  })
}
