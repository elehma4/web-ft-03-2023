
const db = require('./models/index');


const createRecords = async () => {

    await db.user.create({name: 'Michael', email: "mj@jackson.com", bio: "beat it"})
    await db.user.create({name: 'Kim', email: "K@annoying.com", bio: "is annoying"})
    await db.user.create({name: 'Beyonce', email: "bey@bey.com", bio: "to the left"})
    await db.user.create({name: 'JZ', email: "jz@jz.com", bio: "where is he"})
    await db.user.create({name: 'Taylor Seift', email: "tswift@sifty.com", bio: "hello"})
    await db.user.create({name: 'Brittney Spears', email: "b@spears.com", bio: "unlocked"})
    await db.user.create({name: 'cher', email: "cher@cher.com", bio: "she sings"})
    await db.user.create({name: 'Leo DiCaprio', email: "LD@dicaprio.com", bio: "actor"})
    
}

// createRecords();

const findData  = async () => {

    let records = await db.user.findAll();  // [{}, {}, {}]

    records.forEach(record =>{
        console.log(`${record.name} ${record.email} ${record.bio}`);
    })
     
    
}

// findData();


const findByKey = async (id) => {
    
    let record = await db.user.findByPk(id)// {}

    console.log(`${record.name} ${record.email} ${record.bio}`);
}


// findByKey(2)


const findWhere = async (val) => {
    
    let records = await db.user.findAll( {where:  {name: val}   }  )// [{}, {}]

    for( let record of records){

        console.log(`${record.name}`);
    }
}

// findWhere('cher')

const deleteRecord = async (id) => {
    
    await db.user.destroy(  {where:  {id:id }  }  )
}


// deleteRecord(1)


const updateRecords = async () => {

    await db.user.update({email: 'Beyonce@dc.com'}, { where: {name: 'JZ'} })
    
}

// updateRecords()


const createBlogs = async () => {

    await db.blogs.create({title: 'JS', body: 'sldjsljdalsd', userID: 4})
    await db.blogs.create({title: 'Prototype', body: 'sldjsljdalsd', userID: 4})
    await db.blogs.create({title: 'Node JS', body: 'sldjsljdalsd', userID: 3})
    await db.blogs.create({title: 'Sequelize', body: 'sldjsljdalsd', userID: 9})
    await db.blogs.create({title: 'Authentication', body: 'sldjsljdalsd', userID: 2})

}

// createBlogs()


const findBlogs = async () => {
    // blogs belongsTo one user, so result will be an object associated with a blog
    let blogs = await db.blogs.findAll({

        include: [{
            model: db.user, 
            required: true // inner join
        }]
    })

 // { {}}
    blogs.forEach(blog =>{

        console.log(`${blog.title}  ${blog.user.name}`);
    })
}

// findBlogs()


const findUsersBlogs = async () => {
    //user hasMany blogs, so result will be an array of blogs associated with a user
    let users = await db.user.findAll({  // [{}, {}]
        include: [{
            model: db.blogs, 
            required: true  //innner join
        }]
    })

    for (let user of users){

        console.log(user.name);
        //user.blogs  ==> array

        user.blogs.forEach(blog =>{
            console.log(`>>>>> ${blog.title}`);
        })

    }
    
}

findUsersBlogs()

