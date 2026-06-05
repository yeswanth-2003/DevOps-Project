import ambulance from "./images/ambulance.png";
import heart from "./images/frd.png";
import medical from "./images/medical.png";
import rubber from "./images/medical.png";
import bed from "./images/health.png";
import document from "./images/document.png"
import  "./services.css";
import { IoIosArrowForward } from "react-icons/io";


function Services(){
    return(

        <div className="paper">
        <div>
        <h1>Our <span>Services</span></h1>
        </div>
        <div className="cardten">
         
           <div className="first">
            <img src={document} alt=""/>
            <h3>Free Checkups</h3>
            <p>Lorem Ipsum Dolor Sit Amet<br></br>Consectetur, Adipisicing Elit. Ad, Omnis.</p>
            <button>Learn More <span><IoIosArrowForward/></span></button>
           </div>
           <div className="first">
            <img src={ambulance} alt=""/>
            <h3>24/7 Ambulance</h3>
            <p>Lorem Ipsum Dolor Sit Amet<br></br>Consectetur, Adipisicing Elit. Ad, Omnis.</p>
            <button>Learn More<span><IoIosArrowForward/></span></button>
           </div>
           <div className="first">
            <img src={medical} alt=""/>
            <h3>Expert Doctors</h3>
            <p>Lorem Ipsum Dolor Sit Amet<br></br> Consectetur, Adipisicing Elit. Ad, Omnis.</p>
            <button>Learn More<span><IoIosArrowForward/></span></button>
           </div>
           <div className="first">
            <img src={rubber} alt=""/>
            <h3>Medicines</h3>
            <p>Lorem Ipsum Dolor Sit Amet<br></br> Consectetur, Adipisicing Elit. Ad, Omnis.</p>
            <button>Learn More<span><IoIosArrowForward/></span></button>
           </div>
           <div className="first">
            <img src={bed} alt=""/>
            <h3>Bed Facility</h3>
            <p>Lorem Ipsum Dolor Sit Amet<br></br> Consectetur, Adipisicing Elit. Ad, Omnis.</p>
            <button>Learn More<span><IoIosArrowForward/></span></button>
           </div>
           <div className="first">
           <img src={heart} alt=""/>
            <h3>Total Care</h3>
            <p>Lorem Ipsum Dolor Sit Amet<br></br> Consectetur, Adipisicing Elit. Ad, Omnis.</p>
            <button>Learn More<span><IoIosArrowForward/></span></button>
           </div>

        </div>
        </div>
        
    )
}

export default Services