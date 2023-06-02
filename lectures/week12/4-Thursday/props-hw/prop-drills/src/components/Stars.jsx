import React from 'react'

function Stars({id, title, releaseDate, rating}) {
  return (
    <div>
        <h3>{id}: {title} {releaseDate} {rating}</h3>
    </div>
  )
}

export default Stars