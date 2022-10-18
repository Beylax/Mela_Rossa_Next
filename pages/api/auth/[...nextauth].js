import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import mysql from "mysql2/promise";
import dbconn from "../../../dbconnection";
import NextCors from "nextjs-cors";

export default NextAuth({
	providers: [
		CredentialProvider({
			type: "credentials",
			name: "Credentials",
			credentials: {},
			authorize: async (credentials) => {
				const { email, password } = credentials;

				// database look up
				const dbconnection = await mysql.createConnection(dbconn);

				const query = `SELECT * FROM Users WHERE Email = ? AND Pwd = ?`;
				const values = [email, password];
				const [data] = await dbconnection.execute(query, values);
				dbconnection.end();

				if (data.length !== 0) {
					return data[0];
				}

				// login failed
				throw new Error("Credenziali non corrette");
			},
		}),
	],
	// callbacks: {
	// 	jwt: ({ token, user }) => {
	// 		// first time jwt callback is run, user object is available
	// 		if (user) {
	// 			token.id = user.id;
	// 		}

	// 		return token;
	// 	},
	// 	session: ({ session, token }) => {
	// 		if (token) {
	// 			session.id = token.id;
	// 		}

	// 		return session;
	// 	},
	// },
	// secret: "test",
	// jwt: {
	// 	secret: "test",
	// 	encryption: true,
	// },
	pages: {
		signIn: "/login",
	},
});
