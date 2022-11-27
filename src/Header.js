import React from 'react';
import './Header.css';
import Image from './image/illustration-hero.svg'

const Header = () => {
  return (
    <div>
      <img src={Image} alt=""  className='img'/>
      </div>
  )
}

export default Header