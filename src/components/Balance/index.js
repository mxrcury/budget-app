import React from 'react'
import { useContext } from 'react';
import AppContext from '../../providers/context';

const Balance = (props) => {
  const {state} =  useContext(AppContext)


  return (
    <div style={{alignItems:'center'}}>
      Баланс: {props.balance.toFixed(2)} {state.currency}
    </div>
  )
}

export default Balance
