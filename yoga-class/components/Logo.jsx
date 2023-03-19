import Link from "next/link";
import React from "react";

const Logo = () => {
	return (
		<div className="h-2/6 m-auto">
			<Link href="/">
				<p className="float-left text-white font-tangerine text-8xl">
					Pranayama
				</p>
			</Link>
		</div>
	);
};

export default Logo;
