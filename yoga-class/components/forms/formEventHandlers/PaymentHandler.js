import axios from "axios";

const handlePayment = async (amount, setAlert, router) => {
	const email = localStorage.getItem("userEmail");
	const memberPayload = { amount, email };

	console.log(memberPayload);
	// send data to the server
	try {
		const { data } = await axios({
			url: "/api/payment",
			method: "POST",
			data: memberPayload,
		});

		console.log("Response", data);
		if (data._id == "2") {
			if (!localStorage.getItem("successMessage"))
				localStorage.setItem("successMessage", data.msg);
			router.push("/");
		}

		setAlert(data.msg);
	} catch (error) {
		console.log("Error", error);
	}
};
export default handlePayment;
