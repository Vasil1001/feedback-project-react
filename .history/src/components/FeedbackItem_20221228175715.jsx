import React, { useState } from 'react'

function FeedbackItem() {
    const [rating, setRating] = useState(7)
    const [feedback, setf] = useState('This is an example of a Feedback item')

    return (
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display"></div>
        </div>
    )
}

export default FeedbackItem