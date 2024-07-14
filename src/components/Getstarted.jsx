import { GiFallingLeaf } from "react-icons/gi";
import styles from "../styles";
import { Tilt } from "react-tilt";
const Getstarted = () => (
	<Tilt>
		<div
			className={`${styles.flexCenter} w-[120px] h-[120px] rounded-2xl bg-blue-gradient p-[2px] cursor-pointer`}
		>
			<div
				className={`${styles.flexCenter} flex-col bg-primary  w-[100%] h-[100%] rounded-2xl
			
			`}
			>
				<div
					className={`${styles.flexStart} flex-col justify-center items-center`}
				>
					<p className="font-poppins flex font-medium text-[18px] leading-[23px]">
						<span className="text-gradient hover:text-primary">Work</span>
						&#160;
						<GiFallingLeaf className="text-secondary text-xl" />{" "}
					</p>
					<p className="font-poppins font-medium text-[18px] leading-[23px]">
						<span className="text-gradient hover:text-primary">With Us</span>
					</p>
				</div>
			</div>
		</div>
	</Tilt>
);
export default Getstarted;
