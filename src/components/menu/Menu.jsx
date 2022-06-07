import React from 'react'
import "./menu.scss"
export default function Menu(props) {
	return (
		<div className='menu' style={{right: props.isActive ? "0" : "-100vw"}}>
			<ul onClick={() => props.setIsActive(!props.isActive)}>
				<li> <a href="#home">Home </a></li>
				<li> <a href="#about">About Me</a> </li>
				<li> <a href="#resume">Resume</a> </li>
				<li> <a href="#testimonials">Testimonials</a> </li>
				<li><a href="#contact">Contact</a></li>

			</ul>
		</div>
	)
}
