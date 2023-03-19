import axios from "axios";
import ValidateEmail from "./ValidateEmail";

export const handleFeePayment = async (email, setAlert, router) => {
	const validEmail = await ValidateEmail(email, setAlert);

	if (!validEmail) return;

	localStorage.setItem("userEmail", email);
	console.log(email, localStorage.getItem("userEmail"));
	router.push("/payment");
};

export const handleBatchChange = async (person, setAlert, router) => {
	const validEmail = await ValidateEmail(person.email, setAlert);
	if (!validEmail) return;

	const memberPayload = person;
	// send data to the server
	console.log(memberPayload);
	try {
		const { data } = await axios({
			url: "/api/batchchange",
			method: "POST",
			data: memberPayload,
		});

		console.log("Response", data);
		if (data._id == "2") {
			localStorage.setItem("successMessage", data.msg);
			router.push("/");
		}

		setAlert(data.msg);
	} catch (error) {
		console.log("Error", error);
	}
};
