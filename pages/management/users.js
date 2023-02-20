import Image from "next/image";
import axios from "axios";
import Loading from "../../components/Loader";
import { useEffect, useState } from "react";

export default function Users() {
	const [isLoading, setLoading] = useState(true);
	const [users, setUsers] = useState(null);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`/api/users`)
			.then((data) => {
				setUsers(data.data);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
			});
	}, []);

	if (isLoading) {
		return <Loading></Loading>;
	}

	if (users?.length === 0) {
		return <div className="Users">Users not available</div>;
	}

	return (
		<div className="Users relative p-2 md:p-6">
			{/* <div className="italic text-center">
                <h6>Admin = 0</h6>
                <h6>Educatore = 1</h6>
                <h6>Aiutante = 2</h6>
            </div>
            <div className="p-5 flex flex-wrap justify-evenly gap-y-20 mx-auto">
                {
                    users.map((user, i) => (
                        <div key={i} className="user w-full md:w-5/12 p-5">
                            <div className="flex justify-center items-center">
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
                                    <div className="text-2xl font-bold my-3">Soprannome</div>
                                    <input className="w-full" type="text" placeholder={user.Surname}/>
                                    <div className="text-2xl font-bold my-3">Nome</div>
                                    <input className="w-full" type="text" placeholder={user.Firstname} />
                                    <div className="text-2xl font-bold my-3">Cognome</div>
                                    <input className="w-full" type="text" placeholder={user.Lastname}/>
                                    <div className="text-2xl font-bold my-3">Telefono</div>
                                    <input className="w-full" type="text" placeholder={user.Telephone}/>
                                </div>
                                <div className="w-full md:w-1/2 md:pl-2">
                                    <div className="text-2xl font-bold my-3">Username</div>
                                    <input className="w-full" type="text" placeholder={user.Username} />
                                    <div className="text-2xl font-bold my-3">Role</div>
                                    <input className="w-full" type="text" placeholder={user.Role}/>
                                    <div className="text-2xl font-bold my-3">Email</div>
                                    <input className="w-full" type="mail" placeholder={user.Email}/>
                                    <div className="text-2xl font-bold my-3">Descrizione</div>
                                    <input className="w-full" type="text" placeholder={user.Description}/>
                                </div>
                                <button className="btn btn-primary w-1/7 mt-5 mx-auto disabled" type="submit" disabled>APPLICA CAMBIAMENTI</button>
                            </form>
                        </div>
                    ))
                }
            </div> */}

			<h1 className="text-4xl font-bold mb-6">User Management</h1>
			<div className="grid grid-cols-3 gap-4 items-center justify-center">
				{users.map((user, i) => (
					<div
						key={`${i}-user`}
						className="relative p-5 border-2 rounded-[10px] cursor-pointer hover:border-green transition-all"
						data-target={user.Surname}
						onClick={(e) => {
							const users_info =
								document.getElementsByClassName("user-info");
							for (let i = 0; i < users_info.length; i++) {
								if (
									users_info[i].id ===
									e.currentTarget.getAttribute("data-target")
								) {
									document
										.getElementById(users_info[i].id)
										.classList.toggle("open");
								} else {
									users_info[i].classList.remove("open");
								}
							}
						}}
					>
						<input
							id={`${i}-check`}
							type="checkbox"
							className="absolute top-4 left-4 !outline-none"
						></input>
						{/* <label
							for={`${i}-check`}
							className="absolute inset-0 cursor-pointer"
						></label> */}
						<div className="flex justify-center">
							<Image
								src="/images/logo_mela_rossa.png"
								width={100}
								height={100}
								alt="La Mela Rossa"
							/>
						</div>
						<div className="font-bold text-center uppercase">
							{user.Surname}
						</div>
						<div className="font-bold">{user.Firstname}</div>
						<div className="font-bold">{user.Lastname}</div>
					</div>
				))}
			</div>

			{/* Users info */}
			{users.map((user, i) => (
				<div
					id={user.Surname}
					key={`${i}-user-info`}
					className="user-info fixed w-full md:w-1/3 top-4 bottom-4 right-4 p-5 translate-x-[110%] bg-white border-2 rounded-[10px] transition-all z-10"
				>
					<div className="fixed top-6 right-6 font-bold cursor-pointer" onClick={() => {
						document.getElementById(user.Surname).classList.remove("open");
					}}>&#10005;</div>
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
								placeholder={user.Surname}
							/>
							<div className="text-2xl font-bold my-3">Nome</div>
							<input
								className="w-full"
								type="text"
								placeholder={user.Firstname}
							/>
							<div className="text-2xl font-bold my-3">
								Cognome
							</div>
							<input
								className="w-full"
								type="text"
								placeholder={user.Lastname}
							/>
							<div className="text-2xl font-bold my-3">
								Telefono
							</div>
							<input
								className="w-full"
								type="text"
								placeholder={user.Telephone}
							/>
						</div>
						<div className="w-full md:w-1/2 md:pl-2">
							<div className="text-2xl font-bold my-3">
								Username
							</div>
							<input
								className="w-full"
								type="text"
								placeholder={user.Username}
							/>
							<div className="text-2xl font-bold my-3">Email</div>
							<input
								className="w-full"
								type="mail"
								placeholder={user.Email}
							/>
							<div className="text-2xl font-bold my-3">
								Password
							</div>
							<input className="w-full" type="password" />
							<div className="text-2xl font-bold my-3">
								Descrizione
							</div>
							<input
								className="w-full"
								type="text"
								placeholder={user.Description}
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
			))}
		</div>
	);
}
