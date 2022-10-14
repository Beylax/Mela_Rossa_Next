import Image from "next/image";

export default function Users() {
    return (
        <div className="Users p-5 flex flex-wrap justify-evenly mx-auto">
            <div className="user w-full md:w-5/12 p-5">
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
                        <div className="text-2xl font-bold my-3">Soprannome</div>
                        <input className="w-full" type="text" placeholder="Cacio"/>
                        <div className="text-2xl font-bold my-3">Nome</div>
                        <input className="w-full" type="text" placeholder="Giacomo"/>
                        <div className="text-2xl font-bold my-3">Cognome</div>
                        <input className="w-full" type="text" placeholder="Caciotta"/>
                        <div className="text-2xl font-bold my-3">Telefono</div>
                        <input className="w-full" type="text" placeholder="3934852348"/>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-2">
                        <div className="text-2xl font-bold my-3">Username</div>
                        <input className="w-full" type="text" placeholder="admin"/>
                        <div className="text-2xl font-bold my-3">Email</div>
                        <input className="w-full" type="mail" placeholder="giacomo.caciotta@gmail.com"/>
                        <div className="text-2xl font-bold my-3">Descrizione</div>
                        <input className="w-full" type="text" placeholder="Ciao! Sono Giacomo Caciotta, per gli amici Cacio"/>
                    </div>
                    <button className="btn w-1/7 mt-5 mx-auto disabled" type="submit" disabled>APPLICA CAMBIAMENTI</button>
                </form>
            </div>
            <div className="user w-full md:w-5/12 p-5">
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
                        <div className="text-2xl font-bold my-3">Soprannome</div>
                        <input className="w-full" type="text" placeholder="Cacio"/>
                        <div className="text-2xl font-bold my-3">Nome</div>
                        <input className="w-full" type="text" placeholder="Giacomo"/>
                        <div className="text-2xl font-bold my-3">Cognome</div>
                        <input className="w-full" type="text" placeholder="Caciotta"/>
                        <div className="text-2xl font-bold my-3">Telefono</div>
                        <input className="w-full" type="text" placeholder="3934852348"/>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-2">
                        <div className="text-2xl font-bold my-3">Username</div>
                        <input className="w-full" type="text" placeholder="admin"/>
                        <div className="text-2xl font-bold my-3">Email</div>
                        <input className="w-full" type="mail" placeholder="giacomo.caciotta@gmail.com"/>
                        <div className="text-2xl font-bold my-3">Descrizione</div>
                        <input className="w-full" type="text" placeholder="Ciao! Sono Giacomo Caciotta, per gli amici Cacio"/>
                    </div>
                    <button className="btn w-1/7 mt-5 mx-auto disabled" type="submit" disabled>APPLICA CAMBIAMENTI</button>
                </form>
            </div>
        </div>
    );
}