

import {combineReducers} from 'redux'
import productsReducer from './productsReducer'
import contactsReducer from './contactsReducer'

const rootReducer = combineReducers({
    products: productsReducer, 
    contacts: contactsReducer
})

export default rootReducer
