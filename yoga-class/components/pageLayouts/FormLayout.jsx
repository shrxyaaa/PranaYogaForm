import React from "react";
import Alert from "../Alert";

export default function FormLayout(props) {
	return (
		<div className={props.className}>
			<Alert alert={props.alert} pClass="text-center text-gray-600 " />
			{props.children}
		</div>
	);
}
