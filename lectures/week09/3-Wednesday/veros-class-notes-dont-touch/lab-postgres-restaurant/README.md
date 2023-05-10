
# Restaurant Menu 

## Getting Started
- run `npm install` 
- install `pg-promise`
- create a models directory in the root folder
- create a new database called pgRestaurant2022 
- create a database.js in the models folder 
- setup the database connections in the database.js file 
- create a tables.sql file inside of the models folder with the following script

```sql 
CREATE TABLE categories
(
    id SERIAl NOT NULL PRIMARY KEY,
    name varchar(50)
);

INSERT INTO categories VALUES 
(DEFAULT, 'BBQ'),
(DEFAULT, 'Gluten-Free'),
(DEFAULT, 'Mexican'),
(DEFAULT, 'Tapas'),
(DEFAULT, 'Greek'),
(DEFAULT, 'Chinese'),
(DEFAULT, 'Ethopian'),
(DEFAULT, 'Indan'),
(DEFAULT, 'Thai'),
(DEFAULT, 'Vietnamese'),
(DEFAULT, 'German'); 

CREATE TABLE menuItem
(
    id SERIAL PRIMARY KEY,
    name varchar(100),
    category integer REFERENCES categories(id),
    foodDescription varchar(300),
    price float,
    course varchar(50),
    imageURL varchar(150)
);

```

## Routes
- Create the necessary routes for your restaurant menu
- Test the routes using thunder client
## Form 

- determine the missing attributes in the newdish.ejs file 
- display the names in the dropdown list

```js
 

<option value=""></option>
           

```

- where does the form need to post to?  Add the attributes to the form so that it reaches the route that creates a new record in the database. 


```js


    <div class="col-4">
        <div class="card paper mb-5" style="width: 18rem;">
            <div style="overflow: hidden; height: 200px; border-radius: 10px;">
                <img  src="<%= item.imageurl %>" class="card-img-top" alt="...">
            </div>
            <div class="card-body">
            <h5 class="card-title">Title</h5>
            <p class="card-text">Food Description</p>
            <h5 class=" text-secondary">$ Price </h5>
            </div>
        </div>

    </div>
            
```



