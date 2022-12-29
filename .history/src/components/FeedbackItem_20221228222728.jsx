import React, { useState } from 'react'

function FeedbackItem({item}) {
    return (
        <div className="card">
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{text}</div>
        </div>
    )
}

export default FeedbackItem