import React from "react";
import { Navbar } from "../components/Navbar";
import Picture from "../components/Picture";
import MemberForm from "../components/forms/MemberForm";

export default function member() {
	return (
		<>
			<Navbar />
			<div className=" w-screen pt-20 overflow-y-scroll bg-orange-100 h-screen md:flex lg:flex items-center justify-center ">
				<MemberForm />
				<Picture
					divStyle=" lg:w-1/3 md:w-1/2 px-5 "
					imgStyle="w-max"
					src="/yoga3.jpg"
					alt="Picture of the author"
				/>
			</div>
		</>
	);
}
