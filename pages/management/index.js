import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Management() {
	const { data: session, status } = useSession();

	return (
		<div className="Management p-5">
			<div className="flex justify-center items-center">
				{/* Selettore di immagine anche da file */}
				<Image
					src="/images/logo_mela_rossa.png"
					className="logo"
					width={200}
					height={200}
					alt="La Mela Rossa"
				/>
			</div>
			<form className="flex flex-col md:flex-row flex-wrap">
				<div className="w-full md:w-1/2 md:pr-2">
					<div className="text-2xl font-bold my-3">
						Surname
					</div>
					<input
						className="w-full"
						type="text"
						placeholder={session.user.Surname}
					/>
					<div className="text-2xl font-bold my-3">Nome</div>
					<input
						className="w-full"
						type="text"
						placeholder={session.user.Firstname}
					/>
					<div className="text-2xl font-bold my-3">Cognome</div>
					<input
						className="w-full"
						type="text"
						placeholder={session.user.Lastname}
					/>
					<div className="text-2xl font-bold my-3">Telefono</div>
					<input
						className="w-full"
						type="text"
						placeholder={session.user.Telephone}
					/>
				</div>
				<div className="w-full md:w-1/2 md:pl-2">
					<div className="text-2xl font-bold my-3">Username</div>
					<input
						className="w-full"
						type="text"
						placeholder={session.user.Username}
					/>
					<div className="text-2xl font-bold my-3">Email</div>
					<input
						className="w-full"
						type="mail"
						placeholder={session.user.Email}
					/>
					<div className="text-2xl font-bold my-3">Password</div>
					<input
						className="w-full"
						type="password"
					/>
					<div className="text-2xl font-bold my-3">
						Descrizione
					</div>
					<input
						className="w-full"
						type="text"
						placeholder={session.user.Description}
					/>
				</div>
				<button
					className="btn btn-primary w-1/7 mt-5 mx-auto disabled"
					type="submit"
					disabled
				>
					APPLICA CAMBIAMENTI
				</button>
			</form>
		</div>
	);
}
