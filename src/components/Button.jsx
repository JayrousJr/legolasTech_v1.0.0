import React from "react";
import { motion } from "framer-motion";
const Button = ({ styles }) => {
	return (
		<motion.button
			whileTap={{ scale: 0.8 }}
			type="submit"
			className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-xl mt-6 outline-none ${styles}`}
		>
			Get Started
		</motion.button>
	);
};

export default Button;
