import React from 'react'


// function Profile({firstName, lastName, title}) {

//   return (
//     <div>
//         <h3>{firstName} {lastName} - {title}</h3>
//     </div>
//   )
// }

function Profile({staff}) {
    let {first, last} = staff.name
  return (
    <div>
        <h3>{first} {last} - {staff.title}</h3>
    </div>
  )
}

export default Profile