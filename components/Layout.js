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
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
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
		if (status === "unauthenticated") {
			router.replace("/api/auth/signin");
		}

		if (status === "authenticated") {
			return (
				<div className="min-h-screen">
					<Sidenavbar/>
					<main id="sidenav_main" className="relative md:ml-[20%] peer-data-[status=close]:ml-[5rem] peer">{children}</main>
				</div>
			);
		}

		return <Loading/>
	}

	return (
		<div className="Layout flex flex-col">
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
