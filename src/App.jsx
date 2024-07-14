import "./index.css";
import styles from "./styles";
import {
	About,
	Billing,
	Contact,
	Business,
	CTA,
	Footer,
	Hero,
	Project,
	Stats,
	Team,
	Testimonials,
	Navigation,
	Clients,
} from "./components";
import StartsCanvas from "./components/StartsCanvas";
import StarsCanvas from "./components/StartsCanvas";
const App = () => (
	<div className="bg-primary relative w-full overflow-hidden">
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				<Navigation />
			</div>
		</div>

		<div className={`${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
		</div>

		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth} relative`}>
				<Stats />
				<Business />
				<Billing />
				{/* <Project /> */}
				{/* <About /> */}
				<Testimonials />
				{/* <Clients /> */}
				<Team />
				<CTA />
				<Contact />
				<div className="relative z-0">{/* <StarsCanvas /> */}</div>
				<Footer />
			</div>
		</div>
	</div>
);

export default App;
