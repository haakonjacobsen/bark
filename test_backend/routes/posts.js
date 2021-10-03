const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET ALL POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err){
        res.json({message: err});
    }
});

// SEARCH QUERY
router.get('/search/:queryText', async (req, res) => {
    try {
        const posts = await Post.find({
            $text: { $search: req.params.queryText}
        });
        res.json(posts);
    } catch (err){
        res.json({message: err});
    }
});

// GET SPECIFIC POSTS
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err){
        res.json({ message:err });
    }
});

// ADD A NEW POST
router.post('/', async (req, res) => {
    try{
        const post = new Post({
            dogBreed: req.body.dogBreed,
            price: req.body.price,
            dogAge: req.body.dogAge,
            description: req.body.description,
            pictures: req.body.pictures
        });
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err){
        res.json({message: err});
    }
});

// DELETE A SPECIFIC POST
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({_id: req.params.postId});
        res.json(removedPost);
    } catch (err){
        res.json({message: err});
    }
});

// UPDATE A SPECIFIC POST
router.patch('/:postId', async (req, res) => {
    try {
        console.log(req.body);
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {dogBreed: req.body.dogBreed} }
        );
        res.json(updatedPost)
    } catch (err){
        res.json({message: err});
    }
});

module.exports = router;