
const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;

const ExtractJwt = require('passport-jwt').ExtractJwt;

// db 
const db = require('../models');

// bcrypt

const bcrypt = require('bcryptjs');

// secret key

const secrets = require('../secrets');



/**
 * Local Strategy
 * * Deterimine if user email and password are correct by checking what's inside of our db
 */

// username, password


// request => login => passport => cb

let options = {
    usernameField:  'email'
}

let localStrategy = new LocalStrategy(options, async (email, password, done)=>{

    try{

         // check if email in in our db
        let records = await db.users.findAll({where: {email}})  //[{},{},{}]

        if(records !== null){
            // if the email is found,
            
            // if the email foound, compare new password with encrypted password in db 

            bcrypt.compare(password, records[0].password, (err, isMatch)=>{

                if(err){
                    // there is an error
                    return done(err) // error found by bcrypt
                }

                if(!isMatch){
                    return done(null, false) // no auth because passwords didn't match
                }

                return done(null, records[0]) //match was found, send record

                //req.user

            })
        }
        else{
            // no email was found 

            return done(null, false)
        }
    }
    catch(error){

        // can't access database 

        return done(error)
    }

    

    

    // if there is a match, passback the record found when looking for password

   
    //if no email was found, then passback done(null, false)

    // catch done(error)
})

/**
 * JwtStrategy
 * 
 * * check to if our token is valid
 */


let jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'), //
    secretOrKey: secrets.secrets

}

let jwtLogin = new JwtStrategy(jwtOptions, async (payload, done)=>{

    try{

        let userID = payload.sub; 

        let user = await db.users.findByPk(userID) // {}  or null

        if(user){

            return done(null, user)  // place the user object on the req.user
            // req.user = {id, email, password, createAt, updatedAt}
        }
        else{

            // no use found

            return done(null, false) // not putting anythig on the req
        }

    }
    catch(error){
        // error in decoding the token or reading the db

        return done(error)
    }

})


passport.use(localStrategy)
passport.use(jwtLogin)