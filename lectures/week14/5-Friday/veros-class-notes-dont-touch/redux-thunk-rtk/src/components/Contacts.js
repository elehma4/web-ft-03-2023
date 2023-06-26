import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {contactDataThunk} from './ContactSlice'

const Contacts = () => {

  const dispatch = useDispatch()
  const contactList = useSelector(state => state.contacts.contacts)

  useEffect(() => {
    
  
    dispatch(contactDataThunk())

  }, [])
  
  return (
    <>
    
    <h1>Contacts</h1>


    <ul>
      {contactList.map(contact=>{
        return <li key={contact.id}>{contact.name}</li>
      })}
    </ul>

    </>
  )
}

export default Contacts