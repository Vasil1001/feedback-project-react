import React from 'react'
import {useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'

export default function FeedbackList({ feedback, handleDelete }) {
    const {} = useContext(FeedbackContext)
    
    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.length > 0 ? feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
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