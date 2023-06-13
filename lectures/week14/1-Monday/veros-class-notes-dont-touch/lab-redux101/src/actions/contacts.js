
// import {contacts}from 'path'

export const addContacts = (id, firstName, city) => {
    
    return {
        type: "ADD_CONTACT", 
        data: {
            id, 
            firstName, 
            city
        }
    }
}


export const removeContact = (id) => {
    
    return {
        type: "REMOVE_CONTACT", 
        id
    }
}

