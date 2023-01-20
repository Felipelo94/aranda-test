import React from 'react';
import './header.styles.scss';
import ic_home from '../../assets/icons/ic_home.svg'

const Header = () => {
  return (
    <nav className='header'>
        <div className='header__title'>
            <h1>Recipe<span className='header__title-secondary'>APP</span></h1>
        </div>
        <div className='header__icon'>
            <img src={ic_home} alt="home-icon" />
        </div>
    </nav>
  )
}

export default Header