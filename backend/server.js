const express = require('express')
// const bodyParser  = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')


//  environment variables
require('dotenv').config()

// express server
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


// middleware 
// database connection
const uri = process.env.ATLAS_URI;
console.log(uri)
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true})
// database connection testing
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDb database conncetion extablished successfully")
})

// route
app.use('/users',require('./routes/users'))
app.use('/exercises',require('./routes/exercises'))

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})