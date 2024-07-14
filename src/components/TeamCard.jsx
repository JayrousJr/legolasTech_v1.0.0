import React, { useEffect, useState } from "react";
import { GiAlliedStar } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { Tilt } from "react-tilt";
const TeamCard = ({ name, image, position, profession }) => {
	const [showOverlay, setshowOverlay] = useState(false);

	return (
		<AnimatePresence>
			<motion.div
				className="relative"
				onHoverStart={() => setshowOverlay(true)}
				onHoverEnd={() => setshowOverlay(false)}
			>
				{showOverlay && (
					<motion.div
						className="absolute inset-0 flex justify-center items-center "
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<div className="absolute pointer-events-none w-full h-full  flex items-center justify-center rounded-lg bg-primary opacity-75" />
						<motion.h1
							initial={{ y: 0 }}
							animate={{ y: 10 }}
							exit={{ y: 0 }}
							className="bg-white font-bold font-poppins rounded-full text-md px-3 py-2 w-[80%] text-center flex justify-center items-center gap-[.5ch] hover:opacity-75 z-10 cursor-pointer"
						>
							<span>{profession}</span>{" "}
							<GiAlliedStar className="text-primary text-xl" />
						</motion.h1>
					</motion.div>
				)}
				{/* <Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
			> */}
				<motion.div className="flex flex-col items-center min-w-[200px] border border-slate-400 border-opacity-30 rounded-lg gap-1 px-2 py-4">
					<img
						src={image}
						alt={name}
						className="w-[100px] h-[100px] object-contain rounded-full"
					/>
					<h2 className="text-white font-poppins text-[20px] font-semibold text-center">
						{name}
					</h2>
					<p className="text-dimWhite font-poppins text-[16px] text-center">
						{position}
					</p>
				</motion.div>
				{/* </Tilt> */}
			</motion.div>
		</AnimatePresence>
	);
};

export default TeamCard;
