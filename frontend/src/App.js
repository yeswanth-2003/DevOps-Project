
import testSvg from './images/download.png';
import media from './images/medical.png';
import friend from './images/frd.png';
import bed from './images/bed.png';
import hospi from './images/ambulance.png';
import images from './images/doc-1.jpg';
import image from './images/doc-2.jpg';
import img from './images/doc-3.jpg';
import i from './images/doc-4.jpg';
import im from './images/doc-5.jpg';
import imag from './images/doc-6.jpg';
import document from './images/document.png';
import ambulance from './images/ambulance.png';
import medical from './images/medical.png';
import rubber from './images/bed.png';
import heart from './images/health.png';
import test from './images/doctorr.png';
import Book from './Book';
import Navbar from './Navbar';
import LoginRegister from './login'



import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    // <div>

    //   {/* <Navbar/> */}
    //   <LoginRegister/>
    // </div>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Navbar/>} />
    </Routes>
    </BrowserRouter>
   
    
    
  );
}

export default App;
