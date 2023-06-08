import React from 'react'

const IncrementCount = ({increment, reset}) => {
  return (
    <>
    
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
    </>
    
  )
}

export default IncrementCount