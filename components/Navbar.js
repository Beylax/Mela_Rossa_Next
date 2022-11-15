import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="Navbar md:max-h-24 p-4 text-white z-10">
			<div
				id="nav_container"
				className="container md:max-h-24 mx-auto flex flex-col md:flex-row md:items-center"
			>
				<Link href="/">
					<a className="hidden md:block max-h-screen items-center flex justify-center cursor-pointer">
						<Image
							src="/images/logo_mela_rossa.png"
							className="logo"
							width={60}
							height={60}
							alt="La Mela Rossa"
						/>
					</a>
				</Link>
				<div className=" max-h-screen md:grow flex flex-col md:flex-row gap-10 justify-end items-center text-xl font-light mb-8 md:mb-0">
					<Link href="/">
						<a className="nav-link">HOME</a>
					</Link>
					<Link href="/info">
						<a className="nav-link">INFO</a>
					</Link>
					<Link href="/signin">
						<a className="nav-link">ISCRIZIONE</a>
					</Link>
					<Link href="/api/auth/signin">
						<a className="btn">ACCEDI</a>
					</Link>
				</div>
				<section
					id="nav_container_toggler"
					className="relative h-12 w-12 flex items-center justify-center mx-auto md:hidden"
				>
					<input
						type="checkbox"
						className="absolute inset-0 opacity-0"
					/>
				</section>
			</div>
		</nav>
	);
}
