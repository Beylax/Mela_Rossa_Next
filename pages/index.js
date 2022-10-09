import Head from "next/head";

export default function Home() {
	return (
		<div className="Home container mx-auto">
			<Head>
				<title>La Mela Rossa</title>
				<meta
					name="description"
					content="La mela rossa web site"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section className="flex flex-col md:flex-row justify-center items-center my-20 text-center">
				<div className="md:w-1/2 font-bold italic flex flex-col justify-center items-center">
					<div className="text-5xl md:text-7xl mx-auto">Entra nella</div>
					<div className="text-5xl md:text-7xl mx-auto">famiglia della</div>
					<div className="text-5xl md:text-7xl text-red my-5 mx-auto">MELA ROSSA</div>
					<div className="text-xl md:text-2xl text-red font-normal mx-auto">Centri estivi - Doposcuola - Giochi - Uscite - Sport</div>
					<div className="flex md:w-1/2 mt-5">
						<button type="button" className="btn w-1/2 mr-2">CONTATTACI</button>
						<button type="button" className="btn w-1/2 ml-2">ISCRIVITI</button>
					</div>
				</div>
				<div className="md:w-1/2 flex justify-center mt-2">
					<img src="/images/logo_mela_rossa_cropped.png" alt="logo"/>
				</div>
			</section>
		</div>
	);
}
