import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import AboutPage from './pages/AboutPage'

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
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/">
            <FeedbackForm
              handleAdd={addFeedback} />
            <FeedbackStats
              feedback={feedback} />
            <FeedbackList
              feedback={feedback}
              handleDelete={deleteFeedback} />
          </Route>

          <Route path='/about' element={<AboutPage} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
