import React from 'react'
import FeedbackItem from './FeedbackItem'

export default function FeedbackList({feedback}) {
    return (
        <div>
            {feedback > 0 ? <p>asdf</p> : <o></o>}
            <FeedbackItem />
        </div>
    )
}
