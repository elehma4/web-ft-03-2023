import React, {useState} from 'react'
import DisplayCount from './DisplayCount'
import IncrementCount from './IncrementCount'

function Counter() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)


    }

  return (
    <>
        <h1>Counter</h1>

        <DisplayCount countProp={count} />

        <IncrementCount increment={handleIncrement} reset={()=>setCount(0)} />
    </>
    
  )
}

export default Counter