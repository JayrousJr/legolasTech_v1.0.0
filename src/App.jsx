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
const App = () => (
	<div className="bg-primary w-full overflow-hidden">
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				<Navigation />
			</div>
		</div>

		<div className={`${styles.flexStart} `}>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
		</div>

		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				<Stats />
				<Business />
				<Billing />
				<Project />
				<About />
				<Testimonials />
				{/* <Clients /> */}
				<Team />
				<CTA />
				<Contact />
				<Footer />
			</div>
		</div>
	</div>
);

export default App;
