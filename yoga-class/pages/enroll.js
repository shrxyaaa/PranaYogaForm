import React from "react";
import { Navbar } from "../components/Navbar";
import Picture from "../components/Picture";
import EnrollmentForm from "../components/forms/EnrollmentForm";

export default function enroll() {
	return (
		<>
			<Navbar />
			<div className=" w-screen pt-16 overflow-y-scroll  bg-orange-100 h-screen  lg:flex md:flex items-center justify-center ">
				<EnrollmentForm />
				<Picture
					divStyle="lg:w-1/2 md:w-max w-2/3 justify-center m-auto"
					imgStyle="lg:w-11/12 md:w-11/12 w-full"
					src="/MaryTilson_1.jpg"
					alt="Picture of the author"
				/>
			</div>
		</>
	);
}
