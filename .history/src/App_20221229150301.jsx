import { useState } from 'react'
import './App.css'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id)) //return array without the item we deleted

    }
  }

  return (
    <div>
      <Header />
      <div className="container">
        <Feed
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback}
          handleDelete={deleteFeedback}
        />
      </div>
    </div>
  )
}

export default App
