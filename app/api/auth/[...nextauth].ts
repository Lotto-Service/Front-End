import axios from "axios";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(
        credentials: Record<"username" | "password", string> | undefined
      ) {
        if (!credentials) return null;
        const { username, password } = credentials;
        try {
          const response = await axios.post(
            `${process.env.NEXTAUTH_URL}/users/authenticate`,
            { username, password }
          );

          const data = response.data;

          if (data) {
            return {
              id: data.id,
              name: data.name,
              email: data.email,
              token: data.token,
            };
          }
        } catch (err) {
          console.error("Authentication error:", err);
        }
        return null;
      },
    }),
  ],
  // callbacks: {
  //   async session(session: { token: string; }, token: { token: string; }) {
  //     session.token = token.token,
  //     ;
  //   }
  // },
});
