import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useRouter } from 'next/router'

export default function Layout({ children }) {
	let router = useRouter();

	useEffect(() => {
		let links = document.getElementsByClassName("nav-link");
		for (let i = 0; i < links.length; i++){
			if (links[i].getAttribute("href") === router.pathname) {
				links[i].classList.add("active");
			}
			else {
				links[i].classList.remove("active");				
			}
		}
	});

	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
