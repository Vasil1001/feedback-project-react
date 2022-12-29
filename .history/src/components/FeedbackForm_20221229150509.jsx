import React from 'react'
import Card from './shared/Card'

export default function FeedbackForm() {
    return (
        <Card>
            <form>
                <h2>How would you rate your service?</h2>
                <div className="input-group">
                    <input type="text" placeholder="Write a review">
                        <button></button>
                    </input>
                </div>

            </form>
        </Card>
    )
}
