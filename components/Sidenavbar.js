import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	return (
		<nav className="Sidenavbar basis-1/5 z-10">
            <div id="sidenav_container" className="sidenav-container">
                <div className="hidden md:flex justify-end items-center overflow-hidden mr-3">
                    <button className="sidenav-toggle flex justify-center items-center text-white text-4xl" onClick={
                        () => {
                            console.log("clicked")
                            let sidenav = document.getElementsByClassName("Sidenavbar")[0];
                            sidenav.classList.toggle("basis-1/5");
                            sidenav.classList.toggle("basis-1/12");

                            let main = document.getElementById("sidenav_main");
                            main.classList.toggle("basis-4/5");
                            main.classList.toggle("basis-11/12");

                            let btn_toggle = document.getElementsByClassName("sidenav-toggle")[0];
                            btn_toggle.classList.toggle("rotate");
                            if (btn_toggle.classList.contains("rotate")) {
                                btn_toggle.innerHTML = "&#8594;";
                            }
                            else {
                                btn_toggle.innerHTML = "&#8592;";                                
                            }
                        }
                    }>&#8592;</button>
                </div>
                <div className="flex items-center justify-center mt-5">
                    <Link href="/management">
                        <Image
                            src="/images/logo_mela_rossa.png"
                            className="logo"
                            width={60}
                            height={60}
                            alt="La Mela Rossa"
                        />
                    </Link>
                </div>
                <div className="hidden md:block text-white text-center text-xl my-5 uppercase font-bold">
                    Benvenuto<br></br>
                    Giacomo!
                </div>
                <div className="sidenav-item-container">
                    <div className="sidenav-item">
                        <Link href="/management/users">
                            <a className="nav-link">UTENTI</a>
                        </Link>
                    </div>
                    <div className="sidenav-item">
                        <Link href="/management/summer_centers">
                            <a className="nav-link">CENTRI ESTIVI</a>
                        </Link>
                    </div>
                    <div className="sidenav-item">
                        <Link href="/management/lists">
                            <a className="nav-link">LISTE</a>
                        </Link>
                    </div>
                    <div className="sidenav-item">
                        <Link href="/management/events">
                            <a className="nav-link">EVENTI</a>
                        </Link>
                    </div>
                </div>
                <button className="btn text-xl my-5 mx-auto uppercase font-bold">
                    <Link href="/">
                        <a>LOGOUT</a>
                    </Link>
                </button>
            </div>
		</nav>
	);
}