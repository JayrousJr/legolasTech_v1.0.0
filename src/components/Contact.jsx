import React, { useRef, useState } from "react";
import styles, { layout } from "../styles";
import { contacts } from "../constants";
import Forminput from "./Forminput";
import TextArea from "./TextArea";
import Button from "./Button";
import { handleSubmitMEssage } from "../service";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const Contact = () => {
	const formRef = useRef();
	const [submitting, setSubmitting] = useState(false);
	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [subjectError, setSubjectError] = useState("");
	const [messageError, setMessageError] = useState("");
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
		if (form.name === "") {
			setNameError("Please fill in the name");
		}
		if (form.email === "") {
			setEmailError("Please fill in the email address");
		}
		if (form.subject === "") {
			setSubjectError("Please fill in the subject");
		}
		if (form.message === "") {
			setMessageError("Please fill in the message");
		} else {
			setSubmitting(true);
			emailjs
				.send(
					"service_bwg5h9q",
					"template_t6w3mhb",
					{
						from_name: form.name,
						from_email: form.email,
						subject: form.subject,
						to_name: "Legolas Technologies",
						to_email: "info@legolas.tech",
						message: form.message,
					},
					"zAW17snC4RexDAgWv"
				)
				.then(
					() => {
						setSubmitting(false);
						alert(
							"Thank you for contacting Legolas Technologies, We gonna get back to you so soon."
						);
						setForm({
							name: "",
							email: "",
							subject: "",
							message: "",
						});
						setNameError("");
						setEmailError("");
						setSubjectError("");
						setMessageError("");
					},
					(error) => {
						setSubmitting(false);
						console.log(error);
						alert("Sorry! Something went wrong.");
					}
				);
		}
	};
	return (
		<section id="contact" className={`${layout.sectionReverse} items-start`}>
			<div className="absolute z-[0] bottom-0 -left-1/2 w-[20%] h-[20%] rounded-full pink__gradient"></div>
			<div className="absolute z-[0] top-0 left-0 w-[30%] h-[10%] rounded-full blue__gradient"></div>
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className={`${layout.sectionInfo} `}
			>
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
			</motion.div>
			<div className={`${layout.sectionContentReverse}`}>
				<div className="bg-black-100 w-full rounded-xl">
					<form onSubmit={handleSubmit} ref={formRef} className="mx-6 my-10">
						<Forminput
							name="name"
							handleChange={handleChangeFunction}
							value={form.name}
							placeholder="Enter Your Cool Name"
							label="Your Name"
							error={nameError}
						/>
						<Forminput
							name="email"
							handleChange={handleChangeFunction}
							value={form.email}
							placeholder="Enter Your email address"
							label="Your email"
							error={emailError}
						/>
						<Forminput
							name="subject"
							handleChange={handleChangeFunction}
							value={form.subject}
							placeholder="Enter subject"
							label="Subject"
							error={subjectError}
						/>
						<TextArea
							name="message"
							handleChange={handleChangeFunction}
							value={form.message}
							placeholder="Enter your complimenting Message"
							label="Message"
							error={messageError}
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
