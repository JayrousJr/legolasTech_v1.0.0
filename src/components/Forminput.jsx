import React from "react";

const Forminput = ({
	value,
	label,
	name,
	handleChange,
	placeholder,
	error,
}) => {
	return (
		<div className="my-4">
			<label htmlFor={name} className="flex flex-col">
				{" "}
				<span className="text-white font-medium mb-4">{label}</span>
			</label>
			<input
				type="text"
				name={name}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				className={`bg-tertiary w-full py-2 px-6 placeholder:text-dimWhite border border-slate-800 font-poppins text-white rounded-lg outline-none  font-medium ${
					error && "border-red-400"
				}`}
			/>
			{error && (
				<span className="block text-red-400 font-normal font-poppins">
					{error}.
				</span>
			)}
		</div>
	);
};

export default Forminput;
