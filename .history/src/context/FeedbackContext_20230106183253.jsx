import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is coming from context',
            rating: 10
        }
    ])

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete')) {
            setFeedback(feedback.filter((item) => item.id !== id)) //return array without the item we deleted
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    return <FeedbackContext.Provider
        value={{
            feedback,
            deleteFeedback,
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext