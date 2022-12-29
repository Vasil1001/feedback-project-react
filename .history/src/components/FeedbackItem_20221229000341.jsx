import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'
function FeedbackItem({ item }) {
    return (

        <Card>
            <div className="num-display">{item.rating}</div>
            <button className=""></button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem