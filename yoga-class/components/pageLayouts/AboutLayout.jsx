import React from "react";
import { Navbar } from "../Navbar";

const AboutLayout = ({ children }) => {
	return (
		<>
			<Navbar className="text-black" />
			<div className=" w-screen overflow-y-scroll scroll-top-24   h-screen flex flex-col justify-center ">
				{children}
			</div>
		</>
	);
};

export default AboutLayout;
