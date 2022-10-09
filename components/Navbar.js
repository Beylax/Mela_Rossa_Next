import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="Navbar md:max-h-24 w-screen p-4 text-white z-10">
			<div
				id="nav_container"
				className="container md:max-h-24 mx-auto flex flex-col md:flex-row md:items-center"
			>
				<Link href="/">
					<div className="max-h-screen mb-5 md:mb-0 items-center flex justify-center cursor-pointer">
						<Image
							src="/images/logo_mela_rossa.png"
							className="logo"
							width={60}
							height={60}
							alt="La Mela Rossa"
						/>
					</div>
				</Link>
				<div className=" max-h-screen md:grow flex flex-col md:flex-row gap-10 justify-end items-center text-xl font-light mb-4 md:mb-0">
					<Link href="/">
						<a className="nav-link">HOME</a>
					</Link>
					<Link href="/about">
						<a className="nav-link">CONOSCICI</a>
					</Link>
					<Link href="/contact">
						<a className="nav-link">CONTATTACI</a>
					</Link>
					<Link href="/login">
						<a className="btn">ACCEDI</a>
					</Link>
				</div>
				<span
					id="nav_container_toggler"
					className="relative h-12 w-8 flex items-center justify-center mx-auto md:hidden text-xl font-bold"
				>
					<input
						type="checkbox"
						className="absolute inset-0 opacity-0"
					/>
				</span>
			</div>
		</nav>
	);
}
