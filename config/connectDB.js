const mongoose = require('mongoose')
const config = require('config')



const connectDB = () => {
    mongoose.connect(config.get("MONGOURL"), { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('mongoose connected'))
        .catch('error connect to database')
}

module.exports = connectDB