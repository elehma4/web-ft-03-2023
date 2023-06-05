import React, { Component } from 'react'

export class ClassNews extends Component {

    constructor(props) {
        
        super(props)

        this.state = {
            count: 0,
            articles: []
        }

        console.log(`inside of constructor`);
    }

    componentWillMount = () => {
        console.log('inside of component will mount');
    }

    componentDidMount = () => {
        console.log(`inside of component did mount`);
    }

    handleClick = () => {
        this.setState({count: this.state.count +  1})
    }

    render() {
        console.log(`inside of render`);
        return (
        <>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleClick}>Increment</button>
        </>
        )
    }
}

export default ClassNews