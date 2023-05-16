# Authentication Notes 

- install
    - ejs
    - cookie-session
    - express
    - helmet 
    - passport passport-local
    - sequelize 
    - pg pg-hstore
    - bcryptjs

- set express app
    - public folder
    - views folder
    - routes folder
        - login.js
        - registration.js
        - index.js
    - app.js

- Registration
    - create  form
    - gather information from submitted form and insert data to db
        - post route 
        - parser to get info from header 
        - registering username, and password
        - bcrypt to encrypt password

- Build DB (sequelize) br
    - user table: username, password,  email
    - run sequelize init
    - configure db inside config/config.json
    - run sequelize db:create
    - generate a model (init.bash)
    - run bash init.bash
    - freeze table name (optional)
    - setup associations - inside models folder
    - modify migration to reflect foreign key (REFERENCES) 
    - run migration (sequelize db:migrate)
    - 

- Passport (Authentication)
    - Pre-req: Wire up a login form to submit username and pw data... then
    - Setup passport:
        - Initialize passport checklist
            - npm i passport passport-local cookie-session
            In app:
            - app.use(passport.initialize())
            - app.use(passport.session())
            - require cookie-session and wire it up through middleware to parse req.session
        - add passport.authenticate 'local' to login route which will route through the custom LocalStrategy middleware we will write
        - set up custom passport middleware => passport.use(new LocalStrategy) => write logic in callback
            - import passport & passport-local.Strategy as LocalStrategy
            - our LocalStrategy will check if user is in database
            - we will then check if password was valid using bcrypt.compare()
            - call done and pass data based on whether data was valid or invalid
        - set up serializeUser and deserializeUser => Passport will serialize and deserialize user instances to and from the session (using cookie id's)
        - Set up custom middleware auth function to intercept for protected routes
            - mkdir auth, cd auth, code index.js
            - checks req.isAuthenticated to see whether or not to allow request to access route
        - Import this auth function and add it as middleware to routes you want to protect