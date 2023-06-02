import React from 'react'

function Days({days, language}) {
  return (
    <div>
        <h1>{language}</h1>
        <ul>
            {days.map(day => <li>{day}</li>)}
        </ul>
    </div>
  )
}

export default Days