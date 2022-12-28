import React, { useState } from 'react'

function FeedbackItem() {
    const [rating, setRating] = useState(7)
    const [rating, setRating] = useState(7)

    return (
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">Feedback item</div>
        </div>
    )
}

export default FeedbackItem