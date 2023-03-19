import connectDB from "../../middleware/mongoose";

import User from "../../models/user";

const register = async (req, res) => {
	if (req.method === "POST") {
		const { firstName, lastName, batch, email, age } = req.body;
		console.log(req.body);
		const name = firstName + " " + lastName;

		if (email && name && batch && age) {
			try {
				const valAge = parseInt(age, 10);
				if (valAge < 18 || valAge > 65) {
					console.log("Age not appropriate");
					return res
						.status(200)
						.json({ msg: "Only 18-65 Age group can enroll", _id: "4" });
				}
				var saved = await User.findOne({ email: email });
				if (saved) {
					console.log(saved);
					return res.status(200).json({ msg: "User Already Exists", _id: "3" });
				}

				var user = new User({ name, batch, email, age });
				// Create new user
				var usercreated = await user.save();
				return res
					.status(200)
					.json({ msg: "Registration Successfyll", _id: "2" });
			} catch (error) {
				return res.status(500).send(error.message);
			}
		} else {
			return res.status(200).json({ msg: "Incomplete Data", _id: "1" });
		}
	} else {
		res.status(422).send("req_method_not_supported");
	}
};

export default connectDB(register);
