const express=require("express");
const {bookAppointment}=require('../controllers/textmessage');
const router=express.Router();


router.post('/text',bookAppointment);



module.exports=router;