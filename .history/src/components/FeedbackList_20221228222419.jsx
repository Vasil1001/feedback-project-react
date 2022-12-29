import React from 'react'
import FeedbackItem from './FeedbackItem'

export default function FeedbackList({ feedback }) {
    return (
        <div>
            {feedback > 0 ?
                feedback.map((item) => (
                    <div>

                    </div>
                ))
                : <p>No feedback yet</p>}
                


        </div>
    )
}
