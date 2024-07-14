import React from "react";
import styles from "../styles";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
const date = new Date().getFullYear();
const Footer = () => (
	<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
		<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
			<div className="flex-1 flex-col justify-start mr-10">
				<img
					src={logo}
					alt="Logo Image"
					className="w-[226px] h-[72px] object-contain"
				/>
				<p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
					The better way to make things in order and organized is to automate
					them, and we make that possible in a very easy way.
				</p>
			</div>
			<div className="flex-[1.5] w-full flex justify-between flex-wrap md:mt-0 mt-10">
				{footerLinks.map((footer, index) => (
					<div key={index} className="flex flex-col ss:my0 my-4 min-w-[150px]">
						<h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
							{footer.title}
						</h4>
						<ul className="mt-4 list-none">
							{footer.links.map((item, index) => (
								<li
									key={index}
									className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
										index !== footer.links.length - 1 ? "mb-4" : "mb-0"
									}`}
								>
									<a href={item.link}>{item.name}</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
		<div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
			<p className="font-poppins flex items-center font-normal text-start text-[18px] leading-[27px] text-white">
				&copy; 2022 - {date} Legolas Technologies,{" "}
				<br className="md:block hidden" /> All Rights Reserved.
			</p>
			<div className="flex md:mt-0 mt-6 ">
				{socialMedia.map((item, index) => (
					<Tilt key={index}>
						<a href={item.link} className="">
							<img
								src={item.icon}
								alt={item.id}
								className={`
							${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"} 
						w-[25px] h-[25px] object-contain`}
							/>
						</a>
					</Tilt>
				))}
			</div>
		</div>
	</section>
);
export default Footer;
