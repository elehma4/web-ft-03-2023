[Part 1](./Part1.md) | [Part 2](./Part2.md) | [Part 3](./Part3.md) | [Part 4](./Part4.md) | [Part 5](./Part5.md)

[JWT-Client Presentation](http://dc-houston.herokuapp.com/p2/Authentication/JWT-Client.html#1)

# Part4: Making Actions  


[Async logic and Data Fetching](https://redux.js.org/tutorials/essentials/part-5-async-logic)



Redux store doesn't know anything about async logic. It only knows how to synchronously dispatch actions, update the state by calling the root reducer function, and notify the UI that something has changed. Any asynchronicity has to happen outside the store.


The most common reason to use middleware is to allow different kinds of async logic to interact with the store. This allows you to write code that can dispatch actions and check the store state, while keeping that logic separate from your UI.

## Install Redux Thunk

Redux-Thunk will allow us to make multiple dispatch calls from our actionCreator

- navigate to the root directory (stop server if it's running)
- npm install redux-thunk
- navigate to index.js 
- import redux-thunk 
    - not capitalized because it's not a component
```js 
import reduxThunk from 'redux-thunk'
```

- need applyMiddleware and compose
```js 
import {createStore, applyMiddleware, compose} from 'redux';
```

- refactor 
    - if redux devtools
    - compose allows us to have multiple pieces of middleware. 


without compose 
So when we chain our higher order functions (store enhancers) instead of having to write
```js 
func1(func2(func3(func4))))
```

with compose 
```js 
compose(func1, func2, func3, func4)
```
These two lines of code do the same thing. It is only the syntax which differs.


```js 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer, {},  
  composeEnhancers(applyMiddleware(reduxThunk) ));
```

## Make the SignUp Action 

- Make an API call to the server /register route 
- store the token in the global state 
- save the token in local store for statrup 


