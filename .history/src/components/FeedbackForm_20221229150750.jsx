import React, { useState } from 'react'
import Card from './shared/Card'

export default function FeedbackForm() {
    const [text, setText] = useState('')
    const handleTextChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <Card>
            <form>
                <h2>How would you rate your service?</h2>
               

            </form>
        </Card>
    )
}
