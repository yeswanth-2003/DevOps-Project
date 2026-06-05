const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const registerRoutes=require('./routes/registerRoute');
const loginRoutes=require('./routes/loginRoute');
const bookingRoutes=require('./routes/bookingRoute');
const textmessageRoutes=require('./routes/textmessageRoute');


dotenv.config();
const app=express();
const PORT=process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(()=>console.log('MongoDB connected successfully'))
  .catch((err)=> {
    console.error('MongoDB connection error:',err);
  });


  app.use('/register',registerRoutes);
  app.use('/login',loginRoutes);
  app.use('/booking',bookingRoutes);
  app.use('/message',textmessageRoutes);



  app.use((err,req,res,next)=>{
     console.error('Unhandled error:',err);
     res.status(500).json({message:'Internal Server Error'});
  });



app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
