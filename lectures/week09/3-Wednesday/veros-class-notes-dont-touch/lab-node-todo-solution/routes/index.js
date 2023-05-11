const express = require("express");
const router = express.Router();
const db = require('../models/database')

//scrape from header for our post
router.use(express.urlencoded({extended: false}));
router.use(express.json());


router.get("/", (req, res) => {
  res.render("index");
});

// GET /todos - get all of the todos
router.get("/todos", async (req, res) => {
  let records = await db.query(`SELECT * FROM todos`);
  
  res.json(records);
});


// GET /todos/:id  //get todo by id
router.get("/todos/:id", async (req, res) => {
  let id = req.params.id;
  let item = await db.one(`SELECT * FROM todos WHERE id = ${id}`);

  res.json(item);
})

// POST /todos  //create a new todo
router.post('/todos', async (req, res) => {
  
  let description = req.body.description;

  let result = await db.query('INSERT INTO todos (description) VALUES ($1)', [description])
  
  let records = await db.query(`SELECT * FROM todos`);
  
  res.json(records);

  
})

// PUT /todos/:id //update a todo by id

router.put('/todos/:id', async (req, res) => {
  let id = req.params.id;

  let updatedDescription = req.body.description;

  await db.none(`UPDATE todos SET description = '${updatedDescription}' WHERE id = ${id}`)

  let records = await db.query(`SELECT * FROM todos`);
  
  res.json(records);
})

// DELETE /todos/:id  //delete a todo by id
router.delete('/todos/:id', async (req,res) => {
  let id = req.params.id
  await db.any('DELETE FROM todos WHERE id = $1', id)

  let records = await db.query(`SELECT * FROM todos`);
  
  res.json(records);
})

module.exports = router;