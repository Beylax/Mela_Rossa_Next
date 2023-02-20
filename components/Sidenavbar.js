import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
	const { data: session, status } = useSession();

	return (
		<nav
			id="sidenavbar"
			className="Sidenavbar fixed bg-red w-4/5 md:w-1/5 data-[status=close]:md:w-[5rem] h-full z-10 peer group"
			data-status="open"
		>
			<div id="sidenav_container" className="sidenav-container">
				<div className="hidden md:flex justify-end items-center overflow-hidden mr-3">
					<button
						id="sidenav-toggle"
						className="mt-2 flex justify-center items-center text-white group-data-[status=close]:rotate-180 transition-all"
						onClick={() => {
							const sidenavbar = document.getElementById("sidenavbar");
							if (sidenavbar.getAttribute("data-status") === "open") {
								sidenavbar.setAttribute("data-status", "close");
							}
							else {
								sidenavbar.setAttribute("data-status", "open");
							}
						}}
					>
						<Image src="/images/left_arrow.png" width={36} height={36} alt="toggle"></Image>
					</button>
				</div>
				<div className="side-user-card relative w-3/4 aspect-square mt-5 mx-auto p-5 bg-white rounded-[10px] shadow-user overflow-hidden">
					<div className="wave"></div>
					<div className="w-fit h-1/2 mx-auto">
						<Link href="/management">
							<Image
								src="/images/logo_mela_rossa.png"
								className="logo cursor-pointer"
								width={60}
								height={60}
								alt="La Mela Rossa"
							/>
						</Link>
					</div>
					{ session.user.Surname }
				</div>
				<div className="sidenav-item-container p-4">
					{
						session.user.Role === 0 ? 
						<div className="sidenav-item">
							<Image src="/images/user.png" width={36} height={36} alt="user"></Image>
							<Link href="/management/users">
								<a className="nav-link group-data-[status=close]:hidden">UTENTI</a>
							</Link>
						</div> : null
					}
					<div className="sidenav-item">
						<Image src="/images/sun.png" width={36} height={36} alt="summer_centers"></Image>
						<Link href="/management/summer_centers">
							<a className="nav-link group-data-[status=close]:hidden">CENTRI ESTIVI</a>
						</Link>
					</div>
					<div className="sidenav-item">
						<Image src="/images/list.png" width={36} height={36} alt="lists"></Image>
						<Link href="/management/lists">
							<a className="nav-link group-data-[status=close]:hidden">LISTE</a>
						</Link>
					</div>
					<div className="sidenav-item">
						<Image src="/images/events.png" width={36} height={36} alt="events"></Image>
						<Link href="/management/events">
							<a className="nav-link group-data-[status=close]:hidden">EVENTI</a>
						</Link>
					</div>
					<button className="my-5 hidden group-data-[status=close]:block" type="button" onClick={() => signOut()}>
						<Image src="/images/log_out.png" width={36} height={36} alt="log_out"></Image>
					</button>
					<button
						className="btn btn-primary w-11/12 md:w-auto text-xl my-5 uppercase font-bold group-data-[status=close]:hidden"
						onClick={() => signOut()}
					>
						LOGOUT
					</button>
				</div>
			</div>
		</nav>
	);
}
