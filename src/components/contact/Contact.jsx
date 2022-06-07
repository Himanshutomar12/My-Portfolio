import React, { useState, useEffect } from 'react'
import "./contact.scss"
import MinimizeIcon from '@material-ui/icons/Minimize';
import emailjs from 'emailjs-com';
import SendIcon from '@material-ui/icons/Send';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {

	const fifthVariant= {
          topHidden: {opacity: 0, y:-20},
		  leftHidden: {opacity: 0, x: -90},
		  rightHidden: {opacity: 0, x: 90},
		  visible: {opacity:1, y:0,x:0, transition:{duration: .8}}
	}

	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			control.start("visible");
			
		} 
	}, [control, inView]);
     

	const [mail, setMail] = useState({
		name: "",
		email: "",
		message: ""
	})
	const [alert, setAlert] = useState("");
	const [msg, setMsg] = useState(false);

	function mailWrite(event){
	   const {value, name} = event.target;
	   if (name === "name") {
		return setMail({
		  name: value,
		  email: mail.email,
		  message: mail.message
		});
	  } else if (name === "email") {
		return setMail({
		  email: value,
		  name: mail.name,
		  message: mail.message
		});
	  } else {
		return setMail({
		  message: value,
		  name: mail.name,
		  email: mail.email
		});
	  }
	}

	
	function sendEmail(e){
		e.preventDefault();
		emailjs.sendForm('service_o32231c', 'template_exz2uif', e.target, 'user_FHBEG5YlHtkFWzd9berJt').then(function(result, error){
			if (!error){
				if(e.target.value === ""){
					setAlert("Please fill all the fields correctly")
				}else{
					setMail({
						name: "",
						email: "",	
						message: ""
					})
					setAlert("Thank You For Your Response");
					setMsg(true);
					console.log(result.text);
					setTimeout(() => {
						setMsg(false)
					}, 4000)
				}
			}else {
                console.log(result.status);
			}
		});
		console.log(msg);
		 
		
	}
	return (
		<section id='contactMe'>
		<div className="headerr">
         <motion.h1 ref={ref} variants={fifthVariant} initial="topHidden" animate={control}> <MinimizeIcon />Contact Me<MinimizeIcon /></motion.h1>
		 <span style={{right: msg? "2.5rem" : "-40vw"}}>{alert}</span>
		 </div>

		<div className='contact' id='contact'>
		<motion.div className="left"  ref={ref} variants={fifthVariant} initial="leftHidden" animate={control} >
		<h2>Contact Me Here <span className='blinking-cursor'>| </span></h2>
          <div className="my-mail">
            mymail@gmail.com
		  </div>
          <div className="social-media">
            <a href="https://www.facebook.com/himanshu.tomar.9404362"><i class="fab fa-facebook-square"></i></a>
			<a href="https://www.instagram.com/himanshuttomar/"><i class="fab fa-instagram-square"></i></a>
			<a href="https://github.com/Himanshutomar12"><i class="fab fa-github-square"></i></a>
		  </div>
		</motion.div>
		<motion.div className="right"  ref={ref} variants={fifthVariant} initial="rightHidden" animate={control} >
		<form onSubmit={sendEmail}>
		<ul className='form-fields'>
		<li className='form-field'>
			<div className="name">
			<label htmlFor="name">Name</label><br />
			<input type="text" name='name' onChange={mailWrite} value={mail.name} required/>
			</div>
		</li>

		<li className='form-field'>
			<div className="email">
              <label htmlFor="email">Email</label><br />
			  <input type="email" name='email' onChange={mailWrite} value={mail.email} required/>
			</div>
        </li>

		<li className='form-field'>
			<div className="message">
			<label htmlFor="message">Message</label><br />
			<textarea name="message" cols="15" rows="3" onChange={mailWrite} value={mail.message} required></textarea>
			</div>
		</li>

		<li className='form-field'>
			<div className="submitForm">
				<button><SendIcon className='sendIcon' /> Send</button>
			</div>
		</li>
		</ul>
		</form>

		</motion.div>
		
		</div>
		</section>
	)
}
