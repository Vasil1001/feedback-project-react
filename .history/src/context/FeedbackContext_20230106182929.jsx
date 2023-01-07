import { createContext, useState } from 'react'

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
      
    return <FeedbackContext.Provider
        value={{
            feedback,
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext