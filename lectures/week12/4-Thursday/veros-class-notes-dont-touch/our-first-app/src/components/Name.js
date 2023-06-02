import React from 'react'

const Name = ({firstName, lastName, days}) => {  // {firstName,}
    
    return <h1>{days}. {firstName} {lastName} </h1>
}

export default Name


// let obj = {
//     firstName: "kelly", 
//      lastName: "", 
//     days:
// }


// let {firstName} = obj