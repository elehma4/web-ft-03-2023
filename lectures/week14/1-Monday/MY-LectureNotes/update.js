
let state = {
    name: 'Tri',
    city: 'Houston'
}

console.log(state);

let newState = {
    ...state,
    name: 'Kipp'
}

console.log(newState);