import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import { AnimatePresence, MotionConfig } from 'framer-motion'

export default function FeedbackList({ feedback, handleDelete }) {

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.length > 0 ? feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial
                        >
                        <FeedbackItem key={item.id} item={item}
                            handleDelete={handleDelete} />
                    </motion.div>
                ))
                    : <p>No feedback yet</p>}
            </AnimatePresence>
        </div>
    )
    // return (
    //     <div className="feedback-list">
    //         {feedback.length > 0 ? feedback.map((item) => (
    //             <FeedbackItem key={item.id} item={item}
    //             handleDelete={handleDelete} />
    //         ))
    //             : <p>No feedback yet</p>}
    //     </div>
    // )
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