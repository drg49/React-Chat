import React from 'react'

export default function Message({ role, position, message }) {

  return (
    <div className={`bubble ${role} ${position}`}>
      {message}
    </div>
  )
}
