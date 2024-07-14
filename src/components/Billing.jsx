import styles, { layout } from "../styles";
import { feature_2 } from "../assets";
const Billing = () => (
	<section id="product" className={layout.sectionReverse}>
		<div className={layout.sectionImgReverse}>
			<img
				src={feature_2}
				alt="Image"
				className="w-[80%] max-md:w-[100%] object-contain h-[100%] relative z-[5]"
			/>
			<div className="absolute z-[3] top-0 -left-1/2 w-[50%] h-[50%] rounded-full white__gradient"></div>

			<div className="absolute z-[0] bottom-0 -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient"></div>
			<div className="absolute z-[0] top-0 left-0 w-[100%] h-[50%] rounded-full blue__gradient"></div>
		</div>
		<div className={layout.sectionInfo}>
			<h2 className={styles.heading2}>
				Easily Manage your <br className="sm:block hidden" /> Business and
				Organization.
			</h2>
			<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
				We have you all covered, from developing a business website for you,
				managing your social media, designing the graphics and multimedias for
				your business branding to managing your data security. We have software
				systems for your Inventory and shop, managing your Human Resource
				department for your Organization and greatlty we develop alot of
				softwares for every one in need.
			</p>
		</div>
	</section>
);

export default Billing;
