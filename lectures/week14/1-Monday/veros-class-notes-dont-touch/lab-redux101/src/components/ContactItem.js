
import React from 'react'
import {removeContact} from '../actions/contacts'
import {useDispatch} from 'react-redux'

const ContactItem = ({contactObj}) => {

    let {firstName, city, id} = contactObj

    const dispatch = useDispatch()
  return (
    <li >
        {firstName} {city}

        &nbsp; &nbsp;
        <a href="#" onClick={()=>dispatch(removeContact(id))}>X</a>
    </li>
  )
}

export default ContactItem