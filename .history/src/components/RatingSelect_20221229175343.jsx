import React, { useState } from 'react'

export default function RatingSelect() {
    const [selected, setSelected] = useState(1)

    const handleChange = (e) => {

    }
    return (
        <ul className="rating">
            <li>
                <input type="radio"
                    id="num1"
                    name="rating"
                    value="1"
                    onChange={handleChange}
                    checked={}
                />
            </li>
        </ul>
    )
}
