import React, { useState } from 'react'
import Card from './shared/Card'

export default function FeedbackForm() {
    const [text, setText] = useState('')
    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <Card>
            <form>
                <h2>How would you rate your service?</h2>
                <div className="input-group">
                    <input 
                    onChange={handleTextChange} 
                    type="text" 
                    placeholder="Write a review"/>
                    <button type="submit">Send</button>
                </div>

            </form>
        </Card>
    )
}
