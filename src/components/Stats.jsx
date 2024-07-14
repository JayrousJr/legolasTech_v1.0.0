import styles from "../styles";
import { stats } from "../constants";
const Stats = () => (
	<section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
		{stats.map((item, index) => (
			<div
				className={`flex-1 flex justify-start items-center flex-col flex-wrap sm:mb-20 mb-6`}
				key={index}
			>
				<h2 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
					{item.value}
				</h2>
				<p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient xs:ml-3 uppercase">
					{item.title}
				</p>
			</div>
		))}
	</section>
);

export default Stats;
