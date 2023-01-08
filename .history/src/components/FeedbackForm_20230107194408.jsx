import React, { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'
import FeedbackContext
 from '../context/FeedbackContext'
export default function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback, feedbackEdit} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text === "") {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== "" && text.trim().length <= 10) {
            setMessage("Text must be at least 10 characters long")
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            addFeedback(newFeedback);
            setText('')
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder="Write a review"
                        value={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}
