

const productsReducer = (state, action) => {
    if (state === undefined){

        state = {
            products: []
        }
    }


    return state
}


export default productsReducer