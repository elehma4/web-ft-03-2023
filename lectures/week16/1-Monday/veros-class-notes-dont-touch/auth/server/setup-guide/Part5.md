[Part 1](./Part1.md) | [Part 2](./Part2.md) | [Part 3](./Part3.md) | [Part 4](./Part4.md) | [Part 5](./Part5.md)
# Part 5: Passport Setup

## Goal
Validating a user's credentials either with email & password (local strategy) or JWT (JWT strategy)

Need 2 Passport strategies 
## Install
- `passport` 
- `passport-local`
- `passport-jwt`


- Create a `secret.js` file at your root 
    - add a JWT secret into to this file
- Create a file in a new folder  `auth` called `passAuth.js`.  This is where all of our logic for passport will reside.
    - /auth/passAuth.js

- Open the `passAuth.js` file
- Require `passport`, `passport-local` and `passport-jwt`
    - use the [passport](http://www.passportjs.org/) documentation as a reference
- Setup the `local strategy` (see [passport](http://www.passportjs.org/) documentation)

## Local Strategy
Local strategy is used to validate email and password
- Create options to override `username` field with `email` (see docs)
- Check to see if email is in your database
- If email was found, then check password 
- Return an error if there is a  mismatch in passwords
- If no email is found return a `false` state to the route
- If you can't access the database, return error
- Add your local strategy to the passport.use() middleware (see documentation)

## JWT Strategy (will do together in lecture)
JWT strategy used to validate JWT token

## Add middleware to Registration route
- Add the `passport.authenticate()` middleware function for the local strategy to the `authentication.js` file in the routes folder (see documentation)
- Set the session to false (try to find in the documentation)
- Set the passport.authenticate() method to a variable called `requireLogin`
- Use this middleware function variable `requireLogin` to intercept incoming requests for the `/login` route.


