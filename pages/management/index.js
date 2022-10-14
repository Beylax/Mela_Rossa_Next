import Image from "next/image";

export default function Management() {
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
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                    <div className="text-2xl font-bold mb-3">Soprannome</div>
                    <input className="w-full" type="text" placeholder="Cacio"/>
                    <div className="text-2xl font-bold mb-3">Nome</div>
                    <input className="w-full" type="text" placeholder="Giacomo"/>
                    <div className="text-2xl font-bold mb-3">Cognome</div>
                    <input className="w-full" type="text" placeholder="Caciotta"/>
                    <div className="text-2xl font-bold mb-3">Telefono</div>
                    <input className="w-full" type="text" placeholder="3934852348"/>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="text-2xl font-bold mb-3">Username</div>
                    <input className="w-full" type="text" placeholder="admin"/>
                    <div className="text-2xl font-bold mb-3">Email</div>
                    <input className="w-full" type="mail" placeholder="giacomo.caciotta@gmail.com"/>
                    <div className="text-2xl font-bold mb-3">Descrizione</div>
                    <input className="w-full" type="text" placeholder="Ciao! Sono Giacomo Caciotta, per gli amici Cacio"/>
                </div>
            </div>
        </div>
    );
}