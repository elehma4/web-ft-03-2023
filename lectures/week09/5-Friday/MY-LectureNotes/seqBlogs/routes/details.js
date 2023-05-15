const express = require('express');
const router = express.Router();

const db = require('../models/index');
 
router.get('/details/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const blog = await db.blogs.findOne({
        where: {
          id: id
        }
      });
  
      if (!blog) {
        // Handle the case where a blog with the given id is not found
        res.status(404).send('Blog not found');
      } else {
        res.render('details', { blog: blog });
      }
  
    } catch (error) {
      console.log(error);
      res.status(500).send('Server error');
    }
  });
  
module.exports = router;