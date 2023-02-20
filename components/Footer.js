export default function Footer() {
	return (
		<div className="Footer bg-red h-20 flex justify-center items-center text-white text-center z-10">
			Copyright @ {new Date().getFullYear()} - La Mela Rossa ASP by
			<a href="https://manuelbaldoni.it" target="_blank" rel="noreferrer" className="block ml-1 hover:text-dark_green">Manuel Baldoni</a>
		</div>
	);
}
