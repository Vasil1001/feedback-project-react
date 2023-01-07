import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback]
    return <FeedbackContext.Provider value = {{

    }}>
        {children}
    </FeedbackContext.Provider>
}