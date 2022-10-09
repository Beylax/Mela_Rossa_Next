import { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState();
	const [pwd, setPwd] = useState();

	return (
		<div className="Login absolute inset-0 text-center text-2xl flex justify-center items-center">
			<form
				id="login_form"
				className="w-full w-11/12 md:w-1/2 py-7 py-28"
                onSubmit={(event) => {
                    event.preventDefault();
                    //Login logic
                }}
			>
				<label htmlFor="email" className="font-bold">Email🍎</label>
				<input
					type="email"
					className="h-10 my-4 mx-auto w-9/12"
					onChange={(event) => setEmail(event.target.value)}
				/>
				<label htmlFor="password" className="font-bold">Password🍎</label>
				<input
					type="password"
					className="h-10 my-4 mx-auto w-9/12"
					onChange={(event) => setPwd(event.target.value)}
				/>
				<button type="submit" className="btn mx-auto">
					ACCEDI
				</button>
			</form>
		</div>
	);
}
