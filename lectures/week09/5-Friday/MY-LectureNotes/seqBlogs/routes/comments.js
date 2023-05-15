const express = require('express');
const router = express.Router();

const db = require('../models/index');

router.get('/comments/:id', async (req, res) => {

    try{
        const {id} = req.params;

    const comments = await db.comments.findAll({
        where: {
            blogID: id
        }
    });

    if (!comments) {
        // Handle the case where a blog with the given id is not found
        res.status(404).send('Comments not found');
      } else {
        res.render('comments', { comments: comments });
      }

    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
    
});

router.post('/comments', async (req, res) => {
    const { username, comment, blogID } = req.body;
    const newComment = await db.comments.create({
        username: username,
        content: comment,
        blogID: blogID,
        isApproved: true
    });
    res.redirect('/details/' + blogID);
});

router.put('/comments/approval/:id', async (req, res) => {
    const { id } = req.params;
    const comment = await db.comments.findOne({ where: { id: id } });
    if (comment) {
        comment.isApproved = !comment.isApproved;
        await comment.save();
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
});


module.exports = router;