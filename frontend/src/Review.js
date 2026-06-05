import React from "react"
import image from './images/doc-1.jpg';
import img from './images/doc-2.jpg';
import im from './images/doc-5.jpg';
import "./review.css";

const Review = ()=>{
    return(
<div className="client">
    <h1><span>Client's </span>Review</h1>
  
    <div className="card">
    <center>  <img src={image}></img></center>
  
       <h5>Jazmin Archer</h5>
       <p>
       Lorem Ipsum Dolor Sit Amet <br>
       </br>Consectetur Adipisicing Elit.<br>
       </br> Laboriosam Sapiente Nihil <br>
       </br>Aperiam? Repellat Sequi Nisi <br>
       </br>Aliquid Perspiciatis Libero Nobis<br>
       </br> Rem Numquam Nesciunt Alias <br>
       </br>Sapiente Minus Voluptatem, <br>
       </br>Reiciendis Consequuntur Optio<br>
       </br> Dolorem!
       </p>
     </div>
     <div className="card">
      <center> <img src={img}></img></center>
  
       <h5>Abdiel Galloway</h5>
       <p>
       Lorem Ipsum Dolor Sit Amet <br>
       </br>Consectetur Adipisicing Elit.<br>
       </br> Laboriosam Sapiente Nihil<br>
       </br> Aperiam? Repellat Sequi Nisi <br>
       </br>Aliquid Perspiciatis Libero Nobis<br>
       </br> Rem Numquam Nesciunt Alias <br>
       </br>Sapiente Minus Voluptatem,<br>
       </br> Reiciendis Consequuntur Optio <br>
       </br>Dolorem!
       </p>
           </div>
           <div className="card">
           <center> <img src={im}></img></center>
           <h5>Abdiel Galloway</h5>
       <p>
       Lorem Ipsum Dolor Sit Amet <br>
       </br>Consectetur Adipisicing Elit.<br>
       </br> Laboriosam Sapiente Nihil<br>
       </br> Aperiam? Repellat Sequi Nisi <br>
       </br>Aliquid Perspiciatis Libero Nobis<br>
       </br> Rem Numquam Nesciunt Alias <br>
       </br>Sapiente Minus Voluptatem,<br>
       </br> Reiciendis Consequuntur Optio <br>
       </br>Dolorem!
       </p>
       

           </div>
     </div>
    
     
    )}
     export default Review;