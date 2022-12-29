import React from 'react'
import FeedbackItem from './FeedbackItem'

export default function FeedbackList({feedback}) {
    return (
        <div>
            {feedback > 0 ? <p>asdf</p> : <p>No feedback</p>}
            <FeedbackItem />
        </div>
    )
}
