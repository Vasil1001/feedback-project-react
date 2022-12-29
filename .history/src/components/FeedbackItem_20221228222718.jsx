import React, { useState } from 'react'

function FeedbackItem({item}) {
    return (
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
            <button onClick = {handleClick}>Click</button>
        </div>
    )
}

export default FeedbackItem