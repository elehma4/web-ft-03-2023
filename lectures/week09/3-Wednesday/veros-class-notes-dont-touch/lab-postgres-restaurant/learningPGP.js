
const db = require('./models/database');  // instance of our db connection 

// console.log(db);


const categories = async () => {
    
    try{
    let results = await db.query('SELECT * FROM categories') // [{}, {}, {}]

    // console.log(results);

        results.forEach(record =>{

            console.log(record.name);
        })
    }
    catch(error){

        console.log(error);
    }


}

// categories()

const insertCategory = async (categoryName) => {
    
    // let results = await db.result(`INSERT INTO categories VALUES (DEFAULT, '${categoryName}')`)

    let results = await db.result(`INSERT INTO categories VALUES (DEFAULT, $1)`, [categoryName])

    console.log(results);
}

insertCategory("Vegan")