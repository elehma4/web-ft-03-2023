

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    contacts: [],
    count: 0,
    isLoading: false, 
    error: ""
}

const FETCH_CONTACTS = "FETCH_CONTACTS" //action types

export const contactDataThunk = createAsyncThunk(FETCH_CONTACTS, async (params, thunkAPI)=>{

    const results = await fetch('https://jsonplaceholder.typicode.com/users')
    return results.json()
})



// FETCH_CONTACTS/pending 
/// FETCH_CONTACTS/fullfilled 
// FETCH_CONTACTS/rejected

let contactSlice = createSlice({
    name: 'contacts', 
    initialState, 
    reducers: {

        //our reducers 
        increment(state){
            state++
        }
    },
    extraReducers: {
        [contactDataThunk.pending] : (state, action)=>{

            state.isLoading= true;
        },
        [contactDataThunk.fulfilled] : (state, {payload})=>{

            state.isLoading = false; 
            state.contacts = payload;

        }, 
        [contactDataThunk.rejected] : (state, {payload})=>{

            state.isLoading = false; 

            state.error = "coudn't fetch data"
            
        }
    }
})

export const {increment} = contactSlice.actions

export default contactSlice.reducer