
//passport passport-local 

const LocalStrategy = require('passport-local');
const bcrypt = require('bcryptjs');

const db = require('../models') 


// req -res, next 
// req => passport +> session  =>  resp
// next = done
const init = (passport) => {

    console.log('checkpoint 10');
    
    passport.use(new LocalStrategy( {usernameField: 'email'}, async (email, password, done) => { 
        
        console.log('chekpoint 9');
        // scrape info from header 
        // check if user is in db
        // grab current ecrypt. password 
        // create a new encrypt based what just used to log in 
        // make comparison between the to

        try{

            console.log('checkpoint 1');
            let records = await db.users.findAll({where: {email}})  // [{}]] , []

            if(records){
                /// if a record was found

                console.log('checkpoint 2');
                let record = records[0]; 

                //get the db password, and compare it to the password that was entered in the form 

                bcrypt.compare(password, record.password, (err, match)=>{

                    if(match){
                        // password matched
                        console.log('checkpoint 3');
                        console.log("passwords matched");

                        return done(null, record)
                    }
                    else{
                        //no match in passwords 

                        console.log('checkpoint 4');
                        console.log("passwords didn't match");
                        return done(null, false)
                    }
                })

            }
            else{
                // no record was found from db query

                console.log('checkpoint 5');
                return done(null, false)
            }
        }
        catch(err){

            console.log('checkpoint 6');
            console.log(err);

            return done(err)
        }

     })) // end of passport local 

     // add the user info to the session 
     // user is going to come ffrom the record passsed from the done above
     // what are we puttin on the session?

     passport.serializeUser((user, done)=>{

        console.log('inside serialize user');
        done(null, user.id) //second argmument is what goes on the session.id
     })

     //grab session decode the sectret

     passport.deserializeUser( async (id, done)=>{

        try{

            let foundUserInDBFromSessionID = await db.users.findByPk(id);

            if(foundUserInDBFromSessionID){
                // we found userID in db 

                done(null, foundUserInDBFromSessionID)
            }
            else{

                // id was not found in DB
                done(null, false)
            }

        }
        catch(error){

            done(error, false)
        }
     })
    
} //end of the function


module.exports = init