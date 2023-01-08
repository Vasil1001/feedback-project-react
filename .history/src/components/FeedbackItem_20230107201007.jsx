import React, { useState } from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            
            <button onClick={() => deleteFeedback(item.id)}
                className="close">
                <FaTimes color='#2c2e33' />
            </button>

            <button onClick={() => editFeedback(item)}
                className="edit" >
                <FaEdit color='#2c2e33' />
            </button>

            <div className="text-display">{item.text}</div>
        </Card>
    )
}

export default FeedbackItem