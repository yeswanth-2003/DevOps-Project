import React from "react";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Doctor from "./Doctor";
import Book from "./Book";

import Blog from "./Blog";
import Client from "./Client";
import Footer from "./Footer";
import './Navbar.css';
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Navbar() {

const [isOpen,setIsOpen]=useState(false);

const togglemenu=()=>{
     setIsOpen(!isOpen);

};


    return (
       <div>
      
        <header>
               <div className="navcontainer-fluid">
          <nav className="navbar">
            <div className="navbar-brand d-flex align-items-center">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heartbeat"
                className="svg-inline--fa fa-heartbeat fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512" style={{ width: "30px", height: "30px", marginRight: "8px" }} >
                <path fill="currentColor" d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"  ></path>
              </svg>
              <h3 style={{ margin: 0 }}>MedCare</h3>
            </div>
            <button className="menu-toggle" onClick={togglemenu}> {isOpen? <IoClose />:<FaBars />}</button>
            <ul className={`menu-items ${isOpen ? "active" : ""}`}>
              <li><a href="#Home"> Home </a></li>
              <li><a href="#Services"> Services </a></li>
              <li><a href="#About"> About </a></li>
              <li><a href="#Book"> Book </a></li>
              <li><a href="#Doctor"> Doctors </a></li>
              <li><a href="#Blog"> Blogs </a></li>
              <li><a href="#Review"> Review </a></li>
            </ul>
          </nav>
        </div>

        
          </header>


           <section id="Home">
                 <Home /> 
          </section> 
          <section id="Services">
               <Services />
          </section>

            <section id="About">
               <About /> 
          </section>

          <section id="Doctor">
               <Doctor /> 
          </section>

          <section id="Book">
               <Book /> 
          </section>

          <section id="Client">
               <Client/> 
          </section>

          <section id="Blog">
               <Blog /> 
          </section>

          <section id="Footer">
               <Footer /> 
          </section>

        </div>

             
    )

    
}


export default Navbar;