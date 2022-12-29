import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

export default function FeedbackList({ feedback }) {
    return (
        <div className="feedback-list">
            {feedback.length > 0 ? feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} />
            ))
                : <p>No feedback yet</p>}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    ),
}