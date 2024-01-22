import React from "react";
import Typed from "react-typed";
import Skill from "./Skill";

import Project from "./Project";
import About from "./About";
import Contact from "./Contact";

const Hero = () => {
	return (
		<div className="text-white">
			<div className="max-w-[800px]  w-full h-screen mx-auto text-center flex flex-col justify-center">
				<div className="  mb-60 md:mb-48">
					<h1 className="md:text-7xl sm:text-4xl text-3xl font-bold md:py-6">
						Hi, I'm WENDEL SABAYO
					</h1>
					<span className="text-sm">An Aspiring Web Developer</span>
					<div className="flex align-center  justify-center">
						<p className=" text-[#00df9a] font-bold p-2 md:text-lg sm:text-sm ">
							If you imagine it you can{" "}
						</p>
						<Typed
							className="text-[#00df9a] ml-0 pl-0 font-bold p-2  md:text-lg sm:text-sm"
							strings={["code it !"]}
							typespeed={120}
							backSpeed={120}
							loop
						/>
					</div>
				</div>
			</div>
			<Skill />
			<Project />
			<About />
			<Contact />
		</div>
	);
};

export default Hero;
