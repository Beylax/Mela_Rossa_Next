import Navbar from "./Navbar";
import Sidenavbar from "./Sidenavbar";
import Footer from "./Footer";
import Loading from "./loading";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react";

export default function Layout({ children }) {
	let router = useRouter();

	const { status } = useSession();   
	
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
		console.log(status);
		if (status === "unauthenticated") {
			router.replace("/api/auth/signin");
		}

		if (status === "authenticated") {
			return (
				<div className="flex min-h-screen">
					<Sidenavbar/>
					<main id="sidenav_main" className="relative basis-5/6">{children}</main>
				</div>
			);
		}

		return <Loading/>
	}

	return (
		<>
			<Navbar />
			<main className="relative">{children}</main>
			<Footer />
		</>
	);
}
