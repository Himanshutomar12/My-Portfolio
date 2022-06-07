import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./skill.scss";
import { motion } from "framer-motion";

export default function Skills(props) {
  return (
    <motion.div
      className="skill"
      initial={{ opacity: 0, x: "-10px", y: "-10px" }}
      animate={{ opacity: props.skill === true && 1, x: 0, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="first">
        <ul>
          <li>
            <FiberManualRecordIcon className="skill-icon" /> JAVASCRIPT
          </li>
          <li>
            <FiberManualRecordIcon className="skill-icon" /> REACT JS
          </li>
          <li>
            <FiberManualRecordIcon className="skill-icon" /> NODE JS
          </li>
          <li>
            <FiberManualRecordIcon className="skill-icon" /> EXPRESS JS
          </li>
          <li>
            <FiberManualRecordIcon className="skill-icon" /> MONGO DB
          </li>
        </ul>
      </div>
      <div className="second">
        <ul>
          <li>
            <FiberManualRecordIcon className="skill-icon" /> HTML
          </li>
          <li>
            <FiberManualRecordIcon className="skill-icon" /> CSS
          </li>
          <li>
            <FiberManualRecordIcon className="skill-icon" /> BOOTSTRAP
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
