import React from 'react';
import './ScrollingText.css';
import PropTypes from 'prop-types';


const ScrollingText = (props) => {
  return (
    <div>
      <div className="fade"></div>
        <section className="scrolling-text-container">

          <div className="crawl">
            <div className="title">

              <p className="scrolling-text-p-font">Episode {props.episodeNumber}</p>
              <br />
              <p className="movie-title">{props.movieTitle}</p>

            </div>
            <p className="scrolling-text">{props.movieText}</p>
            </div>
        </section>
    </div>
  )
}

export default ScrollingText;

ScrollingText.propTypes = {
  movieText: PropTypes.string,
  movieTitle: PropTypes.string,
  episdoeNumber: PropTypes.string
}
