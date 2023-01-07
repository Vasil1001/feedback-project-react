import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
    const { } = Feed
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} 
            className="close">
                <FaTimes color='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem