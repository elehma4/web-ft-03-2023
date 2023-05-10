const express = require("express");
const router = express.Router();

const db = require('../models/database');

router.get("/", (req, res) => {
  res.render("index");
});

//! test endpoints using thunder client before messing with frontend
// GET /todos, displays all of the todos
router.get("/todos", async (req, res) => {
  try{
    let todoItems = await db.query('SELECT * FROM todo_list')

    res.json(todoItems);
  }
  catch{
    res.render('index', {
        todo: []
    })
  }
})

// GET /todos/:id , displays todos by id
router.get("/todos/:id", async (req, res) => {
  try{
    let {id} = req.params;

    let todoItems = await db.query('SELECT id, todo_item FROM todo_list WHERE id=$1', [id])

    res.json(todoItems);
  }
  catch{
    res.render('index', {
        todo: []
    })
  }
})

// POST /todos, creates a new todo
router.post("/todos", async (req, res) => {
  try{

    let {todo_item} = req.body

    let todoItems = await db.query('INSERT INTO todo_list VALUES (DEFAULT, $1)', [todo_item])

    // res.json(todoItems);
    let newTable = await db.query('SELECT * FROM todo_list');
    res.json(newTable);
  }
  catch{
    res.render('index', {
        todo: []
    })
  }
})

// PUT /todos/:id, update a todo item
router.put("/todos/:id", async (req, res) => {
  try{

    let {id} = req.params;
    let {todo_item} = req.body

    let todoItem = await db.query('UPDATE todo_list SET todo_item=$1 WHERE id=$2 RETURNING *', [todo_item, id])

    // res.json(todoItem);
    let newTable = await db.query('SELECT * FROM todo_list');
    res.json(newTable);
  }
  catch{
    res.render('index', {
        todo: []
    })
  }
})


// DELETE /todos/:id, delete a todo

router.delete("/todos/:id", async (req, res) => {
  try{

    let {id} = req.params;

    let todoItem = await db.query('DELETE FROM todo_list WHERE id=$1', [id])

    // res.json(todoItem);
    let newTable = await db.query('SELECT * FROM todo_list');
    res.json(newTable);
  }
  catch{
    res.render('index', {
        todo: []
    })
  }
})

module.exports = router;
