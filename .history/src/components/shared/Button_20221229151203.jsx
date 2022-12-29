import React from 'react'

export default function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled}>
        {children}
    </button>
  )
}
