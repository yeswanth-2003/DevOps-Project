import book from "./images/BOOK.jpeg";
import { useState } from "react";
import "./book.css";
function Book(){
   const[form, setForm]=useState({
     name:'',
     number:'',
     email:'',
     dob:'',

  })
 
  const handlechange=(e)=>{ 
      const{name,value}=e.target;
      setForm({...form,[name]:value})
  }
 const handlesubmit = async (e) =>{

     e.preventDefault();


            const response = await fetch('https://medical-backend-main.onrender.com/booking/appointment',{

             method:"Post",
             body:JSON.stringify(form),
             headers: {
                 "Content-Type": "application/json"
             },
             mode:'cors'
         })
       
         const data = await response.json();
         console.log(data)
         if(data.message === "Appointment booked successfully. OTP sent to your phone and WhatsApp."){
                alert("Booking Successfull")
        }
    }


    return(
        <div className="booking-all">
        <div className="booking">
           <center> <h1><span>Book</span> Now</h1></center>

        </div>
        <div className="booking-main">

     <div className="bookings">
        <img src={book} alt=""/>
     </div>
     <form onSubmit={handlesubmit}>
     <div className="compound">
        <div className="eight">
            <center><h2>Book Appointment</h2></center>
             <input name="name" type="text" placeholder="Your name" id="Name" onChange={handlechange} value={form.name}></input><br></br>
            <input name="number" type="Number" placeholder="Your number" id="Number" onChange={handlechange} value={form.number}></input><br></br>
            <input name="email" type="email" placeholder="Your email" id="email" onChange={handlechange} value={form.email}></input><br></br>
            <input name="dob" type="Date" placeholder="dd-mm-yyyy" id="Name" onChange={handlechange} value={form.dob}></input><br></br>
            <center>    <button type="submit">Book Now</button></center>
        </div>
     </div>
     </form>
     </div>
     </div>
    )
}


export default Book;