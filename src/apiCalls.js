export const fetchFilm = (film) => {
  return fetch(film)
  .then(res => {
    if (!res.ok) {
      throw Error('Error fetching film data');
    }
    return res.json();
  })
};
