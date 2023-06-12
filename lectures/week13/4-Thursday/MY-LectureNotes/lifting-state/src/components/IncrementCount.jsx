import React from 'react'

function IncrementCount({increment, reset}) {
  return (
    <>

        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
    </>
  )
}

export default IncrementCount