import React, {useState} from 'react'

const FunCounter = () => {

    const [count, setCount ] = useState(0)


  return (
    <>
    
    <h1>{count}</h1>
    
    <button onClick={()=>setCount(count + 1)} >Increment</button>

    decrement 

    reset 

    
    </>
  )
}

export default FunCounter


//closure



// const name = () => setCount(count + 1)
