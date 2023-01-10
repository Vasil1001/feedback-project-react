import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'
import { AnimatePresence, motion } from 'framer-motion'


export default function FeedbackList() {
    const { feedback, isLoading } = useContext(FeedbackContext)

    if (!isLoading && (!feedback || !feedback.length === 0)) {
        return <p>No feedback yet</p>
    }

    return isLoading ? <h3>Loading...</h3> : (<div className="feedback-list">
        <AnimatePresence>
        <Spinner
            {!isLoading && feedback.length > 0 ? feedback.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <FeedbackItem key={item.id} item={item} />

                </motion.div>
            ))
                : <p>No feedback yet</p>}
        </AnimatePresence>
    </div>)

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
