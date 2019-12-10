import React from 'react';
import './Header.css';
import babyYoda from '../../images/baby-yoda.jpeg';
import lightsaberLogout from '../../images/light-saber-x.jpeg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const Header = ({ user, logOut}) => {
  return (
    <header>
      <div className='header-container'>
        <div className='user-badge'>
          <h2>{user.name}</h2>
          <img className='baby-yoda' src={babyYoda} />
          <p>{user.rank}</p>
        </div>
        <h2 className='header-quote'>{user.quote}</h2>
        <Link to='/' replace onClick={logOut}>
        <img className='logout-button' src={lightsaberLogout}/>
        </Link>
      </div>
    </header>
  )
}
export default Header;

Header.propTypes = {
  logOut: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}
