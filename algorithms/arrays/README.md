

## Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target
You may assume that each input would have exactly one solution, and you may not use the same element twice.

**Example:**
Given nums = [2, 7, 11, 15]

target = 9

Because nums[0] + nums[1] = 2 + 7 = 9

return [0, 1] 


## Write a function that takes in an array of strings and groups anagrams together.
Anagrams are strings made up of exactly the same letters, where order doesn’t matter. For example, cinema and iceman are anagrams; similarly foo and ofo are anagrams.
Your function should return a list of anagram groups in no particular order.

Sample Input
```js
[“yo”, “act”, “flop”, “tac”, “foo”, “cat”, “oy”, “olfp”]
```

Sample Output

```js
[[“yo”, “oy”], [“flop”, “olfp”], [“act”, “tac”, “cat”], [“foo”]]
```

**Note:** Watch your runtime.  Make sure you’re not creating a n^3 runtime. Would sorting first actually be beneficial in this problem?


## Coin Flip 

You have a line of quarters. Write a function that returns the minimum number of changes necessary to make each quarter in the line of quarters alternate between heads and tails. For instance if the line of quarters were represented by the array [1,1,0,1,1], your function should return 2 because you need only 2 changes: changing the first 1 and the last 1 to zero.