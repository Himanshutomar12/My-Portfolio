import React, {useEffect} from 'react';
import "./aboutme.scss";
import MinimizeIcon from '@material-ui/icons/Minimize';
import WindowDimensions from "../dimension/WindowDimension";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Aboutme() {

	const firstVariant = {
		hidden: {opacity: 0, y: 60},
		visible: {opacity: 1, y: 0, transition: {duration: .5}},
		headHidden: {opacity: 0, y:-20}
	}

	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			control.start("visible");
			
		} 
	}, [control, inView]);
     
	
	 
	const { height, width } = WindowDimensions();
	return (
		<section id='about'>
		<motion.div className="topHeader"
		  variants={firstVariant}
		  animate={control}
		  initial="headHidden"
		>
		<h1><MinimizeIcon className="minusIcon"/>About me<MinimizeIcon className="minusIcon"/></h1>
        <span className='about-span'>Why Choose Me?</span>
		</motion.div>
	
		<motion.div  className='about-me'
		  ref={ref}
		  variants={firstVariant}
		  animate={control}
		  initial="hidden"
		>
		
		 <div className="left">
          <div className="image">
          <img src={width>1020?"images/mine.png":"images/mine-modified.png"}  alt="" />
		 </div>
		</div>
	


		<div className="right">
		<div className="myself">
	
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus a corporis tempora? Enim ad minus repellat maiores et! Mollitia repellendus quod, porro voluptatum corporis, ducimus illo amet, quia deleniti dolor magni quibusdam ratione saepe vitae. Nemo odio sed amet voluptates, necessitatibus sunt distinctio. Laudantium, enim.</p>
         <h2>Here are a few highlights :</h2>
		 <ul>
			 <li>Himanshu</li>
			 <li>Himanshu</li>
			 <li>Himanshu</li>
			 <li>Himanshu</li>
			 <li>Himanshu</li>
		 </ul>
		 <a href="resume.pdf" download>Get Resume</a>
		
	    </div>
		</div>
			
		</motion.div>
		
		</section>
		
	)
}
