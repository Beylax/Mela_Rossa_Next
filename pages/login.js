import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import Loading from "../components/loading";

export default function Login() {
	const [isLoading, setLoading] = useState(false);
	const [email, setEmail] = useState();
	const [pwd, setPwd] = useState();

	const [error, setError] = useState("");

	var md5 = require("md5");
	let router = useRouter();

	if (isLoading) { 
		return <Loading></Loading>;
	}

	return (
		<div className="Login text-center text-2xl flex justify-center items-center my-10 md:my-0">
			<form
				id="login_form"
				className="w-full w-11/12 md:w-1/2 py-28"
				onSubmit={(event) => {
					event.preventDefault();
					setLoading(true);

					signIn('credentials', {
						email: email,
						password: pwd,
						redirect: false,
					}).then(res => {
						if (res.status === 401) {
							//oppure lanciare un toaster
							setError(res.error);
							setLoading(false);
						}

						if (res.status === 200) {
							router.push("/management");							
						}
						
					});

				}}
			>
				<label htmlFor="email" className="font-bold">
					Email🍎
				</label>
				<input
					type="email"
					className="h-10 my-4 mx-auto w-9/12"
					onChange={(event) => setEmail(event.target.value)}
					required
				/>
				<label htmlFor="password" className="font-bold">
					Password🍎
				</label>
				<input
					type="password"
					className="h-10 my-4 mx-auto w-9/12"
					onChange={(event) => setPwd(md5(event.target.value))}
					required
				/>
				<button type="submit" className="btn btn-primary mx-auto">
					ACCEDI
				</button>
				<div className="text-red text-center">{error}</div>
			</form>
		</div>
	);
}
