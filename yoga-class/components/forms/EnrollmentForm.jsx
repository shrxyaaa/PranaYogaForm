import React, { useState } from "react";
import { SubmitButton } from "../Button";
import { useRouter } from "next/router";
import { Input, SelectInput } from "../InputFields";
import Alert from "../Alert";
import handleSubmit from "./formEventHandlers/EnrollmentHandler";
import FormLayout from "../pageLayouts/FormLayout";

export default function EnrollmentForm() {
	const [alert, setAlert] = useState("");
	const [person, setPerson] = useState({
		firstName: "",
		lastName: "",
		email: "",
		age: "",
		batch: "",
	});

	const router = useRouter();

	return (
		<FormLayout
			className=" font-semibold text-lg md:w-2/3 lg:w-1/3 m-auto w-11/12 "
			alert={alert}
		>
			<div className="md:inline-flex ld:inline-flex w-full">
				<Input
					id="first"
					placeholder="First Name"
					name="firstName"
					value={person.firstName}
					setValue={setPerson}
					obj={person}
					type="text"
					className=" space-y-5 m-5 lg:w-1/2 md:w-1/2  flex flex-col"
				/>
				<Input
					id="Last"
					placeholder="Last Name"
					name="lastName"
					value={person.lastName}
					setValue={setPerson}
					obj={person}
					type="text"
					className=" space-y-5 m-5 lg:w-1/2 md:w-1/2  flex flex-col"
				/>
			</div>

			<div className="inline-flex w-full">
				<Input
					id="age"
					placeholder="Age"
					name="age"
					value={person.age}
					setValue={setPerson}
					obj={person}
					type="age"
					className=" space-y-5 m-5 lg:w-1/2 md:w-1/2  flex flex-col"
				/>
				<SelectInput
					className=" space-y-5 m-5 w-1/2 flex flex-col"
					name="batch"
					setValue={setPerson}
					obj={person}
				/>
			</div>

			<Input
				id="email"
				placeholder="Email"
				name="email"
				value={person.email}
				setValue={setPerson}
				obj={person}
				type="email"
				className="space-y-5 m-5 flex flex-col"
			/>

			<SubmitButton
				eventHandler={() => {
					handleSubmit(person, setAlert, router);
				}}
				name="Register"
			/>
		</FormLayout>
	);
}
