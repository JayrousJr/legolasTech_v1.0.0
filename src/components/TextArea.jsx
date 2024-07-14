import React from "react";
import { TbPlaceholder } from "react-icons/tb";

const TextArea = ({ value, label, name, handleChange, placeholder }) => {
	return (
		<div className="">
			<label htmlFor={name} className="flex flex-col">
				{" "}
				<span className="text-white font-medium mb-4">{label}</span>
			</label>
			<textarea
				rows={5}
				name={name}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				className="bg-tertiary w-full py-4 px-6 placeholder:text-dimWhite border border-slate-800 font-poppins text-white rounded-lg outline-none  font-medium"
			/>
		</div>
	);
};

export default TextArea;
