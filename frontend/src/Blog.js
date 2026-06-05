import React from 'react';
import i from './images/doc-1.jpg';
import im from './images/doc-2.jpg';
import imag from './images/doc-4.jpg';
import "./blog.css";
import { IoIosArrowForward } from "react-icons/io";



const Blog =()=>{
    return(

    <div className="our"><center><h1>OUR<span> BLOGS</span></h1></center>
    <div className="clients-blog">
      <div className="card1">
        <img src={i}></img>
        <h2>Blog Title Goes Here</h2>
        <p>
        Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Provident, Eius
        </p>
        <button>LEARN MORE<span><IoIosArrowForward/></span></button>
        </div>
      <div className="card1">
        <img src={im}></img>
        <h2>Blog Title Goes Here</h2>
        <p>
        Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Provident, Eius
        </p>
        <button>LEARN MORE<span><IoIosArrowForward/></span></button>
        </div>  
        <div className="card1">
          <img src={imag}></img> 
          <h2>
          Blog Title Goes Here</h2> 
          <p>
          Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Provident, Eius
          </p>
          <button>LEARN MORE<span><IoIosArrowForward/></span></button>
          
          </div>
        </div>
    </div>
    )}
export default Blog;
    
    
    
  