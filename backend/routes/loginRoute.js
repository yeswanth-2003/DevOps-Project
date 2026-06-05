const express=require("express");
const {logincreate}=require('../controllers/login');
const router=express.Router();


router.post('/signin',logincreate);



module.exports=router;