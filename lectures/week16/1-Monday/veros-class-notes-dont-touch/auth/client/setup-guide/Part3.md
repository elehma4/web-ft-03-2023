[Part 1](./Part1.md) | [Part 2](./Part2.md) | [Part 3](./Part3.md) | [Part 4](./Part4.md) | [Part 5](./Part5.md)

[JWT-Client Presentation](http://dc-houston.herokuapp.com/p2/Authentication/JWT-Client.html#1)

# Part3: SignUp (Registration)

Objective: Register a user 

- backend route has already been tested with ThunderClient and it works 
- Need a form on the React side 
- When form is submitted, an API call is made to backend sending form information to the server 
- Our backend is going to send back a JSON web token 
- We're going to store that token inside of redux so that if our user is trying to visit a protected page, we can see if the token is there, and if it is, then we let them through (The user is authenticated).

- To check if authenticated, we check if a token exists inside of redux


- Open `SignUp.js` component in the /components/auth folder 

- Collect information from form (the react way)
- Dispatch an action with form data 
- after the action dispatched, and user is authenticated, redirect our user to homepage, or protected

What hooks do we need to bring into this page?

- setup logic to collect information from form 
- setup dispatch logic
- setup navigation logic

