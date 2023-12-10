const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const  mongoose = require('mongoose')
const route  = require('./routes/userRoute')
require('dotenv').config()

const app= express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())


const PORT = process.env.PORT
const URL = process.env.MONGOURL

mongoose.connect(URL,{
    dbName:'crudApp'
})
.then(()=>{
    console.log('MongoDB connected successfully')
})
.catch(error=>{
    console.log('MongoDB coneection is not available'+error)
})

app.use('/api',route)

app.listen(PORT,()=>{
    console.log(`server is connected on ${PORT}`)
})