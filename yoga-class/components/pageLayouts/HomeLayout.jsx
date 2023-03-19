import Link from "next/link";
import React from "react";

export default function HomeLayout({ children }) {
	return (
		<>
			<div className="font-bold float-right   fixed w-full px-8 py-6 flow-root">
				<Link href="/about">
					<p className="float-right ">About</p>
				</Link>
			</div>
			<div className=" w-screen  bg-scroll  h-screen flex flex-col justify-center ">
				<img
					className="-z-50 object-cover absolute top-0 left-0 w-screen h-screen"
					src="/theme.jpg"
					alt="/public/yogaclass.jpg"
				/>
				{children}
			</div>
		</>
	);
}
