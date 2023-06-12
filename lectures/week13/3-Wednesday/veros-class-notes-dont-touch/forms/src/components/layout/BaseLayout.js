import React from 'react'
import Navigation from './Navigation'

const BaseLayout = (props) => {
  return (
    <>
    
    <Navigation />

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