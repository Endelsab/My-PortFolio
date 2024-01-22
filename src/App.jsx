import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skill from "./components/Skill";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Hero />} />
					<Route path="/skill" element={<Skill />} />
					<Route path="/project" element={<Project />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
