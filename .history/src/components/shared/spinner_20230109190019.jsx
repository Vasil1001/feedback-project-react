import React from 'react'
import spinner from '../assets/spinner.gif'

export default function Spinner() {
    return <img src={spinner} alt='Loading...'
        style={{ width: '100px', margin: 'auto', display: 'block' }} />
}

import React from 'react'

function spinner() {
  return (
    <div>spinner</div>
  )
}

export default spinner