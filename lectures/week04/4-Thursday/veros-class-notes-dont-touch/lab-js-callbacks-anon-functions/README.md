# Lab: Callbacks and Anonymous Functions

Given the following array, solve the problems below:

```js
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

```

```js
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
```

1. Write a `for` loop to print each number of the `ages` array

2. Using a `for` loop, print each object of the `companies` array

3. Using a `forEach` method, print each number in the `ages`

4. Using a `forEach` method, print each object of the companies array

5. Map through the `ages` array and return a new ages array where 5 is added to each element. 

6. Map through the `companies` array and return a new companies array where the end date is 2020 for each company.

7. Filter all even numbers in the `ages` array

8. Filter out all ages greater than 35

9. Filter out all `companies` with a start date that is greater than 1990

10. Is there at least one value in the `ages` array that is equal to 21?

11. Are there values in the `ages` array that are less than 14?

12. Are there companies in the `company` list that started prior to 1990?
