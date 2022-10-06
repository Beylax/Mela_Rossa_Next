import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
        <nav className="Navbar md:max-h-24 w-screen p-4 text-white">
            <div id="nav_container" className="container md:max-h-24 mx-auto flex flex-col md:flex-row md:items-center">
                <Link href="/">
                    <Image src="/images/logo_mela_rossa.png" className="logo flex md:grow-0 basis-5 cursor-pointer" width={70} height={70} alt="La Mela Rossa" />
                </Link>
                <div className="md:grow flex flex-col md:flex-row  gap-10 justify-end items-center text-xl font-light">
                    <Link href="/"><a className="nav-link">HOME</a></Link>
                    <Link href="/about"><a className="nav-link">ABOUT</a></Link>
                    <Link href="/contact"><a className="nav-link">CONTACT</a></Link>
                    <Link href="/login"><a className="btn">ACCEDI</a></Link>                    
                </div>
            </div>
            <div id="nav_container_toggler" className="h-12 w-8 flex items-center justify-center mx-auto mt-4 md:hidden text-xl font-bold">
            </div>
		</nav>
	);
};

export default Navbar;