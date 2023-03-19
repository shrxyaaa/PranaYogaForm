import React from "react";
import "react-phone-input-2/lib/style.css";

export function Input(props) {
	return (
		<div className={props.className}>
			<label htmlFor={props.id}>{props.placeholder}</label>
			<input
				value={props.value}
				className="border-2 border-black w-full p-2 "
				placeholder={props.placeholder}
				type={props.type}
				id={props.id}
				name={props.name}
				required
				onChange={(e) => {
					console.log(e.target.name + " " + e.target.value);
					props.setValue({
						...props.obj,
						[e.target.name]: e.target.value,
					});
					console.log(props.obj);
				}}
			/>
		</div>
	);
}

export function InputMoney(props) {
	return (
		<div className={props.className}>
			<label htmlFor={props.id}>{props.placeholder}</label>
			<input
				value={props.value}
				className="border-2 border-black w-full p-2 "
				placeholder={props.placeholder}
				type={props.type}
				id={props.id}
				name={props.name}
				required
				onChange={(e) => {
					props.setValue(e.target.value);
				}}
			/>
		</div>
	);
}

export function SelectInput(props) {
	const options = ["6-7AM", "7-8AM", "8-9AM", "5-6AM"];

	return (
		<div className={props.className}>
			<label htmlFor="batch">Batch</label>

			<select
				className="border-2 default:text-slate-500 border-black w-full p-2 "
				name={props.name}
				onChange={(e) => {
					props.setValue({
						...props.obj,
						[e.target.name]: e.target.value,
					});
					console.log(props.obj);
				}}
			>
				<option disabled selected>
					Select your Batch
				</option>
				{options.map((option, index) => {
					return <option key={index}>{option}</option>;
				})}
			</select>
		</div>
	);
}
