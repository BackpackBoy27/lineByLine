const express = require('express');
const router = express.Router();
const db = require('../models')

router.get('/', (req, res)=>{
    res.send('<h1>This is home</h1>')
})

// Register new user
router.post('/new', (req, res)=>{
    db.User.create({
        username: req.body.username
    }).then(user => {
        res.json(user)
    });
})

// find all users
router.get('/all', (req, res) =>{
    db.User.findAll({
        include: [db.Profile, db.Post]
    }).then(users=> {
        res.json(users);
    });
})

module.exports = router;