
const reducer = (state, action) => {

    if(state === undefined){

        state = {
            count: 0, 
            contacts: []
        }
    }


    switch(action.type){

        case "INCREMENT": 
           return {
               ...state, 
               count: state.count + action.data
           } 

        case "ADD_CONTACT": 
           return {
               ...state, 
               contacts: state.contacts.concat(action.data)
           }

        case "REMOVE_CONTACT":
           return {
            ...state, 
            contacts: state.contacts.filter(contact =>{
                return contact.id !== action.id // 3  != 3
            })
        }

        default:
            return state
    }


    return state;
    
}

export default reducer