import React, { useState } from "react";
import { SubmitButton } from "../Button";
import { useRouter } from "next/router";
import axios from "axios";
import { Input, InputMoney } from "../InputFields";
import Alert from "../Alert";
import handlePayment from "./formEventHandlers/PaymentHandler";
import FormLayout from "../pageLayouts/FormLayout";

export function PaymentForm() {
	const [amount, setAmount] = useState("");
	const [alert, setAlert] = useState("");
	const router = useRouter();

	return (
		<FormLayout
			className=" font-semibold text-lg md:w-2/3 lg:w-1/3 w-full"
			alert={alert}
		>
			<InputMoney
				id="amount"
				placeholder="Amount (in Rupees)"
				value={amount}
				setValue={setAmount}
				type="text"
				className="space-y-5 m-5 flex flex-col"
			/>
			<SubmitButton
				name="Fee Payment"
				eventHandler={() => {
					handlePayment(amount, setAlert, router);
				}}
			/>
		</FormLayout>
	);
}
