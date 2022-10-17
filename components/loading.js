import Image from "next/image";

export default function Loader() {
	return (
		<div className="Loader position-fixed w-screen h-screen flex justify-center items-center bg-white animate-bounce">
			<Image
				src="/images/logo_mela_rossa.png"
				className="logo"
				width={150}
				height={150}
				alt="La Mela Rossa"
			/>
		</div>
	);
}
