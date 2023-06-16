
import {LOAD_PRODUCTS} from './types'

export const loadProducts = (data) => {
    
    return {
        type: LOAD_PRODUCTS, 
        product: data
    }
}