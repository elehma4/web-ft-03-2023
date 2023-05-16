
const pbkdf2 = require('pbkdf2'); //allows us to has a string 
const crypto = require('crypto'); // use to create a salt 

//take our password and hash it.
let password = "some user password"

// hash(password) + ramdome + mix 

/**
 *  hashing produces the same output for a given input 
 * 
 *  Popular attalcs
 * - look up tables
 * - rainbox tables 
 * - 
 */

// str1 = 'abc123' 
// str2 = 'bcd234'

// hash(str1) == has(str2)

/**
 * A salt is soemthing that is appended to the password has to make it unique. 
 * 
 * So you take a random string (salt) and combine  it with the plain-text password string to give a unique value.  This means that even with a lookup talbe of known password hashes, and attacke can't match your user's password has with the list of hashes.  Given to tow identical passwords, the resulting hashes will be unique. A randcom salit is an essential piece of password security. 
 */

let salt = crypto.randomBytes(20).toString('hex') //randomized string of 20 char. in length 

console.log(salt);


/**
 * PBKDF2 is what we call a Password Based Key Derivation Function. 
 * 
 * PBKDF2 is a simple cryptographic key derivation function, which is resistant to dictionary attacks and rainbow table attacks. It is based on iteratively deriving HMAC many times with some padding.
 * 
 * PBKDF2 applies a pseudorandom function, such as hash-based message authentication code (HMAC), to the input password or passphrase along with a salt value and repeats the process many times to produce a derived key, which can then be used as a cryptographic key in subsequent operations. The added computational work makes password cracking much more difficult, and is known as key stretching.
 * 
 * If the resulting secret isn't used as key but as hash value it's also called a password hash. Password hashes differ from secure hashes in the sense that they contain a salt and a work factor / iteration count.
 * 
 * Both cryptographic hashes and password hashes are one way functions designed to create a short, fixed sized output from a given input. 
 * 
 * In the case of the password hash the input would be the password and salt. The size of the salt and the iteration count are commonly considered configuration parameters; both do of course influence the output of the password has
 * 
 * Password hashes are generally build on top of Pseudo Random Functions or PRFs. A usual form of PRF is a HMAC or Hash based Message Authentication Code, which in turn uses a hash internally.
 * 
 * - master password from which a derived key is generated
 * - salt is a sequence of bits 
 * - 3600 is number of iterations 
 * - 256 is the desired bit length of the derived key
 * - sha256 is the hashing algorithm for calculating HMAC
 */

let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256')




/**
 * Hexadecimal is virtually a gold standard for radix 16 encoding. Base64 isn't standard at all.
 * 
 * Hexadecimal is traditional -- by this, I mean that there first were command-line tools that used hexadecimal for output, then other people using the hash functions found it fit to stick to hexadecimal, if only to be able to compare their values with the output of the aforementioned tools. That's how traditions get established: a more-or-less random choice at the start, then the need for interoperability and backward compatibility kicks in.

In the case of hexadecimal in cryptographic algorithms, one can probably trace it to the use of C language for reference implementations. Most algorithms are described with a specification (mathematical description, usually typeset in LaTeX), and a reference implementation that produces basic test vectors. For better or worse, the reference implementation is usually in C (or sometimes C++). In C, there is no standard facility for Base64 encoding (some programming platforms offer that, or external libraries, but it is not standard); but hexadecimal is easily obtained with a simple printf() with a "%08x" format string. As a very classic example, consider the MD5 specification (RFC 1321), which contains a reference implementation that does hexadecimal output.
 */

let hash = key.toString('hex') // takes the hash key and makes it a hex value 

let stored_pass = `pbkdf2_sha256*3600*${salt}*${hash}` // this is what's stored in db 
// console.log(stored_pass);


//!! ------------------------------------------------------------------ 

// figure out if passowrd is correct 

let newPassword = "some user passwor"

let pass_parts = stored_pass.split('*')// ['pbkdf2_sha256', '3600', 'slkdfjsl', 'slkdfjsldkf']

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
    console.log('passwords matched');
}
else{
    console.log('what trying to do?');
}