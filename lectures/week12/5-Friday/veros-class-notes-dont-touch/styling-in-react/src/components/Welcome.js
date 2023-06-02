import React from 'react'
import './welcome.css'

const Welcome = () => {
  return (
    <>
    
        {/* <div style={ {color:'purple', backgroundColor:'tomato', padding: '40px'}  }>Welcome to our space</div> */}
        <div style={myStyles.h1Style } >Welcome to our space</div>

        <div style={myStyles.coreContent}>More styling</div>

        <p className="paragraph">I'm a paragraph tag</p>
    </>
  )
}



const myStyles = {

    h1Style : {
        color: 'purple', 
        fontSize: '50px'
    }, 

    coreContent : {

        backgroundColor: 'teal', 
        fontSize: '30px'
    }

}

// const myStyles = {

//     color: 'purple', 
//     fontSize: '50px'
// }

export default Welcome