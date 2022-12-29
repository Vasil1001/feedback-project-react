import React, { useState } from 'react'

export default function RatingSelect() {
    const [selected, setSelected] = useState(10)

  return (
    <ul className="rating">
        <li><input/></input></li>
    </ul>
  )
}
