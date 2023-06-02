import React from 'react'
import Friend from './Friend'

function FriendList() {

    const friends = [
        'Bob',
        'Linda',
        'Tina',
        'Louise',
        'Gene',
    ]

    return (
        <div>
        {friends.map(friend => <Friend firstName={friend} />)}
        </div>
    )
}

export default FriendList