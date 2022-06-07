import React, { useState, useEffect } from 'react'
import "./resume.scss"
import Education from "../resumeUtilities/education/Education"
import Interest from "../resumeUtilities/interest/Interest"
import Project from "../resumeUtilities/project/Project"
import Skills from "../resumeUtilities/skills/Skills"
import Work from "../resumeUtilities/work/Work"
import MinimizeIcon from '@material-ui/icons/Minimize';
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";


export default function Resume() {


   const thirdVariant= {
	   leftHidden: {opacity: 0, x: -60},
	   visible: {opacity: 1, x:0, y:0},
	   rightHidden: {opacity:0, x: 60, transition: {duration:1}},
	   topHidden: {opacity:0, y: -20}
   }
	const control = useAnimation();
   const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);


	const [education, setEducation] = useState(true);
	const [work, setWork] = useState(false);
	const [skill, setSkill] = useState(false);
	const [project, setProject] = useState(false);
	const [interest, setInterest] = useState(false);
  console.log(education)
	function handleWork(){
		setWork(true);
		setEducation(false);
		setSkill(false);
		setProject(false);
		setInterest(false);
	}

	function handleSkills(){
		setWork(false);
		setEducation(false);
		setSkill(true);
		setProject(false);
		setInterest(false);
	}

	function handleProject(){
		setWork(false);
		setEducation(false);
		setSkill(false);
		setProject(true);
		setInterest(false);
	}

	function handleInterest(){
		setWork(false);
		setEducation(false);
		setSkill(false);
		setProject(false);
		setInterest(true);
	}

	function handleEducation(){
		setWork(false);
		setEducation(true);
		setSkill(false);
		setProject(false);
		setInterest(false);
	}

	return (
		<section id="resumeSection">
		<div className="hr"><hr /></div>
		
		<motion.div className="header" ref={ref} variants={thirdVariant} initial="topHidden" animate={control} transition={{duration: .3}}>
		<h1><MinimizeIcon />Resume<MinimizeIcon /></h1>
		<span>My Resume</span>
		</motion.div>
		
<div className='resume' id='resume'>
	<motion.div className="left"  ref={ref} variants={thirdVariant} initial="leftHidden" animate={control} transition={{duration: .5}}>
	<div className="resume-left-content">
	  <div className='resume-icons'>
		<span><i className="fas fa-user-graduate"></i></span> <br /> 
		<span><i className="fas fa-briefcase"></i></span>    <br /> 
		<span><i className="fas fa-file-code"></i></span>  <br />   
		<span><i className="fas fa-tasks"></i></span>     <br />    
		<span><i className="fas fa-map"></i></span> 
      </div>
	  <div className='resume-buttons '>
		<span className={education===true&&"active"} onClick={handleEducation}> Education</span> <br />      
		<span className={work===true&&"active"} onClick={handleWork}> Work History</span><br />
		<span className={skill===true&&"active"} onClick={handleSkills}>Programming Skills</span><br />
		<span className={project===true&&"active"} onClick={handleProject}> Projects</span><br />
		<span className={interest===true&&"active"} onClick={handleInterest}> Interests</span>

      </div>
	 
		
       </div>
	   </motion.div>
		<div className="right">
		
		<motion.div className="resumeContent"  ref={ref} variants={thirdVariant} initial="rightHidden" animate={control}>
		<div>
		  {education===true && <Education education={education} />}
		  {work===true&& <Work work={work} />}
		  {skill===true&& <Skills skill={skill} />}
		  {project===true&& <Project project={project} />}
		  {interest===true && <Interest interest={interest} />}
		  </div>
		</motion.div>
		
	</div>
</div>
</section>
	)
}
