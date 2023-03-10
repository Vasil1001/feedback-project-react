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
        
    })
    const editFeedback = (id) => {

    }
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
            addFeedback,
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext