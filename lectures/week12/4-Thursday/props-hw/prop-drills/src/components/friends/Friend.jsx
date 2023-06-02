import React from 'react'

function Friend({firstName, lastName, title}) {


  return (
    <>
        <h3>{firstName} {lastName}</h3>
        <h2>{title}</h2>
    </>
  )
}

export default Friend