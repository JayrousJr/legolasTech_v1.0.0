import React from "react";
import Button from "./Button";
import styles from "../styles";

const CTA = () => (
	<section
		className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
	>
		<div className="flex-1 flex flex-col">
			<h2 className={`${styles.heading2}`}>Try our service now!</h2>
			<p className={`${styles.paragraph}`}>
				One thing to do is to try our software packages from our expert service
				providers and make your life easier.
			</p>
		</div>
		<div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-0`}>
			<Button />
		</div>
	</section>
);
export default CTA;
