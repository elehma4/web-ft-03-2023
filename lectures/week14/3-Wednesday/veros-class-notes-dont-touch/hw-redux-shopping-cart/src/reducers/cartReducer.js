
import {ADD_TO_CART} from '../actions/types'

const cartReducer = (state, action) => {
    
    if (state === undefined){
        state = {

            cartItems: [], 
            numberOfItems: 0, 
            totalCost: parseFloat(0.00)
        }
    }


    switch(action.type){

        case ADD_TO_CART: 

            return {
                ...state, 
                cartItems: state.cartItems.concat(action.product),
                numberOfItems : state.numberOfItems + 1, 
                totalCost: state.totalCost + parseFloat(action.product.price)
            }

        default: 
            return state;
    }


    return state
}


export default cartReducer 