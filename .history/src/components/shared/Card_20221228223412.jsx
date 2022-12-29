import React from 'react'

function Card({ children, reverse }) {
    return (
        <div className="card" style={{backgroundColor: reverse ?}}>
            {children}
        </div>
    )
}

export default Card