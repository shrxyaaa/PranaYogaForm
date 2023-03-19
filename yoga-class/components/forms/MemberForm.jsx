import React, { useState } from "react";
import { SubmitButton } from "../Button";
import { useRouter } from "next/router";
import { Input, SelectInput } from "../InputFields";
import FormLayout from "../pageLayouts/FormLayout";
import {
	handleFeePayment,
	handleBatchChange,
} from "./formEventHandlers/MemberHandler";

export default function MemberForm() {
	const [alert, setAlert] = useState("");
	const [person, setPerson] = useState({
		email: "",
		batch: "",
	});

	const router = useRouter();

	return (
		<FormLayout
			className=" lg:w-1/3 font-semibold  md:w-2/3  w-11/12  "
			alert={alert}
		>
			<Input
				id="email"
				placeholder="Email"
				name="email"
				value={person.email}
				setValue={setPerson}
				obj={person}
				type="email"
				className="space-y-5 m-5 flex flex-col"
			></Input>

			<SubmitButton
				eventHandler={() => {
					handleFeePayment(person.email, setAlert, router);
				}}
				name="Fee Payment"
			/>

			<SelectInput
				className="space-y-5 m-5 flex flex-col"
				name="batch"
				setValue={setPerson}
				obj={person}
			></SelectInput>

			<SubmitButton
				eventHandler={() => {
					handleBatchChange(person, setAlert, router);
				}}
				name="Batch Change"
			/>
		</FormLayout>
	);
}
