const express = require('express')
const router = express.Router()
const User = require('../models/User')


// method get
router.get('/getuser', (req, res) => {
    User.find()
        .then((User) => res.send(User))
        .catch((err) => console.error(err))
})


// method post
router.post('/adduser', (req, res) => {
    const newuser = new User({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        phone: req.body.phone

    })
    newuser.save()
        .then((user) => res.send(`user added successfully ${user}`))
        .catch((err) => console.log(err))
})



// method delete 
router.delete('/deleteuser/:_id', (req, res) => {
    const { _id } = req.params
    User.findByIdAndDelete({ _id })
        .then((user) => res.send(user))
        .catch((err) => console.error(err))
})

//  method update 
router.put('/updateuser/:_id', (req, res) => {
    const { _id } = req.params
    const { name, age, email, phone } = req.body

    User.findByIdAndUpdate({ _id }, { $set: { name, age, email, phone } })
        .then((user) => res.send(`user Deleted successfully ${user}`))
        .catch((err) => console.error(err))
})


module.exports = router