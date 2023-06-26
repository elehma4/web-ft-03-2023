[Part 1](./Part1.md) | [Part 2](./Part2.md) | [Part 3](./Part3.md) | [Part 4](./Part4.md) | [Part 5](./Part5.md)
# Part 4: Create Login Route

## Goals

Check user login credentials. If the credentials are correct, send a token back to user's local machine (client) so that it can be stored in their cookies. 

- Validate User 
- Send back JWT

## Steps

Open the `authentication.js` file in the routes folder
- create a `post` route handler for the `login` route. 
- For now, send text back to the user called "JWT"


This route handler will eventually have passport middleware between the route and the callback.
