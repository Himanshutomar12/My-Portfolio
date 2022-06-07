import React from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import "./project.scss"
import { motion } from "framer-motion";

export default function Project(props) {
  return <motion.div className='project'
   initial= {{
     opacity: 0,
     x: "-10px",
     y: "-10px"
   }}
      animate= {{opacity: props.project===true&&1, x: 0, y: 0}}
      transition= {{duration: .8}}
      >
    <div className="first">
      <ul>
        <li><FiberManualRecordIcon className='project-icon'/> Lorem ipsum dolor sit.</li>
        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, eum?</span>
        <li><FiberManualRecordIcon className='project-icon'/> Lorem ipsum dolor sit.</li>
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, eveniet?</span>
        <li><FiberManualRecordIcon className='project-icon'/> Lorem ipsum dolor sit.</li>
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, error!</span>
      </ul>
    </div>
    <div className="second">
      <ul>
        <li>2022</li>
        <li>2022</li>
        <li>2022</li>
      </ul>
    </div>
  </motion.div>;
}
