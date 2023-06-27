
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios' //this is like fetch

const initialState = {

    token: "", 
    error: "", 
    isLoading: false

}

const SIGN_UP = "SIGN_UP" //action types

// pending, fullfilled, rejected

// {formData: }

export const signUp = createAsyncThunk(SIGN_UP, async (params, thunkAPI)=>{

    console.log(params.formData);

    let response = await axios.post('/registration', params.formData)

    console.log(response);
    let jwt = response.data.token

    console.log(jwt);

    return jwt

})


let authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {

        signOut: (state, action)=>{

            state.token = ""

            localStorage.removeItem('token')
        }
    },
    extraReducers: {

        [signUp.pending] : (state, action)=>{

            state.isLoading = true;

        },
        [signUp.fulfilled] : (state, {payload})=>{  //action.payload

            state.isLoading = false

            state.token = payload

            localStorage.setItem('token', payload)
        },
        [signUp.rejected] : (state, action)=>{

            state.isLoading = false; 
            state.error = "Couldn't fetch data"
        },
    }
})


export const {signOut} = authSlice.actions

export default authSlice.reducer
