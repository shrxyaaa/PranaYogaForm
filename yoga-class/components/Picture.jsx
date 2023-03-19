import React from "react";

export default function Picture(props) {
	return (
		<div className={props.divStyle}>
			<img className={props.imgStyle} src={props.src} alt={props.alt} />
		</div>
	);
}
