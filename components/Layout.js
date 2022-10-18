import Navbar from "./Navbar";
import Sidenavbar from "./Sidenavbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useRouter } from 'next/router'

export default function Layout({ children }) {
	let router = useRouter();

	useEffect(() => {
		//Check the active link
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

	if (router.pathname.includes("/management")) { 
		return (
			<div className="flex min-h-screen">
				<Sidenavbar/>
				<main id="sidenav_main" className="basis-5/6">{children}</main>
			</div>
		);
	}

	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
