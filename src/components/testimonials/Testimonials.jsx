import React,{useEffect} from "react";
import "./testimonials.scss";

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import MinimizeIcon from '@material-ui/icons/Minimize';


export default function Projects() {

  const fourthVariant= {
    leftHidden: {opacity: 0, x:-60},
   
    rightHidden: {opacity:0, x:60},
    topHidden: {opacity:0, y:-20},
    visible: {opacity:1, x:0, y:0, transition: {duration: .5}}
  }

  const control = useAnimation();
   const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
	  <section id="testimonials">
    <div className="hr"><hr /></div>
	  <motion.div className="top" ref={ref} variants={fourthVariant} initial="topHidden" animate={control} >
	  <h1><MinimizeIcon />Testimonials<MinimizeIcon /></h1>
    <span className="topSpan">What People Say About Me</span>
	  </motion.div>
    <div className="testimonials">
    <motion.div id="first-box" className="box"  ref={ref} variants={fourthVariant} initial="leftHidden" animate={control}>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsam libero vitae ducimus!</p>
     <img src="#" alt="image" />
     <span>Himanshu tomar</span>
    </motion.div>
    <motion.div id="second-box" className="box" ref={ref} variants={fourthVariant} initial="leftHidden" animate={control}>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsam libero vitae ducimus!</p>
     <img src="#" alt="image" />
     <span>Himanshu tomar</span>
    </motion.div>
	   <motion.div id="third-box" className="box" ref={ref} variants={fourthVariant} initial="rightHidden" animate={control}>
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ipsam libero vitae ducimus!</p>
     <img src="#" alt="image" />
     <span>Himanshu tomar</span>
     </motion.div>
     
    </div>
   
	</section>
  );
}
