import React from "react";
import ReactLogo from "../assets/react-1-logo-png-transparent.png";

const Skill = () => {
	return (
		<div className=" text-center justify-center  border border-[#ff00f2] align-middle ">
			<h1 className=" text-xl font-bold text-[#00fd9a] md:text-2xl ">SKILL</h1>

			<div className="max-w-[1240px] mx-auto grid md:grid-cols-2 border text-center justify-center">
				<img className="w-[500px] mx-auto my-4" src={ReactLogo} alt="react" />
				<div className="flex flex-col text-center  border md:mt-5">
					<p>rgrehtrhtrhtrhth</p>
					<h1 className=" py-1 text-[#00fd9a] font-bold  text-2xl md:text-4xl">
						React.js Logo my skill
					</h1>
					<p className="py-5">lorem30dfgdfgfdhgfdhfdhfhdfhdhfdh</p>
				</div>
			</div>
		</div>
	);
};

export default Skill;
