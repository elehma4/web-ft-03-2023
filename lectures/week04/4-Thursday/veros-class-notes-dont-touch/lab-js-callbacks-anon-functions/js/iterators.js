
// 1. Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. 
// For example, I want to eat a mango.

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// 2. Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// 3. Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers.

const bigNumbers = [100, 200, 300, 400, 500];

// 4. Call the .filter() method on randomNumbers to return values that are less than 250. Save them to a new array called smallNumbers, declared with const.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// 5. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. Save the returned array to a const variable named longFavoriteWords.

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// 6. Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal

const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// 7. Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.

// 8. Sum the numbers in the newNumbers array using the reduce method

const newNumbers = [1, 3, 5, 7]; 


// *** Replace "method" with correct array method 

// 9. We want to create a new array of interesting words. The first thing we want to do is check if there are words that are fewer than 6 characters long. There is something missing in the words.some() method call. Fix this method so that true is printed to the console.

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise']; 

// console.log(words.method((word) => {
//   return word.length < 6;
// }));

//9b. Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.

//** Chose the right iterator */


const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];


//  Choose a method that will return undefined
cities.method(city => console.log('Have you visited ' + city + '?'));


// Choose a method that will return a new array
const longCities = cities.method(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.method((acc, currVal) => {
  return acc + currVal[0]
}, "C");

// Choose a method that will return a new array
const smallerNums = nums.method(num => num - 5);


// Choose a method that will return a boolean value
nums.method(num => num < 0);









