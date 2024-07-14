import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";
const FeedbackCard = ({ content, name, title, img }) => (
	<motion.div
		variants={fadeIn("", "", 0.1, 1)}
		className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 feedback-card"
	>
		<Tilt>
			<span className="text-secondary text-[50px]">''</span>
			<p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
				{content}
			</p>
			<div className="flex flex-row">
				<img
					src={img}
					alt="Card Image"
					className="w-[48px] h-[48px] rounded-full object-contain"
				/>
				<div className="flex flex-col ml-4">
					<h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
						{name}
					</h4>
					<p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
						{title}
					</p>
				</div>
			</div>
		</Tilt>
	</motion.div>
);

export default FeedbackCard;
