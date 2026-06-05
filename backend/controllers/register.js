const Register=require('../models/registerStyle');
const bcrypt = require('bcryptjs');

const createUser=async(req,res)=>{
    try{
        const {username,phonenumber,email,password}=req.body;
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const register=new Register({
            username,
            phonenumber,
            email,
            password:hashedPassword,

        });
        await register.save();
        res.status(201).json({message:'Register created successfully',register});

    }
    catch(error){
        console.error('Error register user:',error);
        res.status(400).json({message:'Error register user',error:error.message});

    }
}
module.exports={createUser};