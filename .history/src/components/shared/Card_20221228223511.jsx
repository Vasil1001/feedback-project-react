import React from 'react'

function Card({ children, reverse }) {
    return (
        <div className="card" style={{backgroundColor: reverse ? 'rgba(0,0,0,0.4' : '#fff', color: reverse ? '#fff'}}>
            {children}
        </div>
    )
}

export default Card