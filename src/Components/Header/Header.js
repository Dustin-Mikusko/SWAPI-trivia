import React from 'react';
import './Header.css';
import babyYoda from '../../images/baby-yoda.jpeg';
import lightsaberLogout from '../../images/light-saber-x.jpeg';


const Header = ({ user }) => {
  return (
    <header>
      <div className='header-container'>
        <div className='user-badge'>
          <h2>{user.name}</h2>
          <img className='baby-yoda' src={babyYoda} />
          <p>{user.rank}</p>
        </div>
        <h2 className='header-quote'>{user.quote}</h2>
        <img className='logout-button' src={lightsaberLogout} />
      </div>
    </header>
  )
}
export default Header;
