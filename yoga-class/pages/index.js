import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import { NavButtons } from "../components/Button";
import Logo from "../components/Logo";
import HomeLayout from "../components/pageLayouts/HomeLayout";

export default function Home() {
	// const router = useRouter();
	const [alert, setAlert] = useState("");

	useEffect(() => {
		const message = localStorage.getItem("successMessage");

		if (message) {
			setAlert(message + "!");
			setTimeout(() => {
				setAlert("");
			}, 3000);
		}
		localStorage.clear();
	}, []);

	return (
		<HomeLayout>
			<div className="w-max p-10 bg-black backdrop:blur-3xl bg-opacity-80  h-screen">
				<Logo />

				<div className=" m-auto  justify-center align-middle space-y-14">
					<Alert alert={alert} pClass="text-center text-white text-xl" />

					<NavButtons
						divClass="my-3"
						buttonClass="px-8 py-2 border-2  border-yellow-600 text-white  transition-all hover:tracking-wider hover:text-yellow-600  "
						name="Join Our Community"
						nav="/enroll"
						h1Class="m-5"
					/>
					<NavButtons
						divClass="my-3"
						buttonClass="px-8 py-2 border-2  border-yellow-600 text-white  transition-all hover:tracking-wider hover:text-yellow-600  "
						name="Already a Member?"
						nav="/member"
						h1Class="m-5"
					/>
				</div>
			</div>
		</HomeLayout>
	);
}
