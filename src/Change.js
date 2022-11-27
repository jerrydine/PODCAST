import React from 'react';
import './Change.css';
import Music from './image/icon-music.svg';
import { useState } from 'react';

const Change = () => {

  const [Plan, setplan] = useState({
    period: 'Annual Plan',
    amount: '$59.99/yearly'
  })

const clickHandle = (()=>{
  if(Plan.period === 'Annual Plan'){
    setplan({
      period: 'Monthly Plan',
      amount: '$29.99/yearly'
    })
  }else{
    setplan({
      period: 'Annual Plan',
      amount: '$59.99/yearly'
    })
  }

})
console.log(()=>clickHandle);

  

return (
    <div className='change'>
      <img src={Music} alt="" className='muz'/>
      <div className='payment'>
        <h5>{Plan.period}</h5>
        <p>{Plan.amount}</p>
      </div>
      
      <a href="#" onClick={clickHandle}>change</a>

    </div>
  )
}

export default Change