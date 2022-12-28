import React, { useState } from 'react'

function FeedbackItem() {
    const [] = useState(7)
    return (
        <div className="card">
            <div className="num-display">10</div>
            <div className="text-display">Feedback item</div>
        </div>
    )
}

export default FeedbackItem