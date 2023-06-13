import React from 'react'
import {useSelector} from 'react-redux'
import ContactItem from './ContactItem'
import AddContact from './AddContact'

const Contacts = () => {

  const contactList = useSelector(state => state.contacts)

  console.log(contactList);


  return (

    <>
      <h1>Contacts and Redux</h1>

      <AddContact />
      
      <ul>
        {contactList.map(contactObj =>{
          return <ContactItem key={contactObj.id} contactObj={contactObj} />
        })}
      </ul>

    </>
  )
}

export default Contacts
