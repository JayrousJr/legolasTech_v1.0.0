import styles from "../styles";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
const Testimonials = () => (
	<section
		id="clients"
		className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
	>
		<div className="absolute z-[0] w-[60%] h-[60%] -right-[30%] rounded-full blue__gradient" />
		<motion.div
			variants={textVariant()}
			className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]"
		>
			<h1 className={`${styles.heading2}`}>
				What People Are <br className="sm:block hidden" /> Saying About Us
			</h1>

			<div className="w-full md:mt-0 mt-6">
				<p className={`${styles.paragraph} text-left max-w-[450px]`}>
					Everything you need to expand your business anywhere in the World.
					Just give us a shot and see the changes.
				</p>
			</div>
		</motion.div>
		<div className="flex flex-wrap sm:justify-start justify-center w-full feedback z-[1]">
			{feedback.map((item, index) => (
				<FeedbackCard key={index} {...item} />
			))}
		</div>
	</section>
);

export default Testimonials;
