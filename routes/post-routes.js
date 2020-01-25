const express = require('express');
const router = express.Router();
const db = require('../models')

router.get('/post', (req, res)=>{
    res.send('<h1>This is home</h1>')
})

// Register new user
// router.post('/api/users', (req, res)=>{
//     db.User.create({
//         name: req.body.name
//     }).then(user => {
//         res.json(user)
//     });
// })

// find all users
// router.get('/api/users', (req, res) =>{
//     db.User.findAll().then(users=> {
//         res.json(users);
//     });
// })

module.exports = router;