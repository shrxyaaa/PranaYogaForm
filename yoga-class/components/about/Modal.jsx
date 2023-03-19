import React from "react";
import { NavButtons } from "../Button";
import Paragraph from "./Paragraph";

export default function Modal() {
	return (
		<div className=" w-9/12 m-24 md:w-1/2 lg:w-2/5  text-white text-lg  p-5  bg-black backdrop:blur-3xl bg-opacity-80  ">
			<h1 className="font-courgette text-center my-5 text-yellow-600">
				“The body is your temple.
				<br /> Keep it pure and clean for the soul to reside in.”
			</h1>

			<Paragraph />
			<h1 className="font-archivo mt-10">Batch Timings :</h1>
			<div className="w-full flex">
				<ul className="w-1/2 font-archivo">
					<li>6-7 AM</li>
					<li>7-8 AM</li>
					<li>8-9 AM</li>
					<li>5-6 AM</li>
				</ul>
				<NavButtons
					divClass="w-1/2 "
					buttonClass=" py-1 mt-20 bottom-0 px-4 float-right border-2  border-yellow-600 text-white  transition-all hover:tracking-wider hover:text-yellow-600 "
					name="Back"
					nav="/"
				/>
			</div>
		</div>
	);
}
