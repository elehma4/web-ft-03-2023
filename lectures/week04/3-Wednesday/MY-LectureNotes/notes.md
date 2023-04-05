# Notes on Front-End Design:
Intro to DOM Manipulation.


### Network Traffic:

            (msg)
CLIENT -> request -> SERVER
  ^                    |
  |<-----------------  v 
        response
         (msg)

#### FRONT-END CLIENT:                   
HTML, JS, CSS (front-end technologies)


#### BACK-END SERVER:
Python, PHP, Java, C#, C++, Node

#### BOM - Browser Object Model

Includes Javscript engine. (Chrome uses v8)

- UI is taken care of by browser. (API gives DOM to JS)
- Through JS Engine we can update things


### DOM - Document Object Model

- OOP representation of the web page

- Browser takes string of html & translates into an object & parses it.

##### Creates an HTML Tree

Child - Head && Child - Body
                         |
                         v
                         UL (children)
                         |
                         v
                         lix3 (siblings)


