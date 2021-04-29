const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const {postRules, validator } = require('../Middlewares/validator');


//--------------------------------- add POS------------------------------------------
router.post('/add', postRules() , validator ,   async (req, res) => {
    const { name, imgUrl, desc, more , user , nameU  } = req.body;

    try {

        const newPost = new Post({
            name, imgUrl, desc, user , nameU , 
        });
        const post = await newPost.save();

        res.json({ msg: "post added", post });
    } catch (error) {
        res.json({ msg: "error" });
    }

})



//--------------------------------- get POS------------------------------------------
router.get('/', async (req, res) => {

    try {
        const post = await Post.find().populate('', ['name']);
        res.json({ msg: "data fetched", post });
    } catch (error) {
        res.json({ msg: "error" });
    }

})





//---------------------------------delete type------------------------------------------

router.delete('/delete/:id',  async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findByIdAndDelete({ _id: id });
        res.json({ msg: "post deleted", post });
    } catch (error) {
        res.json({ msg: "error" });
    }

})


//--------------------------------- edit type------------------------------------------

router.put('/edit/:_id', async (req, res) => {
    const { _id } = req.params;
    try {
        const post = await Post.findByIdAndUpdate(_id, { $set: req.body }, { new: true, $upsert: true });
        res.json({ msg: "post edited", post });
    } catch (error) {
        res.json({ msg: "error" });
    }

})



//--------------------------------- filter type------------------------------------------
router.get('/filter/:userid', async (req, res) => {
    try {
        const post = await Post.find({ user : req.params.userid });
        res.json({ msg: "data fetched", post});
    } catch (error) {
        res.json({ msg: "error" });
    }

})


module.exports = router;

