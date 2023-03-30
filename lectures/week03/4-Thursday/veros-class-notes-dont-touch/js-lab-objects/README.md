# JavaScript Object Lab Exercises

In this lab, you are going to practice the basics of creating **objects**, using JavaScript as a programming language, by completing problems that will challenge your knowledge of core princples. 

## Objectives 
- Create Objects
- Store and manipulate data in the form of key/value pairs


## Instructions 

- **Fork** this repo to your account by clicking on the **fork** Button at the top of this page. 

![](https://upload.wikimedia.org/wikipedia/commons/3/38/GitHub_Fork_Button.png)

*A **fork** is a copy of this repository. This forked repository will appear on your github account.*

- Find the repository on *YOUR* account (ie yourUserName/js-lab-objects) and click on the green `Code` button at the top of the page.

![](./images/githubCodeButton.png)

- Copy the path in the dialoge box
- Navigate to a location on **your local computer in VSCode** where you keep your homework 
- Clone this repsository by typing the following command in your terminal

```
clone [`path that you just copied`]
```

For example: 

```bash 
clone https://github.com/DigitalCraftsStudents/js-hw-objects.git
```

- Navigate into the folder titled `js-lab-objects`
- Open the file called `objects.js` and solve the lab problems 
- To run a file javascript file using node, you can run it from your terminal like this:

```bash
$ node loops.js
```

#### 1. Create an object representing a book, with properties for its title, author, and number of pages.

The title of the book is To Kill a Mockingbird written by Harper Lee and has 281 pages.


#### 2. Given the following person object


```js 
let person = {
  name: 'Jane',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

```

Write code to do the following:

- Print the person's name name 
- Print the person's city
- Print the person's state
- Add a lastName key of Doe to the person object.
- Change the name in the person object it John. 
- Update the street key in the person object to : 456 Main St. 
- Remove the zip key from the person object

#### 3. Phonebook object

Given the following object representing a mapping from names to phone numbers:

```js
let phonebook_obj = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
}
```

Write code to do the following:

- Print Elizabeth's phone number.
- Add an entry to the dictionary: Kareem's number is 938-489-1234.
- Delete Alice's phone entry.
- Change Bob's phone number to '968-345-2345'.
- Print all the phone entries.

#### 4. Nested objects

Given the following object:

```js
let ramit = {
  name: 'Ramit',
  email: 'ramit@gmail.com',
  interests: ['movies', 'tennis'],
  friends: [
    {
      name: 'Jasmine',
      email: 'jasmine@yahoo.com',
      interests: ['photography', 'tennis']
    },
    {
      name: 'Jan',
      email: 'jan@hotmail.com',
      interests: ['movies', 'tv']
    }
  ]
}
```

- Write a js expression that gets the email address of Ramit.
- Write a js expression that gets the first of Ramit's interests.
- Write a js expression that gets the email address of Jasmine.
- Write a js expression that gets the second of Jan's two interests.


#### 5. Given an array of objects representing people, extract an array of just their ages.

```js 
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
```

#### 6. Given an array of objects representing books, extract an array of just their titles.

```js 

const books = [
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'Pride and Prejudice', author: 'Jane Austen' }
];
```

#### 7. Given an array of objects representing cars, extract an array of just their colors.

```js 
const cars = [
  { make: 'Toyota', model: 'Corolla', color: 'red' },
  { make: 'Honda', model: 'Civic', color: 'blue' },
  { make: 'Ford', model: 'F-150', color: 'black' }
];

```
