
## Power Function

Write a function called **power** which accepts a base and an exponent.
The function should return the power of the base to the exponent.

## Factorial

Write a function **factorial** which accepts a number and returns the factorial of that number.

A factorial is the product of an interger and all the integers below it; eg. , 

*factorial four* ( `4!`) is equal to 24, because **4 * 3 * 2 * 1** equals 24. 

*factorial zero* (`0!`) is always 1.

## Recursive Range

Write a function called **recursiveRange** which accepts a number and adds up all the numbers from 0 to the number passed to the function

## Flatten
Without using `.flat()`, create a function to flatten an array 

```js
const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10]
flatten(exampleArray) //[1,2,3,4,5,6,7,8,9,10]
```

## Reverse
Write a recursive function called **reverse** which accepts a string and returns a new string in reverse.

## Palindrome 

Write a recursive function called **isPalindrome** which returns
`true` if the string passed to it is a palindrome (reads the same forward and backward).
Otherwise returns `false`.

```js
isPalindrome(‘awesome’) // false
isPalindrome(‘foobar’) // false
isPalindrome(‘tacocat’) // true
isPalindrome(‘amanaplanacanalpanama’) // true
isPalindrome(‘amanaplanacanalpandemonium’) // false
```