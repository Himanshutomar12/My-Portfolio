import React from "react";
import "./work.scss";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RemoveIcon from "@material-ui/icons/Remove";
import { motion } from "framer-motion";
export default function Work(props) {
  return (
    <motion.div
      className="work"
      initial={{ opacity: 0, x: "-10px", y: "-10px" }}
      animate={{ opacity: props.work === true && 1, x: 0, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="head">
        <FiberManualRecordIcon className="recordIcon" />
        <span>Lorem ipsum dolor sit.</span>
      </div>
      <ul>
        <li>
          <RemoveIcon className="work-icon" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ex
          tempore, eveniet quae culpa quo ratione assumenda labore consectetur
          adipisci.{" "}
        </li>
        <li>
          <RemoveIcon className="work-icon" />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eius quam
          ullam voluptatum quo velit, saepe quas repellendus cupiditate
          asperiores.
        </li>
        <li>
          <RemoveIcon className="work-icon" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magnam
          beatae quae voluptates distinctio molestiae!
        </li>
      </ul>
    </motion.div>
  );
}
