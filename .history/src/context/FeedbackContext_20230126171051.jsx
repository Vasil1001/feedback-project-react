import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch Feedback
    const fetchFeedback = async () => {
        const response = await fetch(`https://tropical-brash-sink.glitch.me/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedback(data);
        setIsLoading(false)
    }

    // Add Feedback
    const addFeedback = async (newFeedback) => { 
        const response = await fetch('https://tropical-brash-sink.glitch.me/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })
        
        const data = await response.json()

        setFeedback([data, ...feedback])
    }
    // Set item to edit mode to update it
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    // Delete Feedback
    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete')) {
            await fetch(`https://tropical-brash-sink.glitch.me/feedback/${id}`, {method: 'DELETE' })


            setFeedback(feedback.filter((item) => item.id !== id)) //return array without the item we deleted
        }
    }

    // Update feedback
    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`https://tropical-brash-sink.glitch.me/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        })
        
        const data = await response.json()

        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
        )
    }

    return <FeedbackContext.Provider
        value={{
            feedback,
            isLoading,
            feedbackEdit,
            addFeedback,
            editFeedback,
            updateFeedback,
            deleteFeedback,
            //piece of state that holds the item
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext