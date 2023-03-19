const ValidateEmail = async (email, setAlert) => {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (await email.match(mailformat)) {
		console.log(email.value);
		console.log(email + " 1");
		return true;
	}
	setAlert("You have entered an invalid email address!");

	return false;
};

export default ValidateEmail;
