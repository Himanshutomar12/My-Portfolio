import React,{useEffect} from "react";
import "./topbar.scss"
// import PersonIcon from '@material-ui/icons/Person';
// import MailIcon from '@material-ui/icons/Mail';
import WindowDimensions from "../dimension/WindowDimension";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


  export default  function TopBar(props){

    const topVariant= {
        visible: {opacity: 1, y: 0, transition: {duration: 1}},
        hidden: {opacity: 0, y: -50}
    }

       const control = useAnimation();
      const [ref, inView] = useInView();

       useEffect(() => {
        if (inView) {
      control.start("visible");
      }
     }, [control, inView]);


        const { height, width } = WindowDimensions();
           
    return <div className={props.isActive ? "top-bar active" : "top-bar"}>
    
         <motion.div className="left"  ref={ref} variants={topVariant} initial="hidden" animate={control}>
             <a href="#home">Tom<span style={{color: "grey"}}>ar</span></a>


         </motion.div>
         <motion.div className="right"   ref={ref} variants={topVariant} initial="hidden" animate={control}>
        
         {width > 1312
         ?<div className="rightContent">
             <span><a href="#home">Home </a></span>
             <span><a href="#about">About Me</a></span>
             <span><a href="#resumeSection">Resume</a></span>
             <span><a href="#testimonials">Testimonials</a></span>
             <span><a href="#contact">Contact</a></span>
         </div> 
        :<div className="hamburger" onClick={() => props.setIsActive(!props.isActive)}>
                 <span className="lin1"></span>
                 <span className="lin2"></span>
                 <span className="lin3"></span>
                 
         </div>}
           
         </motion.div>
     </div>

}
