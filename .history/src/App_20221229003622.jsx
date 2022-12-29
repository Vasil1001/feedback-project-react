import { useState } from 'react'
import './App.css'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if(window.confirm)
    setFeedback()
  }

  return (
    <div>
      <Header />
      <div className="container">
        <h1>My app</h1>
        <FeedbackList feedback={feedback}
          handleDelete={ deleteFeedback }
        />
      </div>
    </div>
  )
}

export default App
