
//passport passport-local 

const LocalStrategy = require('passport-local'); //strategy
const bcrypt = require('bcryptjs');

const db = require('../models') 


// req -res, next 
// req => passport +> session  =>  resp
// next = done
const init = (passport) => {

    // console.log('checkpoint 10: before passport.use is called');
    
    passport.use(new LocalStrategy( {usernameField: 'email'}, async (email, password, done) => { 
        
        console.log('chekpoint 9: when we have logged in. The button has been clicked');
        // scrape info from header 
        // check if user is in db
        // grab current ecrypt. password 
        // create a new encrypt based what just used to log in 
        // make comparison between the to

        try{

            console.log('checkpoint 1: entering in the try statement');
            let records = await db.users.findAll({where: {email}})  // [{}]] , []

            if(records){
                /// if a record was found

                console.log('checkpoint 2: a record was found in db for this user');
                let record = records[0]; 

                //get the db password, and compare it to the password that was entered in the form 

                bcrypt.compare(password, record.password, (err, match)=>{

                    if(match){
                        // password matched
                        console.log('checkpoint 3: passwords matched');
                        // console.log("passwords matched");

                        return done(null, record)  //put this on the session
                    }
                    else{
                        //no match in passwords 

                        console.log('checkpoint 4: passwords did not match');
                        // console.log("passwords didn't match");
                        return done(null, false)
                    }
                })

            }
            else{
                // no record was found from db query

                console.log('checkpoint 5: no email address found for this user');
                return done(null, false)
            }
        }
        catch(err){

            console.log('checkpoint 6: there was error somewhere in try block');
            console.log(err);

            return done(err)
        }

     })) // end of passport local 

     // add the user info to the session 
     // user is going to come ffrom the record passsed from the done above
     // what are we puttin on the session?

     passport.serializeUser((user, done)=>{ //this is the name that goes on passport.session

        console.log('session: inside serialize user');
        done(null, user.id) //second argmument is what goes on the session.id

        //req.session.passport
     })

     //grab session decode the sectret

     passport.deserializeUser( async (id, done)=>{

        // req.session 
        // req.body 
        // req.user
        try{

            console.log(`session: insdie deserialize user`);
            let foundUserInDBFromSessionID = await db.users.findByPk(id);

            if(foundUserInDBFromSessionID){
                // we found userID in db 
                console.log(`checkpoint 11: found userID in deserialized session ${id}`);
                //req.session`

                done(null, foundUserInDBFromSessionID) //attaches to the request as request.user
            }
            else{

                console.log(`checkpoint 11: id was not found db for deserialize`);
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