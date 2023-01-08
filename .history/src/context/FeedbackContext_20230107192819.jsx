import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1 ',
            rating: 5
        },
        {
            id: 2,
            text: 'This is feedback item 2 ',
            rating: 4
        },
        {
            id: 3,
            text: 'This is feedback item 3 ',
            rating: 4
        }
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })
    
    // Add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    // Set item to edit mode to update it
    const editFeedback = (item) => {
        setFeedback({
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
            deleteFeedback,
            addFeedback,
            editFeedback,
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext