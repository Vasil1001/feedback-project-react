import React from 'react'
import spinner from '../assets/spinner.gif'

function spinner() {
  return <img src={spinner} alt='Loading...'
  style={{ width: '100px', margin: 'auto', display: 'block' }} />
}

export default spinner