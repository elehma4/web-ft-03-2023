import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import incrementCount from '../actions/incrementCount'

const CountHooks = () => {

  let count = useSelector(state => state.count ) //count is mapped from global state
  let dispatch = useDispatch()  //store.dispatch(action)

  return (
    <>
      Count with Hooks

      <h2>{count}</h2>

      <button onClick={()=>dispatch(incrementCount(3))}>Increment</button>
    </>
  )
}

export default CountHooks
