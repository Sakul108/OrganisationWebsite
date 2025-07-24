
import "./nav.css"
import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footers from "./components/Footers";
import { useState } from "react";
import Form from "./components/Form";
import Ramroform from "./components/Ramroform";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import PageNotFound from "./PageNotFound";
import Layout from "./layouts/Layout";
import API from "./pages/API";


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="api" element={<API />} />

         
          </Route>

           <Route path="*" element={<PageNotFound />} />
        </Routes>

      </BrowserRouter>
      {/* <NavBar/>
  <HeroSection /> 
  <Footers organisationname = "  Devi Sita Foundation" />  */}



      {/* <Ramroform> </Ramroform> */}
      {/* <Form> </Form> */}

    </>

  )
}

export default App









































/* import "./nav.css";

/* NavBar is its own component 
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Sita Foundation</h1>
       

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contacts">Contacts</a></li>
          <li><a href="#Support">Support</a></li>
          <li><a href="#Our Projects">Projects</a></li>
          
        </ul>
      </div>
    </nav>
  );
}
function Donate(){
  alert ("Jay maa Sita")
}
function App() {
  /*const boys = ["Ram", "Shyam", "Hari"]  array 

   const age = 15
  if (age>= 18){
  console.log("you are eligible to vote")
  }else{
     console.log("not eligible")
  }

  
  
  

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;

  /*const name = "Vinayaka"
  const namess = "Shree Sita"

  const click = () => {
    alert(`Devi : ${namess}`)
  }

  function sakul(){
  alert("hi")
  }

  const sakuls = () =>{
    alert("hi")
    }

    return(
    <>
   <button onClick = {sakul} click for generic function </button>
    
    )
  return (
    <>
      <h1> Sita maa the Sweetest: {namess}</h1>
      <p> Ganesha is also known as {names} </p>
      <button onClick={click}> Click Here </button>
    </>
  )-
}


*/
