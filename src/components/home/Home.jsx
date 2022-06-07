import React, { useEffect } from "react";
import "./home.scss";
import Typewriter from "typewriter-effect";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WindowDimensions from "../dimension/WindowDimension";

export default function Home() {

  const { height, width } = WindowDimensions();

  const secondVariant = {
    leftHidden: { opacity: 0, x: -150 },
    
    visible: { opacity: 1, x: 0, y:0 },
    rightHidden: { opacity: 0, x: 100 },
    iconHidden: {opacity:0, y: 30}
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className="about" id="home">
      <div className="left">
        <motion.div
          className="header"
          ref={ref}
          variants={secondVariant}
          initial="leftHidden"
          animate={control}
          transition={{ duration: 1 }}
        >
          <p>Hi there, I am</p>
          <h1>Himanshu Tomar</h1>
          <span>
            <Typewriter
              options={{
                strings: [width > 600?"Full Stack Web Developer.":"A Web Developer", "Freelancer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </motion.div>
        <motion.div className="cvDiv" 
            ref={ref}
            variants={secondVariant}
            initial="leftHidden"
            animate={control}
            transition={{ duration: 1}}>
          <a className="hireMe" href="#contact">
            Hire Me
          </a>
          <a className="cv" href="resume.pdf" download>
            Get Resume
          </a>
        </motion.div>
      </div>
      <motion.div className="down-icon" 
            ref={ref}
            variants={secondVariant}
            initial="iconHidden"
            animate={control}
            transition={{delay:.5,duration: 1}}>
        <a href="#about">
          <KeyboardArrowDownIcon data-aos="fade-up" className="downIcon" />
        </a>
      </motion.div>
      <div className="right">
        <motion.div className="img"  
            ref={ref}
            variants={secondVariant}
            initial="rightHidden"
            animate={control}
            transition={{duration: 1}}>
          <img src={width>600?"images/image.png":"images/image-modified.png"}  alt="" />
        </motion.div>
      </div>
    </div>
  );
}
