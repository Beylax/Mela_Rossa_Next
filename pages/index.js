import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import dbconn from "../dbconnection";

export default function Home() {
	return (
		<div className="Home mx-2">
			<Head>
				<title>La Mela Rossa</title>
				<meta
					name="description"
					content="La mela rossa web site"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section className="flex flex-col md:flex-row justify-center my-10 md:my-20 text-center">
				<div className="md:w-1/2 font-bold italic flex flex-col justify-center items-center">
					<div className="text-5xl md:text-7xl mx-auto">Entra nella</div>
					<div className="text-5xl md:text-7xl mx-auto">famiglia della</div>
					<div className="text-5xl md:text-7xl text-red my-5 mx-auto whitespace-nowrap">MELA ROSSA</div>
					<div className="text-xl md:text-2xl text-red font-normal mx-10">Centri estivi - Doposcuola - Giochi - Uscite - Sport</div>
					<div className="h-16 flex w-11/12 lg:w-1/2 my-5">
						<Link href="#contact">
							<a className="btn w-1/2 mr-2">CONTATTACI</a>
						</Link>
						<Link href="/signin">
							<a className="btn w-1/2 mr-2">ISCRIVITI</a>
						</Link>
					</div>
				</div>
				<div className="md:w-1/2 md:aspect-auto mt-2 md:mt-0">
					<div id="hero_img" className="w-10/12 mx-auto relative">
						<Image src="/images/logo_mela_rossa_cropped.png" alt="logo" layout="fill"/>
					</div>
				</div>
			</section>
		</div>
	);
}
