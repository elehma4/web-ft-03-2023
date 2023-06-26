[Part 1](./Part1.md) | [Part 2](./Part2.md) | [Part 3](./Part3.md) | [Part 4](./Part4.md) | [Part 5](./Part5.md)
# Part1: Create an Express Server

[Express Lecture Presentation](https://dc-houston.herokuapp.com/p2/Node/NodeExpress.html#1)

- Navigate to the `auth` folder
- Clone the repository : `git clone https://github.com/veros-labs/jwt-server-starter server`
- Navigate into the server folder 
- Initialize your node application by running `npm init`
- Install `express`
- Create a .gitignore file 
- Add node_modules to the .gitignore file
- Initialize an express server that runs on **port 3001**
    - **THIS IS IMPORTANT SO PAY ATTENTION!** The client (React) server will be running on port 3000, so your node server must run on something other than 3000, or you're going to have problems.
- create a new folder called routes
- Navigate to the routes folder 
- Move the `authentication.js` file into the routes folder
- Create a new sub route for the home page in the `authentication.js` file. 
    - the handler should be able to handle a get request on the `/` route
    - be sure to export this sub route
    - for now, send back `Hello World` back to the user
- Navigate back to the app.js page and wire up the sub route 
- Start your node server and go to **localhost:3001** in your browser.
- You should see `Hello World` in your browser window