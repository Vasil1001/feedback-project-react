import React from 'react'

function Header({ text }) {
    return (
        <header style={{backgroundColor: 'rgba(0,0,0,0.4'}}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}
Header.defaultProps = {
    text: 'Feedback UI',
}
export default Header
