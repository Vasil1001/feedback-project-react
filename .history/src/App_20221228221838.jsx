import { useState } from 'react'
import './App.css'
import FeedbackItem from './components/FeedbackItem'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'

function App() {
  const [feedback, setFeedback] = useState([FeedbackData])

  return (
    <div>
      <Header />
      <div className="container">
        <h1>My app</h1>
        <FeedbackItem/>
      </div>
    </div>
  )
}

export default App
