const user = require('../model/userModel')

//post
exports.userCreate = async(req,res)=>{
    try {
        const data = req.body
        const userData = new user(data);
    
        if(!userData){
            return res.status(404).json({message:'user data not found'})
        }
        const savedData = await userData.save();
            res.status(200).json({message:'user added successfully'})
        
    } catch (error) {
        res.status(500).json({error:error})
    }
   
   
}
//get
exports.userReading= async(req,res)=>{
    try {
        const userData = await user.find()
        if(!userData){
            return res.status(404).json({message:'user data not found'})
        }
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json({error:error})
    }
}
//getone
exports.userGetone = async(req,res)=>{
    try {
        const id = req.params.id
        const userExist = await user.findById(id);
        if(!userExist){
            res.status(404).json({message:'user not found'})
        }
        res.status(200).json(userExist)
    } catch (error) {
        res.status(500).json({error:error})
    }
}
//update
exports.userUpdate = async(req,res)=>{
    try {
        const id = req.params.id
        const userExist = await user.findById(id)
        if(!userExist){
           return res.status(404).json({message:'user data not found'})
        }
        const data = req.body
        const updateData = await user.findByIdAndUpdate(id,data,{new:true})
        res.status(200).json({message:'updated successfully'})
    } catch (error) {
        res.status(500).json({error:error})
    }
}
//delete
exports.userDelete = async(req,res)=>{
    try {
        const id = req.params.id
        const userExist = await user.findById(id)
        if(!userExist){
            return res.status(404).json({message:'user data not found'})
        }
        await user.findByIdAndDelete(id);
        res.status(200).json({message:'user deleted successfully'})
    } catch (error) {
        res.status(500).json({error:error})
    }
}