import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        
        super(props)  //initializes base class (parent class)

        this.state = {
            count: 0
        }


    }

    handleAddClick = () => {
        
        // this.state.count++

        // console.log(this.count);

        this.setState( state =>{  // allows us to update the DOM

           return {
               count: state.count + 1
           }
        } )
    }

    // this is what gets called by the react library
    render() {


        let {count} = this.state //destructuring count from state

        return (
        <>
            <h1>{count}</h1>


            <button onClick={this.handleAddClick} >Increment Count</button>
        </>
        )
    }
}

export default Counter

