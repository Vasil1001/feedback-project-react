import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })
    
    useEffect(() => {
        
    }, [])

    const fetchFeedback = async () => {
        const response = await fetch(`http://localhost:5002/feedback?`)
    }
    // Add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // Set item to edit mode to update it
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // Delete Feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete')) {
            setFeedback(feedback.filter((item) => item.id !== id)) //return array without the item we deleted
        }
    }

    return <FeedbackContext.Provider
        value={{
            feedback,
            addFeedback,
            editFeedback,
            deleteFeedback,
            feedbackEdit, //piece of state that holds the item
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext