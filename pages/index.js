import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<div>
			<Head>
				<title>La Mela Rossa</title>
				<meta
					name="description"
					content="La mela rossa web site"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Navbar/>
			</main>
		</div>
	);
}
