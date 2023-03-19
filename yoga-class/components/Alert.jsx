import React from "react";

export default function Alert(props) {
	return (
		<div className="font-sans items-center w-full  ">
			<p className={props.pClass}>{props.alert}</p>
		</div>
	);
}
