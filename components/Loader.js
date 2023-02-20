import Image from "next/image";

export default function Loader() {
	return (
		<div className="Loader fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-white z-50">
			<div className="animate-bounce">
				<Image
					src="/images/logo_mela_rossa.png"
					className="logo"
					width={150}
					height={150}
					alt="La Mela Rossa"
				/>
			</div>
		</div>
	);
}
