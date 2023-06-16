
import {LOAD_CONTACTS, ERROR} from './types'

// https://jsonplaceholder.typicode.com/users

export const loadContactData = (cb) => async (dispatch, getState)=>{


    try{

        if( !getState().contacts.dataFetched){
            let results = await fetch('https://jsonplaceholder.typicode.com/users')
            let data = await results.json(); 

            dispatch({type: LOAD_CONTACTS, data: data})

            cb()  //navigates our use to the homepage
        }
        
    }
    catch(error){

        console.log(error.message);

        dispatch({type: ERROR, data: error.message})

    }
}
