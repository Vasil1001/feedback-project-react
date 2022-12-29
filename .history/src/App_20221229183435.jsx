import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { motion, AnimatePresence}
import './App.css'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id)) //return array without the item we deleted
    }
  }

  return (
    <div>
      <Header />
      <div className="container">
        <FeedbackForm
          handleAdd={addFeedback} />

        <FeedbackStats
          feedback={feedback} />

        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}
        />
      </div>
    </div>
  )
}

export default App
