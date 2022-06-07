import React from "react";
import "./education.scss";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { motion } from "framer-motion";
export default function Education(props) {
  return (
    <motion.div className="main"
    initial= {{
      opacity: 0,
      x: "-10px",
       y: "-10px"
    }}
      animate= {{opacity: props.education===true&&1, x:0, y:0}}
      transition= {{duration: 1}}
      >
      <div className="education">
        <ul>
          <li>
            <FiberManualRecordIcon className="dot" /> CBSE Board, New Delhi
          </li>
          <span>Higher Secondary</span>
          <li>
            <FiberManualRecordIcon className="dot" /> University Of Delhi
          </li>
          <span>Bachelor of Science from Physical Sciences</span>
          <li>
            <FiberManualRecordIcon className="dot" /> Online
            (Udemy,Youtube,Books,Google,etc)
          </li>
          <span>Web Development</span>
        </ul>
      </div>
      <div className="education-year">
        <ul>
          <li className="year-list">2018-2019</li>
          <li className="year-list">2019-2022</li>
          <li className="year-list">2021</li>
        </ul>
      </div>
    </motion.div>
  );
}
