

import React, {useState} from 'react'
import {addContacts} from '../actions/contacts'
import {v4 as uuidv4} from 'uuid'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const AddContact = () => {

    const [firstName, setFirstName] = useState("")
    const [city, setCity] = useState("")
    const dispatch = useDispatch() ///store.dispatch(ac)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        

        e.preventDefault()

        //update the global state 

        // {id, firstName, city}
        //create an action 
        //case in our reducer for the action type 
        //import in the useDispatch hook from react-redux 
        // call dispatch(action(data))

        dispatch(addContacts(uuidv4(), firstName, city))

        setFirstName("")
        setCity("")

        // navigate('/form')
    }

  return (
    <>
    
        <form onSubmit={handleSubmit} >

                <input type="text" placeholder="First Name" 
                value={firstName} onChange={e=>setFirstName(e.target.value)}/> 


                <input type="text" placeholder="city" value={city}
                onChange={e=>setCity(e.target.value)} />

                <input type="submit" />
                 
        </form>
    
    </>
  )
}

export default AddContact