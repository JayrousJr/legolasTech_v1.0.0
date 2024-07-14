import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
const Circles = () => {
	return (
		<motion.a
			whileHover={{ scale: 1.2 }}
			onHoverStart={(e) => {}}
			onHoverEnd={(e) => {}}
			className={`${styles.flexCenter} z-[10] absolute w-[80px] h-[80px] max-sm:w-[50px]5max-sm:h-[50px] right-[10%] top-[5%] rounded-full
             bg-blue-gradient p-[2px]`}
		></motion.a>
	);
};

export default Circles;
