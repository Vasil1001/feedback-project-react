import React from 'react'

function Header() {
    return (
        <header>
            <div className="container">
                <h2></h2>
            </div>
        </header>
    )
}
Header.defaultProps = {
    text: 'Feedback UI',
}
export default Header
