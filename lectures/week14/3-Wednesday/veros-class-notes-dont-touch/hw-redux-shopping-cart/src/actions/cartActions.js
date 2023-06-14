
import {ADD_TO_CART} from './types'

export const addToCart = (item) => {  //and object representing an object
    
    return {
        type: ADD_TO_CART, 
        product: item
    }

}