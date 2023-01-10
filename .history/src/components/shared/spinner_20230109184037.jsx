import React from 'react'
import Spinner from '../assets/Spinner.gif'

export default function Spinner() {
    return <img src={Spinner} alt='Loading...'
        style={{ width: '100px', margin: 'auto', display: 'block' }} />
}
