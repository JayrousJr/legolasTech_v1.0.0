import React from "react";
import styles from "../styles";
import { GiFallingLeaf } from "react-icons/gi";
import Getstarted from "./Getstarted";
import { hero1 } from "../assets";
import Circles from "./Circles";
import CirlceSm from "./CirlceSm";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const Hero = () => (
	<section className={`flex md:flex-row flex-col ${styles.paddingY}`} id="home">
		<motion.div
			className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
		>
			<motion.div
				variants={fadeIn("up", "spring", 0.5, 0.75)}
				className="flex flex-row items-center py-[16px] px-4 bg-discount-gradient rounded-[10px] mb-2"
			>
				<p className={`${styles.paragraph} flex justify-center items-center`}>
					<GiFallingLeaf className="text-secondary text-xl" />
					&#160; <span className="text-white"> We're</span> &#160; Legolas
					Technologies
				</p>
			</motion.div>
			<div className="flex justify-between items-center w-full">
				<h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
					Your First <br className="sm:block hidden" />
					<span className="text-gradient">Technology </span> Stop Shop.
				</h1>
				<div className="ss:flex hidden md:mr-4 mr-0 ml-4">
					<Getstarted />
				</div>
			</div>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				Legolas Technologies offers expert services in mobile applications,
				desktop applications, web applications, graphic design, cybersecurity,
				and multimedia solutions.
			</p>
		</motion.div>
		<div
			className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative px-4`}
		>
			<img
				src={hero1}
				alt="Hero Image"
				className="md:w-[80%] h-[70%] w-[100%] md:h-[100%] object-cover relative z-[5] "
			/>
			<Circles />
			<CirlceSm />
			<div className="absolute z-[0] w-[40%] h-[35%] pink__gradient top-0"></div>
			<div className="absolute z-[1] w-[50%] h-[50%] white__gradient bottom-20 rounded-full"></div>
			<div className="absolute z-[0] w-[50%] h-[50%] blue__gradient right-20 bottom-20"></div>
		</div>
		<div className={`ss:hidden ${styles.flexCenter}`}>
			<Getstarted />
		</div>
	</section>
);

export default Hero;
