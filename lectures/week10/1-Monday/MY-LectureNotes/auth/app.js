
const pbkdf2 = require('pbkdf2'); //allows us to hash a string
const crypto = require('crypto'); // use to create a salt

// take pw & hash it
let password = "some user password";

// protects against rainbow attack (look up tables):
// hash(pw) + random mix

// hashing produces the same output for given input

// str1 = 'abc123'
// str2 = 'bcd234'
// hash(str1) == has(str2)

// A salt is a string that is appended to the pw hash to make it unique
// Take a random string (salt) + combine w/ plain-text pw string to give a unique value. This can protect against look up tables of known hashes - making the hash unmatchable. Given 2 identical passwords, the resulting hashes will be unique.
// random salt is an essential piece for password security. 

let salt = crypto.randomBytes(20).toString('hex') //random string of 20 chars
console.log(salt);

// pbkdf2 is a pw based key derivation function
// hash-based message authenticaion code (HMAC)

// 3600 is a standard # of mixes
// password, salt, # of mixes, hash algo, & name of algo 
// sha256, sha512, sha 128 -> produce hash
let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256')

// console.log(key);

let hash = key.toString('hex') //takes the hash key & makes it a hex value

console.log(hash); //256 char pw storage


let stored_pass = `pbkdf2_sha256*3600*${salt}*${hash}`// this is what's stored in the database
console.log(stored_pass);

//-------------------------------------------------------

// FIGURE OUT IF PASSWORD IS CORRECT:

let newPassword = "some user password"

let pass_parts = stored_pass.split('*') // ['pbkdf2_sha256', 3600, 'aosdignad', 'asdgqera']

let keyNewLogin = pbkdf2.pbkdf2Sync(
    newPassword, 
    pass_parts[2],
    parseInt(pass_parts[1]),
    256, 
    'sha256'
)

let hashNewLogin = keyNewLogin.toString('hex')
// console.log(hashNewLogin);

if(hashNewLogin === pass_parts[3]){
    console.log('passwords match');
}
else {
    console.log('what are you trying to do?');
}