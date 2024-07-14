import useMeasure from "react-use-measure";
import { team } from "../constants";
import styles from "../styles";
import TeamCard from "./TeamCard";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Team = () => {
	let [ref, { width }] = useMeasure();
	const xTranslation = useMotionValue(0);
	const FAST_DURATION = 25;
	const SLOW_DURATION = 75;
	const [duration, setDuration] = useState(FAST_DURATION);
	const [mustFinish, setMustFinish] = useState(false);
	const [rerender, setRerender] = useState(false);
	useEffect(() => {
		let controls;
		let finalPosition = -width / 2 - team.length;
		if (mustFinish) {
			controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
				ease: "linear",
				duration: duration * (1 - xTranslation.get() / finalPosition),
				onComplete: () => {
					setMustFinish(false);
					setRerender(!rerender);
				},
			});
		} else {
			controls = animate(xTranslation, [0, finalPosition], {
				ease: "linear",
				duration: duration,
				repeat: Infinity,
				repeatType: "loop",
				repeatDelay: 0,
			});
		}

		return controls?.stop;
	}, [xTranslation, width, duration, rerender]);
	return (
		<section className={`flex flex-col gap-5 px-12 ${styles.padding}`}>
			<h2 className={styles.heading2}>Team</h2>
			<p className={`${styles.paragraph} max-w-[470px] my-6`}>
				Meet our Team, ready to serve you with great Tech services, and make
				your business grow. <br />
				Hover over to slow it down and read the Profession on indevidual team
				member.
			</p>
			<div className="flex">
				<motion.div
					className="flex gap-[50px] justify-start items-start"
					ref={ref}
					style={{ x: xTranslation }}
					onHoverStart={() => {
						setMustFinish(true);
						setDuration(SLOW_DURATION);
					}}
					onHoverEnd={() => {
						setMustFinish(true);
						setDuration(FAST_DURATION);
					}}
				>
					{[...team, ...team].map((item, index) => (
						<TeamCard key={index} {...item} />
					))}
					<div className="absolute z-[0] w-[30%] h-[30%] pink__gradient left-20 rounded-full"></div>
					<div className="absolute z-[1] w-[50%] h-[50%] white__gradient bottom-20 rounded-full"></div>
					<div className="absolute z-[2] w-[50%] h-[50%] blue__gradient right-20 bottom-20"></div>
				</motion.div>
			</div>
		</section>
	);
};

export default Team;
