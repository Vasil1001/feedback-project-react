import React, { useState } from 'react'
import Card from './shared/Card'

function FeedbackItem({item}) {
    return (
        <div className="card">
<Card/>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
        </div>
    )
}

export default FeedbackItem