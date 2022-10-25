import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import mysql from "mysql2/promise";
import dbconn from "../../../dbconnection";

export default NextAuth({
	providers: [
		CredentialProvider({
			type: "credentials",
			name: "Login",
			credentials: {
				email: {},
				password: {},
			},
			async authorize(credentials, req) {
				const { email, password } = credentials;

				// database look up
				const dbconnection = await mysql.createConnection(dbconn);

				const query = `SELECT * FROM Users WHERE Email = ? OR Username = ?`;
				const values = [email, email];
				const [data] = await dbconnection.execute(query, values);
				dbconnection.end();

				const user = data[0];

				if (!user) {
					// login failed
					throw new Error("Utente non esistente");
				}

				if (user.Pwd !== password) {
					// login failed
					throw new Error("Credenziali non corrette");
				}

				return Promise.resolve(user);
			},
		}),
	],
	callbacks: {
		jwt: async ({ token, user }) => {
			user && (token.user = user)
			return token
		},
		session: async ({ session, token }) => {
			session.user = token.user
			return session
		}
	},
	pages: {
		signIn: "/login",
	},
});
