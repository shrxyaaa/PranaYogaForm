import React, { useState } from "react";
import axios from "axios";

import ValidateEmail from "./ValidateEmail";

const handleSubmit = async (person, setAlert, router) => {
	console.log("calling Validate email");
	const validEmail = await ValidateEmail(person.email, setAlert);
	console.log("validate email over");
	if (!validEmail) return;

	const memberPayload = person;
	console.log(memberPayload);
	// send data to the server
	try {
		const { data } = await axios({
			url: "/api/register",
			method: "POST",
			data: memberPayload,
		});

		console.log("Response", data);
		if (data._id == "2") {
			localStorage.setItem("userEmail", person.email);
			router.push("/payment");
		}

		setAlert(data.msg);
	} catch (error) {
		console.log("Error", error);
	}
};
export default handleSubmit;
