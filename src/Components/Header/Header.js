import React from 'react';
import './Header.css';
import babyYoda from '../../images/baby-yoda.jpeg';



const Header = ({ user }) => {
  return (
    <header>
      <div className='user-badge'>
        <h2>{user.name}</h2>
        <img className='baby-yoda' src={babyYoda} />
        <p>{user.rank}</p>
      </div>
      <h2 className='header-quote'>{user.quote}</h2>
      <button className='logout-button' type= "button">Log Out</button>
    </header>
  )
}
export default Header;
