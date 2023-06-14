
let state = {
    clicks: 99, 
    count : 23
}


let newState = {
    ...state,
    count : state.count + 4
}

let state = {
    house: {
        name: "Ravenclaw",
        points: 17
    }, 
    city: "Houston"

}

let newState ={
    ...state, 
    house: {
        ...state.house, 
        points: state.house.points + 4
    }
}


let state = {
    school: {
        name: "Hogwarts", 
        house: {
            name: "Ravenclaw",
            points: 17
        }
    }, 
    count: 3
}


let newState = {

    ...state, 
    school: {
        ...state.school, 
        house: {
            ...state.school.house, 
            points: state.school.house.points + 2
        }

    }
}

const keyName = "ravenclaw"

const state = {
    houses: {
      gryffindor: {
        points: 15
      },
      ravenclaw: {
        points: 18
      },
      hufflepuff: {
        points: 7
      },
      slytherin: {
        points: 5
      }
    }
}

let newState = {

    ...state, 
    houses: {
        ...state.houses, 
        [keyName] : {
            ...state.houses[keyName], 
            points: state.houses[keyName].points + 3
        }
    }
}



let state = [2, 3, 4]

let newItem = 1 
let lastItem = 5

let newState = [newItem, ...state, lastItem]

let state = [1, 2, "X", 4] 

let newState = state.map(item =>{

    if(item == "X") return 3

    return item
})


let state = [
    {
      id: 1,
      email: 'jen@reynholmindustries.com'
    },
    {
      id: 2,
      email: 'peter@initech.com'
    }
]


let action = {
    type: 'Change', 
    payload: {
        id: 2, 
        email: "me@me.com"
    }
}


let newState = state.map(obj =>{

    if(obj.id === action.payload.id){

        return {
            ...obj, 
            email: action.payload.email
        }
    }

    return obj;
})

console.log(state);

let state = [1, 2, 3, 5, 6]

let newItem = 4

let newState = [...state.slice(0,3), newItem, ...state.slice(3)]

let state = [1, 2, "X", 4];
//           |


let newState = state.filter(item =>{

    if(item === "X"){
        return false
    }

    return true

    // return item != "X" //  X != X
})


let newState = state.map((item, index) =>{

    if(index == 2){
        return 3;
    }

    return item;
})

console.log(newState);