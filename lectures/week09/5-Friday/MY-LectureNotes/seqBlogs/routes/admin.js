const express = require('express');
const router = express.Router();

const db = require('../models/index');

// shows our form
router.get('/admin', async (req, res) => {
    try {
      const category = await db.category.findAll();
      const blogs = await db.blogs.findAll();
      res.render('admin', {
        category: category,
        blogs: blogs
      });
    } catch (error) {
      console.log(error);
      res.render('admin', {
        category: [],
        blogs: []
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

router.post('/admin/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    try {
        await db.blogs.update({ content }, { where: { id } });
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

router.delete('/admin/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await db.blogs.destroy({ where: { id } });
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});


module.exports = router;
