
import {LOAD_CONTACTS, ERROR, CLEAR_MESSAGE} from '../actions/types'

const contactsReducer = (state, {type, data}) => {
    
    if (state === undefined){

        state = {
            contacts: [], 
            errorMessage: "",
            count: 0, 
            contactSize: 0,
            dataFetched: false
        }
    }

    
    switch(type){

        case LOAD_CONTACTS: 
        return {
            ...state, 
            contacts: state.contacts.concat(data), 
            contactSize: state.contacts.length + data.length, 
            count: state.count + 1, 
            dataFetched: true
        }

        case ERROR: 
            return {
                ...state, 
                errorMessage: data
            }

        case CLEAR_MESSAGE: 
            return {
                ...state, 
                errorMessage: ""
            }

        default: 
            return state;
    }

    return state;
}

export default contactsReducer