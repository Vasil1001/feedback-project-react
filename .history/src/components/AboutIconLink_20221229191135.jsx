import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function AboutIconLink() {
    return (
        <div className='about-link'>
            <a href="/about"></a>
            <FaQuestion size={30} />
        </div>
    )
}
