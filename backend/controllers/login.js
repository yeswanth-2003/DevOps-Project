const Login = require('../models/loginStyle');
const bcrypt = require('bcryptjs');
const registerStyle = require('../models/registerStyle');


const logincreate=async(req,res)=>{

   try{ 
        const{email, password} =req.body; 
        const logindata=await registerStyle.findOne({email});

    if(!logindata || !(await bcrypt.compare(password,logindata.password))) {
        return  res.status(400).json({message:'invalid email or password'});
    }
    else{
        res.status(201).json({message:'Login successfully'});
     }
      
   }
   catch(error){
    console.error('Login Error:',error);
    res.status(500).json({message:'Error Login',error:error.message});
   }

}


module.exports={logincreate};