import React from 'react'

function FeedbackStats({ feedback }) {
    //calculate ratings average
    let average = feedback.reduce((acc, cur) => { 

    }, 0)
    
  return (
    <div className="feedback-stats">
    <h4>{feedback.length} Reviews</h4>
    <h4>Average Rating: 10</h4>
    </div>
  )
}

export default FeedbackStats