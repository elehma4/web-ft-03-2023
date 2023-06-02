import React from 'react'
import Profile from './Profile'

function ProfileCard() {

    const staffMembers = [
        {
          name: { first:'Jared', last:'Donald Dunn' },
          title: 'Head of Business Development',
        },
        {
          name: { first: 'Russ', last: 'Hanneman'},
          title: 'Founder',
        },
        {
          name: { first: 'Erlich', last: 'Bachman' },
          title: 'Chief PR Officer',
        },
        {
          name: { first: 'Richard', last: 'Hendricks' },
          title: 'President',
        },
        {
          name: { first: 'Dinesh', last: 'Chugtai' },
          title: 'Lead Engineer',
        },
        {
          name: { first: 'Bertram', last: 'Gilfoyle' },
          title: 'Systems Architect',
        }
    ] 

    let count = 0;


  return (
    <div>
        {/* {staffMembers.map(staff => <Profile firstName={staff.name.first} lastName={staff.name.last} title={staff.title} />)} */}
        {staffMembers.map(staff => { 
          if(staff.name.first[0] == 'R'){
            count += 1
            console.log(`found an R`);
          }
          return <Profile staff={staff} />})}
          People with R as first letter: {count}
    </div>
  )
}

export default ProfileCard