import React from "react";
import { Navbar } from "../components/Navbar";
import Picture from "../components/Picture";
import { PaymentForm } from "../components/forms/PaymentForm";

export default function payment() {
	return (
		<>
			<Navbar />
			<div className=" w-screen pt-16 overflow-y-scroll bg-orange-100 h-screen md:flex lg:flex items-center justify-center ">
				<PaymentForm />
				<Picture
					divStyle=" lg:w-2/5 md:w-1/2 px-5 "
					imgStyle="w-max"
					src="/yogq1.jpg"
					alt="Picture of the author"
				/>
			</div>
		</>
	);
}
