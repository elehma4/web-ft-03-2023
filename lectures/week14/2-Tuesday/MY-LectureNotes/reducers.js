
// let state = {
//     clicks: 99,
//     count: 23
// }

// let newState = {
//     ...state,
//     count: state.count + 2
// }

// console.log(newState);

// let state = {
//     house: {
//         name: "Ravenclaw",
//         points: 17
//     }
// }

// let newState = {
//     ...state,
//     house: {
//         ...state.house,
//         points: state.house.points + 4
//     }
// }

// let state = {
//     school: {
//         name: "Hogwarts",
//         house: {
//             name: "Ravenclaw",
//             points: 17
//         }
//     },
//     count: 3
// }

// let newState = {
//     ...state,
//     school : {
//         ...state.school,
//         house: {
//             ...state.school.house,
//             points: state.school.house.points + 2
//         }
//     }
// }

// let keyName = "ravenclaw"

// houses = {{}...{}...{}}

// let newState = {

//     ...state,
//     houses: {
//         ...state.houses,
//         [keyName] : {
//             ...state.houses[keyName],
//             points: state.houses[keyName]
//         }
//     }
// }


// let state = [1, 2, 3]

// let newItem = 0
// let lastItem = 4

// let newState = [newItem, ...state, lastItem]

// console.log(newState);


// let state = [1, 2, "x", 4]

// let newState = state.map(item => {
//     if(item == "x") return 3

//     return item
// })

// console.log(newState);


// let state = [
//     {
//         id: 1,
//         email: 'something@gmail.com'
//     },
//     {
//         id: 2,
//         email: 'silly@sam.com'
//     }
// ]

// let action = {
//     type: 'Change',
//     payload: {
//         id: 2,
//         email: 'me@me.com'
//     }
// }

// let newState = state.map(obj => {
//     if(obj.id === action.payload.id){
//         return {
//             ...obj,
//             email: action.payload.email
//         }
//     }

//     return obj
// })

// console.log(newState);



// let state = [1, 2, 3, 5, 6]

// let newItem = 4

// let newState = [...state.slice(0,3), newItem, ...state.clice(3)]

// console.log(newState);


let state = [1, 2, "X", 4]

let newState = state.filter(item => {
    if(item === "X"){
        return false
    }

    return true
})

// let newState = state.map((item, index) => {
//     if(index == 2){
//         return 3
//     }
//     return item
// })

console.log(newState);