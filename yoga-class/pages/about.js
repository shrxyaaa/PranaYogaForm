import { useRouter } from "next/navigation";
import Link from "next/link";
import { Navbar } from "../components/Navbar";
import Paragraph from "../components/about/Paragraph";
import { NavButtons } from "../components/Button";
import Modal from "../components/about/Modal";
import AboutLayout from "../components/pageLayouts/AboutLayout";

export default function Home() {
	const router = useRouter();

	return (
		<AboutLayout>
			<img
				className="-z-50 object-cover absolute top-0 left-0 w-screen h-screen"
				src="/theme.jpg"
			/>

			<Modal />
		</AboutLayout>
	);
}
