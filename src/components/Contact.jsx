import React, { useRef, useState } from "react";
import styles, { layout } from "../styles";
import { contacts } from "../constants";
import Forminput from "./Forminput";
import TextArea from "./TextArea";
import Button from "./Button";
import { handleSubmitMEssage } from "../service";
const Contact = () => {
	const formRef = useRef();
	const [submitting, setSubmitting] = useState(false);
	const [errors, setErrors] = useState({});
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
		subject: "",
	});
	const handleChangeFunction = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setSubmitting(true);
			await handleSubmitMEssage(form);
		} catch (error) {
			// setErrors(error);
			console.log(error);
		} finally {
			setSubmitting(false);
		}
	};
	return (
		<section id="contact" className={`${layout.sectionReverse} items-start`}>
			<div className={`${layout.sectionInfo} `}>
				<h2 className={styles.heading2}>Contacts</h2>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					Do you have any Compliment or question. Feel free to send us a message
					and we'll get to yor As Soon As Possible (ASAP).
				</p>
				<ul className="flex flex-col justify-start items-start gap-2 mt-5">
					{contacts.map((item, index) => (
						<li key={index} className="flex gap-3 justify-center items-center">
							{item.type === "link" ? (
								<>
									<img
										src={item.image}
										alt={item.name}
										className="w-[21px] h-[21px] object-contain"
									/>
									<a
										href={
											item.id === "email"
												? "mailto:" + item.name
												: "tel:" + item.name
										}
										className="font-poppins font-semibold text-[16px] text-dimWhite cursor-pointer hover:text-secondary"
									>
										{item.name}
									</a>
								</>
							) : (
								<>
									<img
										src={item.image}
										alt={item.name}
										className="w-[21px] h-[21px] object-contain"
									/>
									<span className="font-poppins font-semibold text-[16px] text-white">
										{item.name}
									</span>
								</>
							)}
						</li>
					))}
				</ul>
			</div>
			<div className={`${layout.sectionContentReverse}`}>
				<div className="bg-black-100 w-full rounded-xl">
					<form onSubmit={handleSubmit} ref={formRef} className="mx-6 my-10">
						<Forminput
							name="name"
							handleChange={handleChangeFunction}
							value={form.name}
							placeholder="Enter Your Cool Name"
							label="Your Name"
						/>
						<Forminput
							name="email"
							handleChange={handleChangeFunction}
							value={form.email}
							placeholder="Enter Your email address"
							label="Your email"
						/>
						<Forminput
							name="subject"
							handleChange={handleChangeFunction}
							value={form.subject}
							placeholder="Enter subject"
							label="Subject"
						/>
						<TextArea
							name="message"
							handleChange={handleChangeFunction}
							value={form.message}
							placeholder="Enter your complimenting Message"
							label="Message"
						/>
						<Button
							label={submitting ? "Sending Message ..." : "Send Message"}
						/>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
