import React from "react";
import Link from "next/link";

export function SubmitButton(props) {
	return (
		<div className="space-y-5 m-5  ">
			<button
				onClick={props.eventHandler}
				className=" w-full hover:bg-opacity-80 hover:text-lg bg-black text-white mt-10"
			>
				<h1 className=" m-5">{props.name}</h1>
			</button>
		</div>
	);
}

export function NavButtons(props) {
	return (
		<div className={props.divClass}>
			<Link href={props.nav}>
				<button className={props.buttonClass}>
					<h1 className={props.h1Class}>{props.name}</h1>
				</button>
			</Link>
		</div>
	);
}

const Button = (props) => {
	return (
		<button className="bg-amber-100 px-5 py-3">
			<h1>{props.name}</h1>
		</button>
	);
};

export default Button;
