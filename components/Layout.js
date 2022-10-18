import Navbar from "./Navbar";
import Sidenavbar from "./Sidenavbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react";
import Loading from "../components/loading";

export default function Layout({ children }) {
	let router = useRouter();
	const { status, data } = useSession();

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

	}, [status]);

	if (router.pathname.includes("/management")) { 
		if (status === "authenticated") {
			return (
				<div className="flex min-h-screen">
					<Sidenavbar/>
					<main id="sidenav_main" className="basis-5/6">{children}</main>
				</div>
			);
		}
		
		if (status === "unauthenticated") {
			router.replace("/api/auth/signin");
		}

		return <Loading/>
	}

	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
