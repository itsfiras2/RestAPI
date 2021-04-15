const express = require('express')
const app = express()
const connectDB = require('./config/connectDB')
const port = process.env.port || 3000


// convert to json 
app.use(express.json())

// connect to database
connectDB()


// route
app.use('/api/example', require('./router/route'))


app.listen(port, (err) =>
    err ? console.log(err) : console.log(`server run in port ${port}`)
)