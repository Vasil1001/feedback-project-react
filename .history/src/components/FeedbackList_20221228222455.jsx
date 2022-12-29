import React from 'react'
import FeedbackItem from './FeedbackItem'

export default function FeedbackList({ feedback }) {
    return (
        <div className="feedback-list">
            {feedback > 0 ?
                feedback.map((item) => (
                    <div>
                        {item.rating}
                    </div>
                ))
                : <p>No feedback yet</p>}
                


        </div>
    )
}
