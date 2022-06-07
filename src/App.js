import TopBar from "./components/topBar/TopBar";
import Resume from "./components/resume/Resume";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Aboutme from "./components/aboutme/Aboutme";
import React, { useState, useEffect } from "react";

import "./app.scss";

 
function App() {
 
  const [isActive, setIsActive] = useState(false);
  
 
  return (
    <div className="App">
    <TopBar isActive={isActive} setIsActive={setIsActive}/>
    <Menu isActive={isActive} setIsActive={setIsActive} />
    <div className="sections">
   
    <Home /> 
    <Aboutme/>                                 
    <Resume />
    <Testimonials />
    <Contact />
       
    
       </div>
   
    </div>
  );
}

export default App;
