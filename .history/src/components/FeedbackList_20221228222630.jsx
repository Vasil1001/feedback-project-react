import React from 'react'
import FeedbackItem from './FeedbackItem'

export default function FeedbackList({ feedback }) {
    return (
        <div className="feedback-list">
            {feedback.length > 0 ? feedback.map((item) => (
                <FeedbackItem key/>
            ))
                : <p>No feedback yet</p>}
        </div>
    )
}
