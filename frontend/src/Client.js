
import React from 'react';
import './App.css';
import image from './images/pic-2.png';
import images from './images/pic-1.png';
import img from './images/pic-3.png';
import "./client.css";

const Client = () => {
  return (
    
    <div className="h1">
    <center><h1>CLIENT'S <span>REVIEW</span></h1></center>
 
    
    <div className="clients">
      
      
      <div className="client-card">

    <center>  <img src={images}></img></center>
      <h5>Jazmin Archer</h5>
      <p>
      Lorem Ipsum Dolor Sit Amet<br>
      </br> Consectetur Adipisicing Elit. <br>
      </br>Laboriosam Sapiente Nihil <br>

      </br>Aperiam? Repellat Sequi Nisi<br>
      </br> Aliquid Perspiciatis Libero Nobis<br>
      </br> Rem Numquam Nesciunt Alias<br>
      </br> Sapiente Minus Voluptatem,<br>
      </br> Reiciendis Consequuntur Optio <br>
      </br>Dolorem!
      </p>
    </div>
  
    <div className="client-card">
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
    <div className="client-card">
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
    </div>
    </div>
  )
}
    export default Client;