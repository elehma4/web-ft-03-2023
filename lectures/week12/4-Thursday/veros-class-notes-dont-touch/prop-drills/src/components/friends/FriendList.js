import React from 'react'
import Friend from './Friend'

const FriendList = () => {

    const friends = [
        'Bob',
        'Linda',
        'Tina',
        'Louise',
        'Gene',
      ]

  return (
    <>
    
    {friends.map(friend => <Friend firstName={friend}/>)}
    
    </>
  )
}


export default FriendList
