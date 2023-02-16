import Link from "next/link";
import Image from "next/image";

export default function ErrorPage() {
	return (
		<div className="ErrorPage w-full h-full p-10 md:p-40">
			<Link href="/">
				<a className="items-center flex justify-center cursor-pointer m-auto animate-bounce">
					<Image
						src="/images/logo_mela_rossa.png"
						className="logo"
						width={150}
						height={150}
						alt="La Mela Rossa"
					/>
				</a>
            </Link>
            <div className="mx-auto my-5 text-center font-bold">Pagina non esistente</div>
            <Link href="/">
                <a className="btn btn-primary items-center flex justify-center w-1/3 m-auto">TORNA ALLA HOME</a>
            </Link>
		</div>
	);
}
