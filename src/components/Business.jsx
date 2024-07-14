import styles, { layout } from "../styles";
import { features } from "../constants";
import Button from "./Button";
import Features from "./Features";
import { motion } from "framer-motion";
const Business = () => {
	return (
		<section id="features" className={`${layout.section}`}>
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className={`${layout.sectionInfo}`}
			>
				<h2 className={`${styles.heading2}`}>
					Launch your business,&#160;
					<br className="sm:flex hidden" />
					We'll manage Tech.
				</h2>
				<p className={`${styles.paragraph} max-w-[500px] mt-5`}>
					Our expertise spans from creating sophisticated software and
					captivating designs to providing robust cybersecurity and multimedia
					services. With a focus on innovation and quality, we deliver solutions
					that drive efficiency and engagement. Rely on us to ensure your
					digital success and propel your business growth to new heights.
				</p>
				<Button styles="mt-10" />
			</motion.div>
			<div className={`${layout.sectionImg} flex-col`}>
				{features.map((item, index) => (
					<Features key={item.id} {...item} index={index} />
				))}
			</div>
		</section>
	);
};

export default Business;
