const express = require('express');
const router = express.Router();

const db = require('../models/index');

// gets data from category db
router.get('/', async (req, res) => {
    try {
      let category = await db.category.findAll();
      res.render('index', {
        category: category
      });
    } catch (error) {
      console.log(error);
      res.render('index', {
        category: []
      });
    }
  });
 


module.exports = router;