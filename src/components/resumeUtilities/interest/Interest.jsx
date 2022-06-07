import React from "react";
import "./interest.scss";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { motion } from "framer-motion";
export default function Interest(props) {
  return (
    <motion.div
      className="interest"
      initial={{
        opacity: 0,
        x: "-10px",
        y: "-10px",
      }}
      animate={{
        opacity: props.interest === true && 1,
        x: 0,
        y: 0,
      }}
      transition={{ duration: 0.8 }}
    >
      <ul>
        <li>
          <FiberManualRecordIcon className="interest-icon" />
          Lorem
        </li>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          voluptas iure excepturi dignissimos non nostrum ipsa est nemo.
        </span>
        <li>
          <FiberManualRecordIcon className="interest-icon" />
          Lorem
        </li>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          voluptas iure excepturi dignissimos non nostrum ipsa est nemo.
        </span>
        <li>
          <FiberManualRecordIcon className="interest-icon" />
          Lorem
        </li>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          voluptas iure excepturi dignissimos non nostrum ipsa est nemo.
        </span>
      </ul>
    </motion.div>
  );
}
