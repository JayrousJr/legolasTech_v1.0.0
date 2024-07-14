import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
const CirlceSm = () => {
	return (
		<motion.a
			whileHover={{ scale: 3 }}
			onHoverStart={(e) => {}}
			onHoverEnd={(e) => {}}
			className={`${styles.flexCenter} z-[10] max-ss:hidden absolute w-[38px] h-[40px] left-[10%] bottom-[5%] rounded-full
             bg-blue-gradient p-[2px]`}
		></motion.a>
	);
};

export default CirlceSm;
