import React from 'react'
import NavBar from './NavBar'

function BaseLayout(props) {
  return (
    <>
      <NavBar />
      {props.children}
      <br />
      <br />
      <br />
      <br />
      Footer goes here
    </>
  )
}

export default BaseLayout