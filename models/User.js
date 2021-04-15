const mongoose = require('mongoose')
    // const isEmail = require('validator')
const schema = mongoose.Schema

const UserSchema = new schema({

    name: { type: String, required: true },
    age: { type: Number },
    // email: { validate: [isEmail, 'invalid email'] },
    phone: { type: Number }


})


module.exports = mongoose.model('user', UserSchema)