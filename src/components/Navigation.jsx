import React, { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../constants";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
const Navigation = () => {
	const [active, setActive] = useState("Home");
	const [toggle, setToggle] = useState(false);
	return (
		<header className="z-[90]">
			<nav className="w-full flex py-6 justify-between items-center navbar top-0 bg-primary">
				<img src={logo} alt="Logo" className="w-[124px] h-[32px]" />
				<ul className="list-none sm:flex hidden justify-end items-center flex-1">
					{navLinks.map((nav, index) => (
						<li
							key={index}
							className={`font-poppins font-normal cursor-pointer text-[16px] z-[90] ${
								index === navLinks.length - 1 ? "mr-0" : "mr-10"
							} ${active === nav.title ? "text-red-300" : "text-white"}`}
							onClick={() => setActive(nav.title)}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>
				<div className="sm:hidden flex flex-1 justify-end text-center">
					<div
						className="text-white cursor-pointer text-2xl"
						onClick={() => setToggle((prev) => !prev)}
					>
						{toggle ? <AiOutlineClose /> : <AiOutlineMenuUnfold />}
					</div>
					<div
						className={`${
							toggle ? "flex" : "hidden"
						} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 mi-w-[140px] rounded-xl sidebar`}
					>
						<ul className="list-none flex flex-col  justify-start items-start flex-1">
							{navLinks.map((nav, index) => (
								<li
									key={index}
									className={`font-poppins font-normal cursor-pointer text-[16px] ${
										index === navLinks.length - 1 ? "mb-0" : "mb-4"
									} ${active === nav.title ? "text-red-300" : "text-white"}`}
									onClick={() => setActive(nav.title)}
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navigation;
