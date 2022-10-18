import { useState, useEffect } from "react";
import { signIn } from 'next-auth/react'

export default function Login() {
	const [email, setEmail] = useState();
	const [pwd, setPwd] = useState();

	var md5 = require("md5");

	return (
		<div className="Login text-center text-2xl flex justify-center items-center my-10 md:my-24">
			<form
				id="login_form"
				className="w-full w-11/12 md:w-1/2 py-28"
				onSubmit={(event) => {
					event.preventDefault();

					const res = signIn('credentials', {
						email: email,
						password: pwd,
						redirect: false,
					});

					console.log(res);
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
				<button type="submit" className="btn mx-auto">
					ACCEDI
				</button>
			</form>
		</div>
	);
}
