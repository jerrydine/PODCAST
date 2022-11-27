import React from 'react';
import './Inner.css';
import Order from './Order';
import Button from './Button';
import Change from './Change';

const Inner = () => {
  return (
    <div className='inner'>
      <Order/>
      <Change/>
      <Button/>
      </div>
  )
}

export default Inner