const express = require('express');
const router = express.Router();

const db = require('../models/index');

// gets data from category db
router.get('/', async (req, res) => {
    try {
      let category = await db.category.findAll();
      const blogs = await db.blogs.findAll();

      res.render('index', {
        category: category,
        blogs: blogs
      });
    } catch (error) {
      console.log(error);
      res.render('index', {
        category: [],
        blogs: []
      });
    }
});
 
router.get('/blogs/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const blogs = await db.blogs.findAll({
      where: {
        categoryID: id,
        isPublished: true
      }
    });

    res.render('blogs', { category: [], blogs: blogs });

  } catch (error) {
    console.log(error);
  }
});

module.exports = router;