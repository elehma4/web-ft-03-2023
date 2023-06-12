
import React, { Component } from 'react'

class FormsClass extends Component {


  constructor() {
    
    super()


    this.state = {
      textValue : "hello", 
      isValid: true,
      selectValue : "Seattle"
    }
  }


  handleChange = (e) => {

    let targetType = e.target.type == 'checkbox' ? e.target.checked : e.target.value
    
    // this.setState({textValue:e.target.value })

    // console.log(targetType);

    // console.log(e.target.name);
    let name = e.target.name  //isValid, texgValue

    this.setState({
      [name] : targetType
    })
  }


  handleSubmit = (e) => {
    
    e.preventDefault()  //prevents form from navigating away 

    //send data to databasae 

    let dataObj = {
      textValue : this.state.textValue, 
      isValid: this.state.isValid, 
      selectValue : this.state.selectValue
    }

    console.log('form was submitted', dataObj);
  }

  render() {

    const {textValue, isValid} = this.state 

    return (
      <>
        
        <h1>React Forms using Classes</h1>


        <h2>{textValue}</h2>
        <h2>{isValid ? "true" : "false"}</h2>
        <h2>{this.state.selectValue}</h2>
        
        <form onSubmit={this.handleSubmit}>

            <input type="text" name="textValue" value={textValue} onChange={this.handleChange}  />

            <input type="checkbox" name="isValid" value={isValid} onChange={this.handleChange} />


            <br /> 


            <select name="selectValue" value={this.state.selectValue} onChange={this.handleChange} >

                <option value="NewYork">New York</option>
                <option value="Houston">Houston</option>
                <option value="Atlanta">Atlanta</option>
                <option value="Seattle">Seattle</option>
                <option value="Detroit">Detroit</option>
            </select>

            <br />
            <input type="submit" />

        </form>

        {/* <button onClick={()=>this.setState({textValue: 3})}>Click</button> */}
      </>
    )

  }
}

export default FormsClass
