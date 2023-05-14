const express = require('express');
const router = express.Router();

const db = require('../models/index');

// shows our form
router.get('/admin', async (req, res) => {
  try {
    const category = await db.category.findAll();
    res.render('admin', {
      category: category
    });
  } catch (error) {
    console.log(error);
    res.render('admin', {
      category: []
    });
  }
});

// collect data from our form
router.post('/admin', async (req, res) => {
  try {
    const { title, content, publishDate, category} = req.body;
    const commentCount = 0;
    const isPublished = Date.now() > new Date(publishDate);

    // store our information in our database
    const newBlog = await db.blogs.create({
      title: title,
      content: content,
      publishDate: publishDate,
      categoryID: category,
      commentCount: commentCount,
      isPublished: isPublished
    });

    res.redirect('/')
    
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
