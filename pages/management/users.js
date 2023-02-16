import Image from "next/image";
import axios from "axios";
import Loading from "../../components/loading";
import { useEffect, useState } from "react";

export default function Users() {
    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState(null);

    useEffect(() => {
		setLoading(true);
		axios.get(`/api/users`).then((data) => {
			setUsers(data.data);
			setLoading(false);
		});
	}, []);

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className="Users p-2 md:p-6">
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

            <h1 className="text-xl font-bold mb-6">User Management</h1>
            <div className="grid grid-cols-3 gap-4 items-center justify-center">
                {
                    users.map((user, i) => (
                        <div key={i} className="user border rounded-[10px] p-5">
                            <div className="flex justify-center items-center">
                                <Image
                                    src="/images/logo_mela_rossa.png"
                                    className="logo"
                                    width={100}
                                    height={100}
                                    alt="La Mela Rossa"
                                />
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    );
}