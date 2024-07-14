import React from "react";
import { features } from "../constants";
import styles from "../styles";

const Features = ({ icon, content, title, index }) => (
	<div
		className={`flex flex-row p-6 rounded-[20px] ${
			index !== features.length - 1 ? "mb-6" : "mb-0"
		} feature-card`}
	>
		<div
			className={`rounded-full bg-dimBlue w-[80px] h-[80px] ${styles.flexCenter}`}
		>
			<img src={icon} alt="Image" className="w-[50%] h-[50%] object-contain" />
		</div>
		<div className="flex-1 flex flex-col ml-3">
			<h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
				{title}
			</h4>
			<p className="font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-1">
				{content}
			</p>
		</div>
	</div>
);

export default Features;
