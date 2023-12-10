const express = require('express')
const route = express.Router()
const cors = require('cors')
route.use(cors())
const userController = require('../controller/userController')

route.post('/create',userController.userCreate)

route.get('/getall',userController.userReading)

route.get('/getone/:id',userController.userGetone)

route.put('/update/:id',userController.userUpdate)

route.delete('/delete/:id',userController.userDelete)

module.exports=route