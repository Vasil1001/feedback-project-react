import React from 'react'
import FeedbackItem from './FeedbackItem'

export default function FeedbackList({feedback}) {
    return (
        <div>
            {feedback > 0 ? <FeedbackItem}
            <FeedbackItem />
        </div>
    )
}
