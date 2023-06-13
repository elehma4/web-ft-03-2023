import React, { Component } from 'react'
import incrementCount from '../actions/incrementCount'
import {connect} from 'react-redux'  //HOC

class CountClass extends Component {


    constructor() {
      super()
    }

  render() {
    return (
      <>
        Count with Class Based Components

        <h1>{this.props.counter}</h1>

        <button onClick={this.props.increment}>Increment</button>
      </>
    )
  }
}

let mapStateToProps =(state) =>{

  return {
    counter: state.count
  }
}

const mapDispatchToProps = (dispatch) => {  //state.dispatch()
  
  return {

    increment: ()=> dispatch(incrementCount(5))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountClass)
